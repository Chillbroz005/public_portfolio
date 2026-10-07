import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { SqliteDatabase, SqliteResult, SqliteStatement } from "../../functions/_shared/server";

type NativeStatement = {
  get(...values: unknown[]): Record<string, unknown> | undefined;
  run(...values: unknown[]): { changes: number | bigint };
};

type NativeDatabase = {
  exec(sql: string): void;
  prepare(sql: string): NativeStatement;
};

type NativeSqliteModule = { DatabaseSync: new (filename: string, options?: { timeout?: number }) => NativeDatabase };

class BoundStatement implements SqliteStatement {
  private values: unknown[] = [];

  constructor(private readonly statement: NativeStatement) {}

  bind(...values: unknown[]): SqliteStatement {
    this.values = values;
    return this;
  }

  async first<T = Record<string, unknown>>(): Promise<T | null> {
    return (this.statement.get(...this.values) as T | undefined) ?? null;
  }

  async run(): Promise<SqliteResult> {
    const result = this.statement.run(...this.values);
    return { success: true, meta: { changes: Number(result.changes) } };
  }
}

let connection: NativeDatabase | undefined;

export function getDatabase(): SqliteDatabase {
  if (!connection) {
    const filename = process.env.SQLITE_DB_PATH || path.join(process.cwd(), "data", "portfolio.sqlite");
    if (filename !== ":memory:") mkdirSync(path.dirname(path.resolve(filename)), { recursive: true });
    const { DatabaseSync } = require("node:sqlite") as NativeSqliteModule;
    connection = new DatabaseSync(filename, { timeout: 5000 });
    connection.exec("PRAGMA foreign_keys = ON;");
    applyMigrations(connection);
  }

  return {
    prepare(query: string): SqliteStatement {
      return new BoundStatement(connection!.prepare(query));
    }
  };
}

function applyMigrations(database: NativeDatabase): void {
  database.exec("CREATE TABLE IF NOT EXISTS schema_migrations (name TEXT PRIMARY KEY, applied_at INTEGER NOT NULL);");
  for (const name of ["0001_admin_auth.sql", "0002_second_recovery_question.sql"]) {
    const alreadyApplied = database.prepare("SELECT name FROM schema_migrations WHERE name = ?").get(name);
    if (alreadyApplied) continue;
    const sql = readFileSync(path.join(process.cwd(), "migrations", name), "utf8");
    database.exec(sql);
    database.prepare("INSERT INTO schema_migrations (name, applied_at) VALUES (?, ?)").run(name, Math.floor(Date.now() / 1000));
  }
}

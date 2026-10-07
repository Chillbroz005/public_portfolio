import type { Env, ServerContext } from "../../../../functions/_shared/server";
import * as publish from "../../../../functions/api/editor/publish";
import * as login from "../../../../functions/api/auth/login";
import * as logout from "../../../../functions/api/auth/logout";
import * as password from "../../../../functions/api/auth/password";
import * as recoveryQuestion from "../../../../functions/api/auth/recovery-question";
import * as session from "../../../../functions/api/auth/session";
import * as resetChallenge from "../../../../functions/api/auth/reset/challenge";
import * as resetComplete from "../../../../functions/api/auth/reset/complete";
import * as resetQuestion from "../../../../functions/api/auth/reset/question";
import * as resetRequest from "../../../../functions/api/auth/reset/request";
import * as resetSecurity from "../../../../functions/api/auth/reset/security";
import { getDatabase } from "../../../lib/database";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Method = "GET" | "POST" | "PUT";
type Handler = (context: ServerContext) => Promise<Response>;

const routes: Record<string, Partial<Record<Method, Handler>>> = {
  "editor/publish": { POST: publish.onRequestPost },
  "auth/session": { GET: session.onRequestGet },
  "auth/login": { POST: login.onRequestPost },
  "auth/logout": { POST: logout.onRequestPost },
  "auth/password": { POST: password.onRequestPost },
  "auth/recovery-question": { GET: recoveryQuestion.onRequestGet, PUT: recoveryQuestion.onRequestPut },
  "auth/reset/challenge": { POST: resetChallenge.onRequestPost },
  "auth/reset/complete": { POST: resetComplete.onRequestPost },
  "auth/reset/question": { GET: resetQuestion.onRequestGet },
  "auth/reset/request": { POST: resetRequest.onRequestPost },
  "auth/reset/security": { POST: resetSecurity.onRequestPost }
};

function createEnv(request: Request): Env {
  return {
    DB: getDatabase(),
    AUTH_PEPPER: process.env.AUTH_PEPPER || "",
    GITHUB_CONTENTS_TOKEN: process.env.GITHUB_CONTENTS_TOKEN || "",
    RESEND_API_KEY: process.env.RESEND_API_KEY || "",
    RESEND_FROM: process.env.RESEND_FROM || "",
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || "",
    SITE_ORIGIN: process.env.SITE_ORIGIN || new URL(request.url).origin,
    INITIAL_ADMIN_PASSWORD: process.env.INITIAL_ADMIN_PASSWORD
  };
}

async function dispatch(request: Request): Promise<Response> {
  const path = new URL(request.url).pathname.replace(/^\/api\/?/, "").replace(/\/$/, "");
  const method = request.method.toUpperCase() as Method;
  const handlers = routes[path];
  if (!handlers) return Response.json({ error: "API route not found." }, { status: 404 });
  const handler = handlers[method];
  if (!handler) return Response.json({ error: "Method not allowed." }, { status: 405 });

  try {
    return await handler({ request, env: createEnv(request) });
  } catch (error) {
    console.error("API request failed.", error);
    return Response.json({ error: "The server could not complete this request." }, { status: 500 });
  }
}

export const GET = dispatch;
export const POST = dispatch;
export const PUT = dispatch;

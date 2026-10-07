# Suresh Ganesan Portfolio

Public portfolio for Suresh Ganesan, with resume-aligned career details, profile photo, PDF download, GitHub activity, and a server-backed editor with password recovery and optional GitHub publishing.

## Run locally

Use Node.js 24 and npm 10 or newer:

```bash
npm ci
npm run dev
```

The app runs at `http://localhost:3000`. Next.js Route Handlers provide the API and a local SQLite database is created from the SQL migrations on first request.

## Server configuration

Copy `.env.example` to `.env.local` and set unique private values for the admin password and authentication pepper. Never commit real secrets.

- `AUTH_PEPPER`: a private random value with at least 32 bytes of entropy.
- `INITIAL_ADMIN_PASSWORD`: a temporary initial password of at least 12 characters; remove it after first login.
- `SQLITE_DB_PATH`: optional SQLite file path. Public hosting must use persistent storage; the default is `data/portfolio.sqlite`.
- `SITE_ORIGIN`: the public HTTPS origin used to build password reset links.
- `ADMIN_EMAIL`, `RESEND_API_KEY`, `RESEND_FROM`: optional email reset configuration.
- `GITHUB_OWNER`, `GITHUB_REPOSITORY`, `GITHUB_CONTENTS_TOKEN`: optional GitHub publishing configuration. Restrict the token to the target repository with Contents read/write access.

Recovery answers and admin credentials are stored as salted HMAC-SHA256 verifiers in SQLite, not browser storage or GitHub. Login and recovery attempts are rate-limited in the database.

## Public hosting

This app runs on a Node.js server with persistent disk storage so editor, recovery, and publishing data can survive restarts. Static-only hosting such as GitHub Pages cannot run its API or database. Build with `npm run build` and start with `npm start` on a Node.js 24 host with persistent storage. Configure server environment variables in the host's private settings.

The portfolio details, photo, and resume in this copy use Suresh Ganesan's supplied profile and resume information. Review them before publishing publicly.

# Fictional Portfolio Demo

Next.js static portfolio deployed to Cloudflare Pages, with Pages Functions for the server-backed editor, password recovery, and optional GitHub publishing. Authentication and editor data use Cloudflare D1.

## Local development

Use Node.js 24 and npm 10 or newer:

```powershell
npm ci
Copy-Item .env.example .dev.vars
npm run cf:d1:local
npm run dev
```

Set private `AUTH_PEPPER` and `INITIAL_ADMIN_PASSWORD` values in `.dev.vars` before opening the local preview. Wrangler stores its local D1 data under `.wrangler`, which is ignored by Git.

## Cloudflare setup

Use the existing Cloudflare Pages project named `chillbroz005-portfolio`, with `main` as the production branch. The deployment workflow applies the migrations and uploads both the static site and Pages Functions. The site address is `https://chillbroz005-portfolio.pages.dev`. Make sure the project's Git integration is not also deploying a different repository, or its builds can replace this deployment.

Add these GitHub Actions repository secrets:

- `CLOUDFLARE_API_TOKEN`: token with Cloudflare Pages edit and D1 edit permissions.
- `CLOUDFLARE_ACCOUNT_ID`: your Cloudflare account ID.
- `CLOUDFLARE_D1_DATABASE_ID`: the ID of `portfolio-auth`.

Add these values directly in Cloudflare Pages → Settings → Variables and Secrets before using the protected features:

- `AUTH_PEPPER`: a private random value with at least 32 bytes of entropy.
- `INITIAL_ADMIN_PASSWORD`: a temporary password of at least 12 characters; remove it after the first successful login.
- `GITHUB_CONTENTS_TOKEN`: repository-scoped token for the editor's GitHub publishing feature.
- `ADMIN_EMAIL`, `RESEND_API_KEY`, and `RESEND_FROM`: verified sender settings for email password recovery.
- `SITE_ORIGIN`: public HTTPS URL for reset links. If omitted, the app uses the incoming request origin.

After the D1 database, Pages project, and Actions secrets are set up, pushes to `main` run `.github/workflows/deploy-cloudflare.yml`.

The public site uses fictional demonstration profile data. The profile image is a generic “YOUR PROFILE” logo. The downloadable resume is a fictional sample aligned to the visible website profile; publishing profile edits through the editor also regenerates the resume from the current profile data. All identity, contact, employer, education, award and project details shown are sample data.

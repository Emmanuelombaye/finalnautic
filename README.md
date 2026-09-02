# Nautic Health Clone

Next.js TypeScript clone of [nautichealth.com](https://nautichealth.com), scoped to **semaglutide** and **tirzepatide** only. All homepage sections, navigation, and styling match the original site.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

`npm install` pulls dependencies. Static assets download automatically on `npm run build` (or run `npm run assets` manually).

### Assessment form (optional)

To receive real submissions, create a free [Formspree](https://formspree.io) form and set in Vercel:

```
FORMSPREE_FORM_ID=your_form_id
```

Copy `.env.example` to `.env.local` for local testing. Without this, submissions still succeed (logged locally for demo).

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (or import the folder in Vercel).
2. Click **Import** → select the repo → **Deploy**.
3. No environment variables required — framework preset **Next.js** is auto-detected.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Optional: run `npm run assets` locally and commit `public/assets/` if you want assets self-hosted instead of CDN.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage (100% section clone) |
| `/treatments` | Treatment catalog |
| `/treatments/all` | All programs with pricing |
| `/treatments/weight-management` | Semaglutide + Tirzepatide |
| `/programs/medical-weight-loss` | Semaglutide ($179/mo) |
| `/programs/advanced-weight-loss` | Tirzepatide ($249/mo) |
| `/how-it-works` | Patient journey |
| `/about` | About page |
| `/assessment` | Medical intake form |
| `/journal` | Wellness journal |
| `/patient-portal` | Patient portal |
| `/partners` | Partners |
| `/privacy`, `/terms`, `/contact` | Legal & contact |

## Customization

Treatment data lives in `src/lib/programs.ts`. Update pricing, copy, and branding there.

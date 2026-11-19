# Frontend setup and deployment

This folder is the frontend extracted from the supplied Agentic Calendar Assistant source, with the dashboard components kept in their correct locations under `src/components/`.

## Required environment variables

Create `.env.local` from `.env.example`:

```env
NEXT_PUBLIC_DESCOPE_PROJECT_ID=your_descope_project_id
NEXT_PUBLIC_API_URL=http://localhost:4000
```

For Vercel, set `NEXT_PUBLIC_API_URL` to the deployed backend URL (for example, `https://your-api.onrender.com`). Set `NEXT_PUBLIC_DESCOPE_PROJECT_ID` to your Descope project ID. These two variables are public frontend configuration; never put management keys, OpenAI keys, database passwords, or OAuth client secrets in `NEXT_PUBLIC_` variables.

## Install and run

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Vercel settings

- Import the parent GitHub repository.
- Root Directory: `frontend`
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: leave default
- Install Command: `npm ci` (or let Vercel detect npm)

The `src/components/dashboard` folder contains `chat-panel.tsx` and `markdown-message.tsx`; do not move these files into `src/app/dashboard` because their relative imports expect the components directory structure.

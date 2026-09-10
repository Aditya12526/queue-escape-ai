# QueueEscape AI — Don't stand in line. Know when to arrive.

> Intelligent digital queue management for **colleges, hospitals & banks**.
> **Version 1 — Frontend only (React + TypeScript + Tailwind + Mock Data)**

Live Preview (dev): `https://5173-i9rwhfmxjdomufwfzhwet.e2b.app` *(E2B sandbox)*

---
 Project Structure
```
src/
  components/  Navbar, QueueCard, TokenModal
  pages/       Landing, Login, Signup, Dashboard, MyQueue, Admin
  context/     QueueContext (mock state + live 8s interval)
  data/        mockData.ts (6 queues)
  types.ts
  App.tsx      # React Router
```

---


## 🔧 Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS 3.4
- React Router 7
- Lucide React icons
- Mock data + React Context (no backend / auth / DB / ML / payments in V1)

## 🗺️ Routes
- `/` → Landing
- `/login` → Login
- `/signup` → Signup
- `/dashboard` → Available Queues
- `/my-queue` → My Queue (your tokens)
- `/admin` → Admin (Next / Skip / Add Counter)

---

## ❓ Troubleshooting

**`npm` not found** → Install Node.js from https://nodejs.org and restart terminal.

**Port 5173 already in use** → `npm run dev -- --port 3000` or close other Vite instances.

**Blank page after deploy / 404 on refresh** → Ensure `vercel.json` / `netlify.toml` is included (it is). For GitHub Pages set `base` correctly.

**Styling missing** → Make sure `npm install` completed without errors and you are on Node 18+.

---

Built with ❤️ — Version 1 is ready to extend with backend, auth, and AI predictions.

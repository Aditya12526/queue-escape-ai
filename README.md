# QueueEscape AI — Don't stand in line. Know when to arrive.

> Intelligent digital queue management for **colleges, hospitals & banks**.
> **Version 1 — Frontend only (React + TypeScript + Tailwind + Mock Data)**

Live Preview (dev): `https://5173-i9rwhfmxjdomufwfzhwet.e2b.app` *(E2B sandbox)*

---

## 🚀 Quick Start — Run Locally on Your PC

### 1. Prerequisites
Install once on your computer:

- **Node.js 18+** — download from https://nodejs.org (LTS)
- Check: open Terminal / PowerShell / CMD and run:
```bash
node --version   # should be v18 or higher
npm --version    # should be 9+
```

Use **VS Code** (recommended) or any editor.

### 2. Download the Code
**Option A — Download ZIP (easiest)**
1. In the Arena workspace, right-click the folder `queue-escape-ai` → **Download** (or download the ZIP we generated: `queue-escape-ai.zip` in `/home/user`)
2. Unzip to e.g. `C:\Projects\queue-escape-ai` or `~/Projects/queue-escape-ai`

**Option B — Copy files manually**
Copy the entire `queue-escape-ai` folder to your PC.

### 3. Install & Run
Open a terminal **inside the project folder** (`queue-escape-ai`):

```bash
# install dependencies (first time only, ~30 seconds)
npm install

# start dev server
npm run dev
```

You will see:
```
VITE v8.2.2 ready in 200 ms
➜  Local:   http://localhost:5173/
```

Open **http://localhost:5173** in your browser. Done!

### 4. Other Commands
```bash
npm run build    # create optimized production build in /dist
npm run preview  # preview the production build locally on http://localhost:4173
npm run lint     # run lint
```

### 5. Project Structure
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

## ☁️ Deployment — Make it Live on the Internet

Choose **one** platform. No code changes needed. Build command is always `npm run build`, output folder `dist`.

### Option 1: Vercel (Recommended — 1 minute, Free)
1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "QueueEscape AI v1"
   # create a new repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/queue-escape-ai.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **Add New Project** → Import your GitHub repo
3. Vercel auto-detects Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: **Vite**
4. Click **Deploy**. Done — you get `https://queue-escape-ai.vercel.app`
5. Future pushes to `main` auto-redeploy.

> `vercel.json` is already included for SPA routing (fixes 404 on refresh).

### Option 2: Netlify (Also 1 minute, Free)
**Drag & Drop (no Git needed):**
1. Run `npm run build` locally → creates `dist` folder
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page → live link instantly

**Or via Git:**
1. Push to GitHub (same as above)
2. Netlify → **Add new site** → Import from Git
3. Settings: Build `npm run build`, Publish `dist`
4. Deploy. `netlify.toml` is already included.

### Option 3: GitHub Pages (Free, slightly more steps)
1. Install helper: `npm install -D gh-pages`
2. In `package.json` add:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/queue-escape-ai",
   "scripts": { "deploy": "gh-pages -d dist" }
   ```
3. In `vite.config.ts` set `base: '/queue-escape-ai/'` (replace if repo name differs)
4. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```
5. In GitHub → Settings → Pages → Source `gh-pages` → Save

### Option 4: Any Static Host (Hostinger, Firebase, Cloudflare Pages, etc.)
Just upload the contents of `dist` after `npm run build` to your host's web root.

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

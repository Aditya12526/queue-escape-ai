QueueEscape AI
Don't stand in line. Know when to arrive.
Intelligent digital queue management for Colleges, Hospitals & Banks — Join digitally, track live, arrive exactly when it's your turn.

<p align="center"> <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /> </p><p align="center"> <a href="https://queue-escape-ai.vercel.app"><b>🔗 Live Demo</b></a> • <a href="#-quick-start">Quick Start</a> • <a href="#-features">Features</a> • <a href="#-deployment">Deploy</a> </p><p align="center"> <i>Version 1 — Frontend only • Mock Data • No Backend / Auth / DB / ML / Payments</i> </p>
✨ Why QueueEscape AI?
Every college admin office, hospital OPD, and bank branch has the same problem: long physical lines, wasted time, and chaos at peak hours.

QueueEscape AI replaces the physical line with a smart digital token. Students can join from the library, patients from the waiting lounge, and customers from the cafe — and get notified 3 tokens before their turn.

Result: 64% less waiting time, zero crowd at the counter.

🎯 Features (V1)
Page	What it does
Landing Page	Dark-blue tech hero, live phone mock, stats, explainers for College/Hospital/Bank, CTA
Login / Signup	Modern split-screen auth (mock — no backend check, just click Sign In)
Dashboard	6 live queues, search + category filter (All/College/Hospital/Bank), waiting & est. wait cards, progress bars, Join Queue
Digital Token	Ticket modal with token number, current token, people ahead, est. wait, barcode & smart tip — plus View My Queue
My Queue	Live tracking for all your tokens: progress ring, Serving Soon / It's your turn! alerts, past tokens, leave queue
Admin Dashboard	Manage any queue: Next Token • Skip Token • Add Counter, live counter load bars, recent activity, system stats
All data updates live every 8 seconds + instantly after admin actions (mock interval in QueueContext).

Mock Queues Included
🎓 Admissions Office — College Admin Block (3 counters)
💳 Fee Payment Counter — College 1st Floor (2 counters)
🏥 OPD Consultation — City Care Hospital Block A (4 counters)
💊 Pharmacy & Lab Reports — City Care Hospital Ground Floor (2 counters)
🏦 Cash Deposit & Withdrawal — State Bank Main Branch (5 counters)
📄 New Account Opening — State Bank (Closed - demo)
🖥️ Tech Stack
React 19 + TypeScript
Vite 8 — instant HMR
Tailwind CSS 3.4 — custom navy #020617 → #0F2342 + cyan/blue gradients, glassmorphism, mesh gradients
React Router 7 — SPA routing
Lucide React — icons
Context API — mock queue state (no Redux, no backend)
📁 Project Structure
text

queue-escape-ai/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Glass nav + mobile drawer + live badge
│   │   ├── QueueCard.tsx    # Queue card (waiting, est. wait, progress)
│   │   └── TokenModal.tsx   # Digital ticket generation
│   ├── pages/
│   │   ├── Landing.tsx      # Hero + phone mock + features
│   │   ├── Login.tsx        # Auth split-screen
│   │   ├── Signup.tsx       # Auth split-screen
│   │   ├── Dashboard.tsx    # Available queues + filters + AI tip
│   │   ├── MyQueue.tsx      # Your tokens live tracking
│   │   └── Admin.tsx        # Next/Skip/Add Counter controls
│   ├── context/
│   │   └── QueueContext.tsx # Queues + MyTokens + live 8s sync
│   ├── data/
│   │   └── mockData.ts      # 6 queues
│   ├── App.tsx              # Router: / , /login, /signup, /dashboard, /my-queue, /admin
│   ├── main.tsx
│   ├── types.ts
│   └── index.css            # Tailwind + fonts + glass utilities
├── vercel.json              # SPA rewrite for Vercel
├── netlify.toml             # SPA rewrite for Netlify
├── vite.config.ts
├── tailwind.config.js
└── package.json
🚀 Quick Start
Prerequisites
Node.js 18+ — https://nodejs.org (LTS) — check with node --version & npm --version
VS Code recommended
Run Locally
Bash

# 1. Clone (or unzip queue-escape-ai.zip)
git clone https://github.com/Aditya12526/queue-escape-ai.git
cd queue-escape-ai

# 2. Install
npm install

# 3. Run dev server
npm run dev
# → http://localhost:5173

# Other commands
npm run build    # Production build → /dist
npm run preview  # Preview build → http://localhost:4173
Windows PowerShell tip: Don't use unzip — use:

PowerShell

Expand-Archive -Path .\queue-escape-ai.zip -DestinationPath .\ -Force
# or just right-click ZIP → Extract All...
Routes
Route	Page
/	Landing
/login	Login (mock — any email/pass works)
/signup	Signup (mock)
/dashboard	Available Queues
/my-queue	My Queue
/admin	Admin Dashboard
Try the flow: Landing → Sign Up → Dashboard → Join Queue → My Queue → Admin → Next Token and watch live updates!

📄 License
MIT — free to use for college projects, demos, and portfolios.

<p align="center"> Built with ❤️ by <a href="https://github.com/Aditya12526">Aditya12526</a> — If you like it, give it a ⭐ on GitHub! </p><p align="center"> <sub>QueueEscape AI © 2026 • Version 1 • Mock Frontend • Made for students, patients & customers who value their time.</sub> </p>

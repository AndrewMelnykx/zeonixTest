🎲 zeonixTest 
<img width="1580" height="890" alt="image" src="https://github.com/user-attachments/assets/1ef5e118-b01a-40b3-a27c-0d3cebcc2de1" />

🔗 Live Demo: https://zeonix-test.vercel.app/

📌 Overview
zeonixTest 🧰🚀 is a fully responsive, modern single‑page application built with Next.js and TypeScript. It implements a simple dice guessing game where players choose higher or lower and instantly see results. The app uses Redux Toolkit for state management, react‑hot‑toast for notifications, and Material‑UI (MUI) for a clean, accessible UI.

🛠️ Tech Stack
Framework: Next.js + TypeScript

UI Library: Material‑UI (MUI v5)

Notifications: react‑hot‑toast

State Management: Redux Toolkit (RTK)

Tooling: pnpm for fast installs and builds

📂 Project Structure
bash
src/
├── components/        # Reusable UI components (buttons, sliders, results table)
├── store/             # Redux slices and selectors
├── pages/             # Next.js pages (Home, etc.)
├── utils/             # Utility functions (random number generator, helpers)
└── app/layout.tsx     # Global layout and providers
🚀 Getting Started
✅ Prerequisites
Node.js (v18+ recommended)

pnpm installed globally:

bash
npm install -g pnpm
📦 Install Dependencies
bash
pnpm install
🛠 Start Development Server
bash
pnpm dev
🏗 Build for Production
bash
pnpm build
🌐 Deployment
This project is deployed using Vercel for seamless Next.js hosting. Branch: main

🔑 Features
🎲 Dice guessing game (higher/lower logic)

📊 Results table (last 10 tries, responsive)

✅ Win/Lose feedback with colored text (green/red)

🔔 Instant notifications via react‑hot‑toast

📱 Fully responsive layout for mobile and desktop

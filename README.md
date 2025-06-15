# ⚡ Tesla-Inspired Full Stack Product Showcase

A premium, animated, and full-stack Tesla clone site built for **Assignment-Based Evaluation** — developed under time constraints using modern frontend and backend stacks, powered with AI assistance (ChatGPT + Copilot).

![screenshot](./public/assets/tesla-clone-preview.jpg)

---

## 🚀 Features

### 🌐 Frontend
- Built using **Next.js + TypeScript**
- Responsive **Landing Page** with background carousel
- Scroll-snapping full-screen sections for each product
- Reusable component architecture (Hero, ProductCard, Navbar, etc.)
- Animated UI using **Framer Motion**
- Stylish and clean design using **TailwindCSS**
- Authenticated navigation with **dynamic dropdown profile menu**

### 🛠 Backend
- **Supabase** for:
  - Auth (email/password + JWT)
  - Database (PostgreSQL)
  - Storage (for product data & images)
- REST API for:
  - Fetching products
  - Submitting orders
- Row-Level Security (RLS) & Policies enabled

### 🔐 Auth System
- Sign In / Sign Up pages
- Displays user **full name** post-login
- Smooth Sign Out + automatic UI update
- Profile dropdown with user details

### 🛍 Products + Orders
- Dedicated Products page
- Each product has:
  - Image(s)
  - Specs
  - Price
  - CTA buttons (Order / Learn More)
- Sample items: **Model S, 3, X, Y, Cybertruck, Solar Panels, Chargers**
- Order submissions stored securely in Supabase

---

## 🧠 AI Tools Used

- 🤖 ChatGPT: Architecture guidance, database structure, component building
- 👨‍💻 GitHub Copilot: Inline code generation, Tailwind styling suggestions

All code was written originally with assistance — no direct cloning or scraping used.

---

## 🏗 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | Next.js + TypeScript   |
| Styling      | TailwindCSS + Framer Motion |
| Backend      | Supabase               |
| Database     | Supabase PostgreSQL    |
| Auth         | Supabase Auth          |
| Deployment   | Vercel (Frontend) / Supabase (Backend)

---

## 🔧 Installation

```bash
git clone https://github.com/yourusername/tesla-clone-fullstack.git
cd tesla-clone-fullstack
npm install

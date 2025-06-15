
# ⚡ Tesla-Inspired Full Stack Product Showcase

A premium, animated, and full-stack Tesla clone site built for **Assignment-Based Evaluation** — developed under time constraints using modern frontend and backend stacks, powered with AI assistance (ChatGPT + Copilot + Calude 4.0 + Lovable.ai).

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
| Deployment   | Netlify (Frontend) / Supabase (Backend)

---

## 🔧 Installation

```bash
git clone https://github.com/yourusername/tesla-clone-fullstack.git
cd tesla-clone-fullstack
npm install
=======
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/39fcc2b3-fb49-4739-b6c0-68f851b7b37e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/39fcc2b3-fb49-4739-b6c0-68f851b7b37e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/39fcc2b3-fb49-4739-b6c0-68f851b7b37e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
>>>>>>> adcc6c8 (🚀 Final migration: Tesla full project moved to official repo)

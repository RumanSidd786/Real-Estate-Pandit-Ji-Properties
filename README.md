# Pandit Ji Properties — Static Site

A premium luxury real-estate website built with **Vite + React + Tailwind CSS + React Router + Framer Motion**. 100% static — deploy anywhere.

## 🚀 Quick start

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## 🗂 Project Structure

```
src/
├── assets/                 # Images (hero, logo, properties)
├── components/             # Reusable UI: Navbar, Footer, PropertyCard, etc.
├── sections/               # Home page sections (Hero, Featured, Stats…)
├── pages/                  # Routed pages (Home, Properties, Detail, About, Contact…)
├── data/properties.js      # ⭐ Edit listings here
├── lib/site.js             # ⭐ Edit company info, phone, WhatsApp, address
├── styles.css              # Theme tokens & utilities
├── App.jsx                 # Routes
└── main.jsx                # Entry
```

## ✏️ Customizing

| What to change | File |
| --- | --- |
| Company name, phone, WhatsApp, address, email, social links | `src/lib/site.js` |
| Property listings (add / edit / remove) | `src/data/properties.js` |
| Logo image | `src/assets/logo.jpg` |
| Hero background | `src/assets/hero.jpg` |
| Property images | `src/assets/properties/` |
| Brand colours (gold, ink) | `tailwind.config.js` |
| Home page section order | `src/pages/Home.jsx` |
| Services list | `src/sections/ServicesGrid.jsx` |
| Testimonials | `src/sections/Testimonials.jsx` |
| FAQ | `src/pages/Contact.jsx` |

## 🌐 Deploying

The build output (`dist/`) is plain static files. Deploy to any host:

- **Netlify / Vercel** — drop the repo, build cmd `npm run build`, publish dir `dist`. The included `public/_redirects` handles SPA routing on Netlify.
- **GitHub Pages / Cloudflare Pages / S3** — upload `dist/` contents. Add SPA fallback to `index.html` for unknown routes.
- **Hostinger / cPanel** — upload contents of `dist/` to `public_html/`. Add an `.htaccess` rewrite to `index.html` for SPA routing.

## 📞 WhatsApp & Call

Configured in `src/lib/site.js` via the `whatsapp` (digits only with country code) and `phone` fields. Used by floating buttons, header CTA, and property contact panel.

## 📜 License

© Pandit Ji Properties. All rights reserved.

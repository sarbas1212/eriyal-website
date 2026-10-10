# Eriyal Tiles & Sanitary — Website

Premium showroom website for **Eriyal Tiles & Sanitary** — Tiles, Sanitaryware & Bathroom Solutions in Kerala, India.

Built with **React + Vite**. Designed for static hosting on Vercel, Netlify, or GitHub Pages.

---

## Quick Start (Windows)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 3. Create a Production Build

```bash
npm run build
```

The optimised output will be in the `dist/` folder.

### 4. Preview the Production Build Locally

```bash
npm run preview
```

---

## Deployment

### Vercel (Recommended)

1. Push your project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **"New Project"** → select your repository.
4. Vercel will auto-detect Vite. Click **Deploy**.
5. Your site will be live at a `.vercel.app` URL.

### Netlify

1. Push your project to GitHub.
2. Go to [netlify.com](https://netlify.com), sign in with GitHub.
3. Click **"Add new site"** → **"Import an existing project"**.
4. Build command: `npm run build` · Publish directory: `dist`
5. Click **Deploy**.

### GitHub Pages

1. Install the deploy dependency: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build` then `npm run deploy`.

---

## Customisation Guide

All site content is centralised in a single configuration file:

📄 **`src/data/siteConfig.js`**

### Update Contact Information

Open `siteConfig.js` and fill in the `contact` object:

```js
export const contact = {
  phone: '+91 98765 43210',
  whatsapp: '919876543210',  // no + or spaces
  email: 'hello@eriyaltiles.com',
  instagram: 'https://instagram.com/eriyaltiles',
  facebook: 'https://facebook.com/eriyaltiles',
};
```

### Update Branch Addresses

Edit the `branches` array in `siteConfig.js`. Each branch has a `name`, `address`, and `mapsUrl`.

### Replace Images

1. Place your images in `public/images/`.
2. Update the `images` object in `siteConfig.js` to point to the new filenames.
3. Use optimised WebP or JPEG files for best performance.

### Update the Logo

Replace `public/images/eriyal-logo.jpeg` with your updated logo file (keep the same filename, or update the `brand.logo` path in `siteConfig.js`).

---

## Project Structure

```
src/
  components/       React section components
    Navbar.jsx
    Hero.jsx
    Collections.jsx
    Inspiration.jsx
    About.jsx
    Benefits.jsx
    Branches.jsx
    Contact.jsx
    Footer.jsx
  data/
    siteConfig.js    Central configuration (images, branches, contact)
  App.jsx            Root application component
  main.jsx           React entry point
  styles.css         Global stylesheet

public/
  images/            Logo and photography assets

index.html           HTML entry with SEO meta tags
vite.config.js       Vite build configuration
vercel.json          Vercel deployment settings
```

---

## Tech Stack

- **React 19** — UI framework
- **Vite** — Build tooling
- **Lucide React** — Icon library
- **Google Fonts** — Inter + Outfit typefaces
- **Vanilla CSS** — Custom properties, responsive design

No backend, database, paid APIs, or authentication required.

---

## License

This project is proprietary to Eriyal Tiles & Sanitary.

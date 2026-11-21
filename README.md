# Flat Ride Engineering — React frontend

A responsive, six-page React website prototype for an automotive engineering and simulation consultancy.

## Run locally
1. Install Node.js 22.13 or newer.
2. Open this folder in VS Code.
3. Open two terminals in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
   In the second terminal, start the local enquiry API:
   ```bash
   npm run api
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Pages
- Home
- About Us
- Services
- Projects / Case Studies
- Careers
- Contact Us (`/contact`)
- Project Enquiry (`/project-enquiry`)

## Before presenting / publishing
- Replace the FR text logo with the official company logo.
- Replace the draft About text with the approved company introduction.
- Replace stock hero image and project artwork with company-approved technical images.
- Replace placeholder email addresses and WhatsApp number in `src/siteConfig.js`, `src/components/Footer.jsx`, and `src/pages/Pages.jsx`.
- Replace illustrative project cards with real, approved case studies. Do not present placeholder projects as completed client work.
- Contact, project, and business enquiries are stored in SQLite tables in `data/enquiries.sqlite`; project attachments are stored in `data/uploads/`. The API listens only on `127.0.0.1:8787` and refuses to start when `NODE_ENV=production`. It is for local development only. Before accepting public submissions, configure a production backend with secure persistent storage, HTTPS, spam/rate-limit and CAPTCHA protection, and attachment malware scanning. Do not expose this local API or its database/uploads directory publicly.
- Add real careers contact, company address and social media links.

## Technology
React, React Router, JavaScript ES modules, HTML5, CSS3, Vite and Lucide React icons.

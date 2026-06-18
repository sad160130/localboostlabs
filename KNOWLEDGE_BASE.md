# Local Boost Labs — Project Knowledge Base

> A complete reference for the Local Boost Labs website: business facts, site
> architecture, content strategy, SEO implementation, tech stack, and
> maintenance guide. Last updated: 2026-06-18.

---

## 1. Project Overview

**Local Boost Labs** is a marketing website for a business that sells
**AI-built websites + $99/month hosting & care to skilled-trade businesses**
(kitchen & bath remodelers, home builders, roofing/siding/window contractors,
landscapers, solar installers, and HVAC contractors). The site's job is to
generate qualified leads — trade business owners who request a **free demo of
their new website**.

- **Type:** Static marketing website (multi-page HTML/CSS/JS) with a single
  serverless function for form handling.
- **Primary conversion goal:** Lead-form submissions → email to the business →
  redirect to `thank-you.html`.
- **Offer:** **$750 one-time build + $99/month hosting & care.** No long-term
  contracts, cancel anytime, client owns their site, live in 1–2 weeks.
- **Positioning:** Direct-response, contractor-to-contractor. Sells a website
  that *books jobs* — built fast with AI, refined and backed by humans.
- **Production domain:** `https://www.localboostlabs.com`

---

## 2. Business & Brand Facts (NAP + Identity)

| Field | Value |
|-------|-------|
| Business name | Local Boost Labs |
| What it sells | AI-built websites + $99/mo hosting & care for skilled trades |
| Phone | **(502) 530-9330** |
| Email | info@localboostlabs.com |
| Address | 5508 Soft Shell Drive, Lancaster, SC 29720 |
| Founder | Matt Heinecke |
| Technical / SEO | Sanket Desai |

**Target industries:** Kitchen & bath remodelers (primary), home builders /
general contractors, roofing/siding/window contractors, landscapers &
hardscapers, solar installers, HVAC contractors.

**Core value proposition:** *"Get a professional website that books jobs —
built by AI, backed by humans. $750 to build, $99/month to host and
maintain. No contracts."*

**Real proof / portfolio sites** (reference only — do not attach fabricated
metrics): `alliedhomecontractors.com`, `primehomehvac.com`,
`eatrealfoodnyc.com`.

> **Trust guardrails (important):** Do **not** fabricate testimonials, client
> names, review counts/star ratings, "number of sites built," or performance
> guarantees anywhere on the site. Results claims stay general ("designed to
> convert," "built to book jobs"). Industry statistics may be used only with a
> cited source.

---

## 3. Tech Stack & Architecture

- **Frontend:** Hand-written semantic HTML5, one shared `styles.css`
  (~112 KB), and one vanilla-JS file `main.js` (no frameworks, no build step).
- **Per-page critical CSS:** Each HTML file inlines a tiny `<style>` block in
  `<head>` for above-the-fold rendering, then loads `styles.css`.
- **Backend:** A single serverless function, `api/contact.js`, using
  **Nodemailer** over Gmail SMTP. Designed for a Vercel-style `/api` deployment.
- **Dependencies:** `nodemailer ^6.9.8` (see `package.json`). Nothing else.
- **No build/bundler/transpiler.** Files are served as-is.

```
Browser ──► static HTML/CSS/JS (served from repo root)
   │
   └── form POST ──► /api/contact (Nodemailer → Gmail SMTP)
                          │
                          ├── sends formatted lead email to info@localboostlabs.com
                          └── 302 redirect ──► /thank-you.html
```

---

## 4. File Inventory

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `about.html` | About / founders / why |
| `portfolio.html` | Portfolio of websites built |
| `services.html` | Services overview / hub page |
| `contact.html` | Contact page with lead form |
| `thank-you.html` | Post-submission confirmation page (noindex) |
| `website-design.html` | Service — AI website design ($750 build) |
| `google-business-profile.html` | Service — Google Business Profile optimization |
| `local-landing-pages.html` | Service — city-specific local landing pages |
| `hosting-and-care.html` | Service — $99/mo hosting & care |
| `reputation-reviews.html` | Service — reputation & review management |
| `remodeler-websites.html` | Industry — kitchen & bath remodelers |
| `home-builder-websites.html` | Industry — home builders / GCs |
| `roofing-siding-window-websites.html` | Industry — roofing/siding/windows |
| `landscaping-hardscaping-websites.html` | Industry — landscaping/hardscaping |
| `solar-websites.html` | Industry — solar installers |
| `hvac-websites.html` | Industry — HVAC contractors |
| `privacy-policy.html` | Privacy policy (legal) |
| `terms-of-service.html` | Terms of service (legal) |
| `styles.css` | Global stylesheet (all pages) |
| `main.js` | Global JS (nav, forms, FAQ, smooth scroll) |
| `api/contact.js` | Serverless lead-email handler |
| `sitemap.xml` | XML sitemap (18 URLs) |
| `robots.txt` | Allows all, disallows thank-you, points to sitemap |
| `package.json` | Node manifest (nodemailer dependency) |
| `images/` | Image assets directory |

---

## 5. Page Inventory — Titles, H1s, Target Keywords

Titles/H1s are keyword-front-loaded. Primary CTA everywhere is
**"See a Free Demo of Your New Site."**

### Core
- **`index.html`** — Title: "AI-Built Websites for Remodelers & Contractors | Local Boost Labs"; H1: "Get a Professional Website That Books Jobs—Built by AI, Backed by Humans"; keyword: contractor website design.
- **`about.html`** — Title: "About Local Boost Labs | AI Website Agency for Skilled Trades"; H1: "We Build Websites That Book Jobs for Contractors Like You".
- **`portfolio.html`** — Title: "Our Work | Contractor Website Examples | Local Boost Labs"; H1: "Websites We've Built for Contractors & Remodelers".
- **`services.html`** — Title: "Our Services | Websites, Hosting & SEO for Contractors | Local Boost Labs"; H1: "Everything You Need to Get Found and Book More Jobs".
- **`contact.html`** — Title: "Contact Us | AI Websites for Contractors | Local Boost Labs"; H1: "Let's Talk About Your New Contractor Website".

### Services
- **`website-design.html`** — "AI Website Design for Contractors | $750 Custom Sites | Local Boost Labs" / "Professional Contractor Websites—Built Fast, Priced Fair" / contractor website design.
- **`google-business-profile.html`** — "Google Business Profile Optimization for Contractors | Local Boost Labs" / "Get Found on Google Maps—We Optimize Your Business Profile" / Google Business Profile for contractors.
- **`local-landing-pages.html`** — "Local Landing Pages for Contractors | Rank in Every City You Serve" / "City-Specific Landing Pages That Rank and Convert" / local landing pages contractors.
- **`hosting-and-care.html`** — "$99/Month Hosting & Website Care for Contractors | Local Boost Labs" / "Hosting, Updates & Support—So You Can Focus on Jobs" / contractor website hosting.
- **`reputation-reviews.html`** — "Reputation & Review Management for Contractors | Local Boost Labs" / "Turn Happy Customers Into 5-Star Reviews" / contractor review management.

### Industries
- **`remodeler-websites.html`** — "Websites for Kitchen & Bath Remodelers | Local Boost Labs" / "Kitchen & Bath Remodeler Websites That Book More Projects" / kitchen remodeler website.
- **`home-builder-websites.html`** — "Websites for Home Builders & General Contractors | Local Boost Labs" / "Custom Home Builder Websites That Showcase Your Craftsmanship" / home builder website design.
- **`roofing-siding-window-websites.html`** — "Websites for Roofing, Siding & Window Contractors | Local Boost Labs" / "Roofing & Exterior Contractor Websites That Generate Leads" / roofing contractor website.
- **`landscaping-hardscaping-websites.html`** — "Websites for Landscapers & Hardscape Contractors | Local Boost Labs" / "Landscaping Websites That Turn Browsers Into Buyers" / landscaper website design.
- **`solar-websites.html`** — "Websites for Solar Installers & Energy Contractors | Local Boost Labs" / "Solar Company Websites That Convert Homeowners" / solar company website.
- **`hvac-websites.html`** — "Websites for HVAC Contractors | Local Boost Labs" / "HVAC Contractor Websites That Book Service Calls" / HVAC contractor website.

### Utility / legal
- **`thank-you.html`** (noindex), **`privacy-policy.html`**, **`terms-of-service.html`**.

---

## 6. Content & Copywriting Strategy

Direct-response, plain-spoken, **contractor-to-contractor** voice written to a
trade business owner who is great at their craft but losing jobs to whoever
ranks first on Google.

**Core principles:**
1. **Sell booked jobs, not "a website."** Lead with the outcome: more calls,
   more booked projects, getting found on Google.
2. **Concrete, honest offer.** "$750 to build, $99/month to host. No
   contracts. Cancel anytime. You own your site. Live in 1–2 weeks."
3. **AI speed + human trust.** Built fast with AI, reviewed/refined by real
   people who answer when you call.
4. **Low-risk CTA.** Everything points to a **free demo** of the prospect's own
   site — no cost, no credit card, no obligation.
5. **No fabrication.** See trust guardrails in §2.

**Recurring section types:** outcome-focused hero with lead form, problem/agitate,
solution (AI + human), how-it-works (demo → refine → launch), portfolio/proof,
industries grid, what's-included ($99/mo), trust stats, FAQ, final CTA.

**Primary CTA copy:** "See a Free Demo of Your New Site" (buttons may shorten to
"See a Free Demo").

---

## 7. SEO Implementation

- **Titles & H1s:** Keyword-front-loaded, one unique title per page (see §5).
- **Meta descriptions:** Unique, benefit-driven, keyword-bearing per page.
- **Canonical tags:** `<link rel="canonical">` per page → `www.localboostlabs.com` URL.
- **`robots` meta:** `index, follow` on indexable pages; `noindex, nofollow` on
  `thank-you.html`.
- **Structured data (JSON-LD):**
  - `ProfessionalService` + `Offer` (build $750 / hosting $99) on homepage
  - `Service` schema on service & industry pages
  - `Organization` / `AboutPage` on About
  - `FAQPage` schema on pages with FAQs
  - `BreadcrumbList` across content pages
- **Sitemap:** `sitemap.xml` lists 18 URLs (homepage 1.0; services 0.9;
  industries 0.8; legal 0.3).
- **`robots.txt`:** Present — allows all, disallows `/thank-you.html`, references
  the sitemap.
- **Internal linking:** Services ↔ industries ↔ homepage cross-link heavily.
- **NAP consistency:** 5508 Soft Shell Drive, Lancaster, SC 29720 +
  (502) 530-9330 + info@localboostlabs.com in footer/schema on every page.

---

## 8. Design System

| Token | Value | Use |
|-------|-------|-----|
| `--primary-color` | `#1e40af` (blue) | Brand primary, headings, buttons |
| `--secondary-color` | `#f97316` (orange) | Accents, highlights |
| `--text-dark` | `#1f2937` | Body text |
| `--text-white` / `--bg-white` | `#fff` | Inverse text / backgrounds |
| Success green | `#10b981` | Checkmarks, positive states |

- **Typography:** System font stack — fast, no web-font load.
- **Reusable components (CSS classes):** `.header`/`.nav-menu`/`.nav-dropdown`,
  `.btn` (`.btn-primary`,`.btn-outline`), `.hero`/`.page-hero`, `.hero-badge`,
  `.hero-benefits`, `.trust-badges`, `.lead-form-wrapper`+`.lead-form`,
  `.section`/`.section-light`, `.section-header`, `.content-section`,
  `.features-list`, `.process-detailed`, `.services-grid`/`.service-card`,
  `.cities-grid`/`.city-card` (reused for industries), `.stats-section`,
  `.faq-list`/`.faq-item`, `.cta-section`, `.footer`.
- **Responsive:** Mobile breakpoint at `768px` (mobile nav + dropdowns).

---

## 9. JavaScript (`main.js`)

Vanilla JS, IIFE-wrapped, initialized on `DOMContentLoaded`:

- `initStickyHeader()` — `.scrolled` class past 100px.
- `initMobileMenu()` — hamburger toggle; closes on outside/link click.
- `initDropdowns()` — tap-to-open nav dropdowns on mobile (≤768px).
- `initFormValidation()` — client-side validation; submits to `/api/contact`.
- `initSmoothScroll()` — anchor smooth scroll with header offset.
- `initFAQ()` — accordion (one open at a time).
- `window.scrollToForm()` — global helper for hero/CTA buttons.

---

## 10. Lead Capture & Email Flow (`api/contact.js`)

1. Lead forms POST to `/api/contact` with: `name`, `email`, `phone`,
   `business`, `trade` (select), `website` (current site, optional),
   `description`, and a hidden `source` (identifies the originating page).
   *(Legacy `city` field still accepted for backward compatibility.)*
2. The handler validates env vars, creates a Nodemailer Gmail transport,
   verifies the connection, and sends a styled HTML email to
   **info@localboostlabs.com** (subject: `New Lead: {business} - {trade}`).
3. On success → **302 redirect to `/thank-you.html`**. On error → 500 JSON.
4. CORS is open (`*`); only `POST`/`OPTIONS` accepted.

**Required environment variables:**
- `GMAIL_USER` — the Gmail address used to send.
- `GMAIL_APP_PASSWORD` — a Gmail App Password (not the account password).

---

## 11. Deployment & Environment

- **Model:** Static files from repo root + serverless function in `/api`
  (Vercel-style). Form action is `/api/contact`.
- **Env vars** (`GMAIL_USER`, `GMAIL_APP_PASSWORD`) must be set in the hosting
  platform for the contact form to work.
- **Install:** `npm install` (pulls `nodemailer`). No build step for the static site.

---

## 12. Local Development

```bash
# Python
python3 -m http.server 8000   # http://localhost:8000
# or Node
npx serve .
```

The contact form won't send email locally unless you run `/api/contact` in a
compatible runtime (e.g. `vercel dev`) with the Gmail env vars set.

---

## 13. How to Add a New Page (checklist)

1. Duplicate the closest existing page (service vs. industry template).
2. Update `<title>`, `<h1>`, `<meta name="description">` — keyword-front-loaded.
3. Update the `<link rel="canonical">` URL.
4. Refresh JSON-LD blocks (Service, FAQ, Breadcrumb).
5. Write body copy in the contractor-to-contractor voice (§6); respect the
   trust guardrails (§2) — no fabricated proof.
6. Keep NAP consistent: 5508 Soft Shell Drive, Lancaster, SC 29720 /
   (502) 530-9330 / info@localboostlabs.com.
7. Add the URL to `sitemap.xml`.
8. Add internal links + nav/footer entries.
9. Set the lead form's hidden `source` to the new page name.

---

## 14. Known Issues / Suggested TODOs

- **`images/` assets:** Add real project/portfolio imagery and founder photos
  for stronger conversion; current pages rely on inline SVG iconography.
- **Portfolio proof:** Only three real sites are referenced. Add more as they
  ship — with honest descriptions, no fabricated metrics.
- **Social links** in the footer are placeholders (`#`) — point to real profiles.

---

## 15. Glossary

- **GBP (Google Business Profile)** — the free Google listing that drives Google
  Maps / local "Map Pack" visibility and click-to-call.
- **Map Pack / Local 3-Pack** — the 3 local businesses shown with a map atop
  Google local results; the highest-value local placement.
- **NAP** — Name, Address, Phone; must be consistent across the web for local SEO.
- **Local landing page** — a city/service-specific page built to rank for "[service]
  in [city]" searches.
- **Hosting & Care ($99/mo)** — ongoing hosting, security, backups, updates, minor
  edits, and support after the one-time $750 build.

---

*Generated for the Local Boost Labs project. Keep this file in the repo root so
it stays versioned alongside the code it documents.*

# Local Boost Labs — Project Knowledge Base

> A complete reference for the Local Boost Labs website: business facts, site
> architecture, content strategy, SEO implementation, tech stack, and
> maintenance guide. Last updated: 2026-06-18.

---

## 1. Project Overview

**Local Boost Labs** is a marketing website for a Local SEO agency that works
**exclusively with HVAC (heating & cooling) contractors**. The site's job is to
generate qualified leads — HVAC business owners who book a "15-Minute Job
Pipeline Call."

- **Type:** Static marketing website (multi-page HTML/CSS/JS) with a single
  serverless function for form handling.
- **Primary conversion goal:** Lead-form submissions → email to the agency →
  redirect to `thank-you.html`.
- **Positioning:** Direct-response, outcome-focused. The site sells *jobs*
  (AC installs, system replacements) — not "SEO services" or vanity metrics.
- **Production domain:** `https://www.localboostlabs.com`

---

## 2. Business & Brand Facts (NAP + Identity)

| Field | Value |
|-------|-------|
| Business name | Local Boost Labs |
| Industry niche | Local SEO for HVAC contractors (HVAC-only) |
| Phone | **(502) 530-9330** |
| Email | info@localboostlabs.com |
| Address (schema) | 123 Main Street, Lancaster, SC 29720 |
| HQ reference (About) | Charlotte Metro Area |
| Founded | November 2025 |
| Founder & CEO | Matt Heinecke |
| Lead SEO Director | Snket Desai |

**Service areas (primary):** Lancaster SC (home base), Indian Land SC, Fort Mill
SC, Rock Hill SC — all in the Lancaster County / Charlotte metro region.

**Core value proposition:** *"We help HVAC contractors in Lancaster County add
10-15+ high-profit AC installs and system replacements to their schedule every
month — starting in 90 days."*

> **Naming note:** The site uses the spelling "Snket Desai." The owner's email
> (sanketdesai1989@gmail.com) and personal site suggest "Sanket." Left as-is on
> the site; confirm preferred spelling before publishing widely.

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
| `services.html` | Services overview / hub page |
| `local-seo.html` | Service page — Local SEO (flagship) |
| `google-business-profile-optimization.html` | Service page — GBP optimization |
| `citation-building.html` | Service page — Citation building |
| `local-landing-pages.html` | Service page — Local landing pages |
| `reputation-management.html` | Service page — Reputation management |
| `lancaster-sc.html` | Service-area page — Lancaster, SC |
| `indian-land-sc.html` | Service-area page — Indian Land, SC |
| `fort-mill-sc.html` | Service-area page — Fort Mill, SC |
| `rock-hill-sc.html` | Service-area page — Rock Hill, SC |
| `about.html` | About / team / founders |
| `contact.html` | Contact page with lead form |
| `thank-you.html` | Post-submission confirmation page |
| `privacy-policy.html` | Privacy policy (legal) |
| `terms-of-service.html` | Terms of service (legal) |
| `styles.css` | Global stylesheet (all pages) |
| `main.js` | Global JS (nav, forms, FAQ, smooth scroll) |
| `api/contact.js` | Serverless lead-email handler |
| `sitemap.xml` | XML sitemap (16 URLs) |
| `package.json` | Node manifest (nodemailer dependency) |
| `images/.gitkeep` | Placeholder for an (currently empty) images dir |

---

## 5. Page Inventory — Titles, H1s, Meta Descriptions, Target Keywords

All Titles and H1s are **keyword-front-loaded** for SEO while preserving the
job-focused angle. Title pattern: `[Primary Keyword] in [City] | [Benefit] | Local Boost Labs`.

### Homepage — `index.html`
- **Title:** HVAC Local SEO in Lancaster SC | More AC Installs & System Replacements | Local Boost Labs
- **H1:** Local SEO for HVAC Contractors: Add 10-15 High-Profit AC Installs Every Month, Starting in 90 Days or Less
- **Target keywords:** HVAC local SEO, Local SEO for HVAC contractors, Lancaster SC
- **Meta:** "We help HVAC contractors in Lancaster County add 10-15+ high-profit AC installs and system replacements per month—starting in 90 days…"

### Local SEO — `local-seo.html`
- **Title:** Local SEO for HVAC Companies in Lancaster SC | More AC Installs | Local Boost Labs
- **H1:** Local SEO for HVAC Companies: Add 10-15+ AC Installs & System Replacements Every Month
- **Target keywords:** Local SEO for HVAC companies, HVAC SEO Lancaster SC

### Google Business Profile — `google-business-profile-optimization.html`
- **Title:** Google Business Profile Optimization for HVAC Companies in Lancaster SC | Local Boost Labs
- **H1:** Google Business Profile Optimization for HVAC: Show Up First When Homeowners Need Help
- **Target keywords:** Google Business Profile optimization for HVAC, Map Pack

### Citation Building — `citation-building.html`
- **Title:** Citation Building for HVAC Companies | NAP Consistency & Listings | Local Boost Labs
- **H1:** Citation Building for HVAC Contractors: Get Found Everywhere Homeowners Search
- **Target keywords:** Citation building for HVAC, NAP consistency

### Local Landing Pages — `local-landing-pages.html`
- **Title:** Local Landing Pages for HVAC Companies | City-Specific SEO | Local Boost Labs
- **H1:** Local Landing Pages for HVAC Contractors: Get AC Installs from Every City You Serve
- **Target keywords:** Local landing pages for HVAC, city-specific SEO

### Reputation Management — `reputation-management.html`
- **Title:** Reputation Management for HVAC Companies | 5-Star Google Reviews | Local Boost Labs
- **H1:** Reputation Management for HVAC Contractors: Win More Jobs with 5-Star Reviews
- **Target keywords:** Reputation management for HVAC, Google reviews

### Lancaster, SC — `lancaster-sc.html`
- **Title:** HVAC SEO in Lancaster SC | Local SEO for HVAC Contractors | Local Boost Labs
- **H1:** HVAC Local SEO in Lancaster, SC: More AC Installs & System Replacements

### Indian Land, SC — `indian-land-sc.html`
- **Title:** HVAC SEO in Indian Land SC | Local SEO for HVAC Contractors | Local Boost Labs
- **H1:** HVAC Local SEO in Indian Land, SC: More AC Installs from a Booming Market

### Fort Mill, SC — `fort-mill-sc.html`
- **Title:** HVAC SEO in Fort Mill SC | Local SEO for HVAC Contractors | Local Boost Labs
- **H1:** HVAC Local SEO in Fort Mill, SC: More High-Profit AC Installs & Replacements

### Rock Hill, SC — `rock-hill-sc.html`
- **Title:** HVAC SEO in Rock Hill SC | Local SEO for HVAC Contractors | Local Boost Labs
- **H1:** HVAC Local SEO in Rock Hill, SC: More AC Installs in York County

### Supporting pages
- **`services.html`** — Title: "Local SEO Services That Get HVAC Contractors More Jobs | Local Boost Labs"; H1: "Local SEO Services That Fill Your Schedule with High-Profit HVAC Jobs"
- **`about.html`** — Title: "About Local Boost Labs | We Get HVAC Contractors More Jobs | Meet Our Team"; H1: "We Exist to Get You More HVAC Jobs"
- **`contact.html`** — Title: "Contact Us | Local Boost Labs - Free HVAC SEO Audit"; H1: "Contact Local Boost Labs"
- **`thank-you.html`**, **`privacy-policy.html`**, **`terms-of-service.html`** — utility/legal pages.

---

## 6. Content & Copywriting Strategy

The site follows a **direct-response, job-focused** philosophy. Every page is
written to a skeptical HVAC business owner who has "been burned before."

**Core principles:**
1. **Sell jobs and profit, not "SEO."** Lead with AC installs, system
   replacements, and dollars ($5,000–$15,000+ jobs; $1,500–$4,000+ profit each).
2. **Specific offers.** "10-15+ more jobs in 90 days," not "improve your rankings."
3. **Address skepticism head-on.** FAQ and body copy answer "I've been burned by
   agencies before," "real talk, not agency BS," and "no long-term contracts."
4. **Proof in advance.** "We'll show you results before you commit."
5. **ROI math.** Pages spell out the profit-per-job math to make the cost a
   no-brainer.
6. **Low-friction CTA.** Primary CTA everywhere is **"Book a Job Pipeline Call"** /
   **"Book My 15-Minute Call."**

**Recurring section types:** job-focused hero, skepticism-busting section,
process/"how we get you jobs," proof-in-advance, ROI math, services grid,
"why this is different," service-area cards, promise/commitment, FAQ, final CTA.

**Voice:** Plain-spoken, confident, contractor-to-contractor. Avoids jargon
("impressions," "organic traffic") in favor of "jobs booked," "phone ringing."

---

## 7. SEO Implementation

- **Titles & H1s:** Keyword-front-loaded (see §5). One unique title per page
  (a previous duplicate between `index.html` and `local-seo.html` was fixed).
- **Meta descriptions:** Unique, benefit-driven, keyword-bearing on every page.
- **Canonical tags:** `<link rel="canonical">` on each page pointing to the
  `www.localboostlabs.com` URL.
- **`robots` meta:** `index, follow` on indexable pages.
- **Structured data (JSON-LD):** Present and varied by page type:
  - `Service` schema on service pages
  - `LocalBusiness` schema on service-area pages (with `areaServed` City)
  - `Organization`, `AboutPage`, and `Person` schema (founders) on About
  - `FAQPage` schema on pages with FAQs
  - `BreadcrumbList` schema across content pages
- **Sitemap:** `sitemap.xml` lists 16 URLs with `lastmod`, `changefreq`,
  `priority` (homepage 1.0; services 0.9; locations 0.8; legal 0.3).
- **Internal linking:** Service pages cross-link to related services and to
  service-area pages, and vice versa.
- **NAP consistency:** Phone (502) 530-9330 and address appear in footer +
  schema on every page — important for local SEO.

> **No `robots.txt` is currently in the repo.** Consider adding one that points
> to the sitemap.

---

## 8. Design System

Defined via CSS custom properties (in each page's critical CSS and `styles.css`):

| Token | Value | Use |
|-------|-------|-----|
| `--primary-color` | `#1e40af` (blue) | Brand primary, headings, buttons |
| `--secondary-color` | `#f97316` (orange) | Accents, highlights |
| `--text-dark` | `#1f2937` | Body text |
| `--text-white` / `--bg-white` | `#fff` | Inverse text / backgrounds |
| Success green | `#10b981` | Checkmarks, positive states |

- **Typography:** System font stack (`-apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, sans-serif`) — fast, no web-font load.
- **Reusable components (CSS classes):** `.header` / `.nav-menu` /
  `.nav-dropdown`, `.btn` (`.btn-primary`, `.btn-outline`), `.hero` /
  `.service-hero` / `.city-hero`, `.hero-badge`, `.hero-benefits`,
  `.trust-badges`, `.lead-form-wrapper` + `.lead-form`, `.section` /
  `.section-light`, `.section-header`, `.content-section`, `.features-list`,
  `.process-detailed`, `.services-grid` / `.service-card`, `.cities-grid` /
  `.city-card`, `.stats-highlight` / `.stat-box`, `.testimonials-grid` /
  `.testimonial-card`, `.faq-list` / `.faq-item`, `.cta-section`, `.footer`.
- **Decorative SVG:** Inline HVAC-themed SVG icons in hero decorations; the GBP
  page includes an elaborate before/after "geo-grid" Map Pack ranking visual.
- **Responsive:** Mobile breakpoint at `768px` (drives the mobile nav + dropdowns).

---

## 9. JavaScript (`main.js`)

Vanilla JS, IIFE-wrapped, initialized on `DOMContentLoaded`. Modules:

- `initStickyHeader()` — adds `.scrolled` class to header past 100px scroll.
- `initMobileMenu()` — hamburger toggle; closes on outside click / link click.
- `initDropdowns()` — tap-to-open nav dropdowns on mobile (≤768px).
- `initFormValidation()` — client-side validation (required, email regex, phone
  regex ≥10 digits) with inline error UI; submits to `/api/contact` when valid.
- `initSmoothScroll()` — smooth-scrolls anchor links, offsetting header height.
- `initFAQ()` — accordion (one open at a time).
- `window.scrollToForm()` — global helper used by hero/CTA buttons to scroll to
  the lead form.

> Note: `showFormSuccess()` exists as an in-page success fallback but the live
> flow actually submits the form and redirects to `thank-you.html`.

---

## 10. Lead Capture & Email Flow (`api/contact.js`)

1. Lead forms POST to `/api/contact` with: `name`, `email`, `phone`,
   `business`, `city`, `description`, and a hidden `source` (identifies which
   page/form the lead came from).
2. The handler validates env vars, creates a Nodemailer Gmail transport,
   verifies the connection, and sends a styled HTML email to
   **info@localboostlabs.com** (subject: `New Lead: {business} - {city}`).
3. On success → **302 redirect to `/thank-you.html`**. On error → 500 JSON.
4. CORS is open (`*`) and only `POST`/`OPTIONS` are accepted.

**Required environment variables:**
- `GMAIL_USER` — the Gmail address used to send.
- `GMAIL_APP_PASSWORD` — a Gmail App Password (not the account password).

---

## 11. Deployment & Environment

- **Model:** Static files served from the repo root + a serverless function in
  `/api` (Vercel-style convention). The form action is `/api/contact`.
- **Env vars** (`GMAIL_USER`, `GMAIL_APP_PASSWORD`) must be set in the hosting
  platform's project settings for the contact form to work.
- **Install:** `npm install` (pulls `nodemailer`).
- No build command is required for the static site.

---

## 12. Local Development

Because it's static HTML, you can preview most of the site with any static
server from the project root, e.g.:

```bash
# Python
python3 -m http.server 8000
# then open http://localhost:8000

# or Node
npx serve .
```

The **contact form won't send email locally** unless you run the `/api/contact`
function in a compatible runtime (e.g. `vercel dev`) with the Gmail env vars set.

---

## 13. How to Add a New Page (checklist)

1. Duplicate the closest existing page (service vs. service-area template).
2. Update `<title>`, `<h1>`, `<meta name="description">` — keyword-front-loaded.
3. Update the `<link rel="canonical">` URL.
4. Update/refresh the JSON-LD blocks (Service or LocalBusiness, FAQ, Breadcrumb).
5. Rewrite body copy in the job-focused voice (see §6).
6. Keep NAP consistent: phone **(502) 530-9330**, address, email in footer.
7. Add the URL to `sitemap.xml` with an appropriate `priority`/`changefreq`.
8. Add internal links to/from related service and service-area pages + nav/footer.
9. Verify the lead form's hidden `source` field is set to the new page name.

---

## 14. Known Issues / Suggested TODOs

- **No `robots.txt`** in the repo — add one referencing the sitemap.
- **`images/` is empty** (`.gitkeep` only). Founder photos load from Google
  Drive thumbnail URLs in `about.html` — consider self-hosting for reliability.
- **`main.js` fallback success copy** still references "Local SEO experts will
  contact you within 24 hours… SEO strategy" — slightly off-brand vs. the
  job-focused voice (low priority; not user-visible in normal flow).
- **Name spelling:** confirm "Snket" vs. "Sanket" Desai.
- **Placeholder address:** "123 Main Street, Lancaster, SC 29720" appears to be
  a placeholder — replace with the real business address before launch.
- Sitemap `lastmod` dates are 2025-11-27 — refresh when pages change materially.

---

## 15. Glossary

- **Map Pack / Local 3-Pack** — the 3 local businesses shown with a map at the
  top of Google local search results; the highest-value placement for HVAC.
- **GBP (Google Business Profile)** — formerly Google My Business; the free
  Google listing that drives Map Pack visibility and click-to-call.
- **NAP** — Name, Address, Phone; must be consistent across the web for local SEO.
- **Citation** — any online listing/mention of the business's NAP (Yelp, Angi,
  HomeAdvisor, directories, etc.).
- **Job Pipeline Call** — the site's low-friction CTA: a free 15-minute call to
  map out how to get the contractor more high-value jobs.

---

*Generated for the Local Boost Labs project. Keep this file in the repo root so
it stays versioned alongside the code it documents.*

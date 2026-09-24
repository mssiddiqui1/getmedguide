# GetMedGuide — Site Setup Guide

This is a plain static site: HTML, CSS, and vanilla JavaScript. No build
step, no framework — upload the folder as-is to any web host and it works.
It's a separate HTML page per section (Home, Guides, Free Resources, Videos,
About, FAQ) sharing one stylesheet and one script, for cleaner URLs and
better per-topic SEO than a single scrolling page. Guide content itself
lives on the site as regular HTML pages (not PDF downloads), so readers
stay on GetMedGuide and can bookmark or share a guide's link directly.

## Folder structure

```
medguide-site/
├── index.html              ← Home
├── guides.html              ← All Guides (full catalog + filters: All/Free/Paid/Videos)
├── free-resources.html      ← Free Resources only
├── videos.html               ← Video Walkthroughs
├── about.html                 ← About + team bio
├── faq.html                    ← FAQ
├── robots.txt
├── sitemap.xml
├── README.md                  ← this file
├── guides/
│   ├── _template.html         ← COPY THIS to create a new guide page
│   ├── medical-coding-career-guide.html   (free)
│   ├── revenue-cycle-explained.html       (free)
│   ├── interview-prep.html                (free)
│   ├── cpc-exam-pocket-guide.html         (paid preview)
│   ├── cpc-cheat-sheet.html               (paid preview)
│   ├── cpt-sections-tree.html             (paid preview)
│   ├── hcpcs-level2-tree.html             (paid preview)
│   ├── icd10cm-chapters-tree.html         (paid preview)
│   └── revenue-cycle-pocket-guide.html    (paid preview)
└── assets/
    ├── css/styles.css         ← all colors/theme, responsive layout, guide-article styles (shared by every page)
    ├── js/
    │   ├── materials-data.js  ← EDIT THIS to add/change guides & videos
    │   └── main.js            ← rendering + filters + analytics (no need to edit)
    ├── pdfs/
    │   └── previews/cpc-flashcards-preview.pdf  ← the ONE item still delivered as a PDF (see below)
    └── img/                   ← sana-ahmed.jpg (done) + add a real og-cover.png (1200x630) for link previews

../medguide-paid-content-source/   ← NOT part of the website — see its own README.
                                      The full versions of your paid guides live here,
                                      for you to upload to Payhip.
```

## 1. Deploy it

Upload the whole `medguide-site` folder to whatever hosts GetMedGuide.com
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, or traditional hosting via
FTP all work — it's just static files, including the `guides/` folder). Do
**not** upload the sibling `medguide-paid-content-source` folder — that one
is private, for your own use uploading products to Payhip.

## 2. Google Analytics — already wired up

Every page's `<head>` (including every page in `guides/`) already has the
real GetMedGuide.com GA4 snippet with Measurement ID `G-9V0Y9LC399` filled
in. Nothing to do here unless you switch properties later — if you do,
find-and-replace `G-9V0Y9LC399` across every `.html` file with the new ID.

## 3. Menu-click analytics (already wired up)

Every nav link, filter button, hero button, card "Buy"/"Preview"/"Read
Guide" button, and footer link has a `data-menu="..."` label. `main.js`
automatically sends a GA4 event called **`menu_click`** whenever any of them
is clicked, with the label, destination URL, and page attached.

To see this data in GA4: **Reports → Engagement → Events → menu_click**, or
build a free-form Exploration filtered to that event name for a breakdown by
`menu_item`.

## 4. Selling guides with Payhip

Every paid guide is an on-site HTML preview page that ends in a "Buy" button
pointing at a Payhip checkout link (`buyUrl` in `materials-data.js`).

**To wire one up:**
1. Create a product in [Payhip](https://payhip.com) for each paid guide,
   uploading the matching real file from `../medguide-paid-content-source/`
   as its delivery file.
2. Copy the product's checkout link Payhip gives you.
3. Paste it into that item's `buyUrl` field in `assets/js/materials-data.js`
   — it's already set to a `https://payhip.com/b/REPLACE-ME-...` placeholder
   for every paid item, so you just need to swap in the real link.
4. Also update the same `buyUrl` inside that guide's own page in `guides/`
   (the "Buy Now" button near the bottom) so both places point to the same
   checkout link.

Payhip handles EU VAT automatically and lets buyers download their file
after checkout — that's normal and fine; the "no PDFs" approach on this
site is about the pre-purchase browsing experience (real, on-site HTML
guides you can read and share) rather than how Payhip itself delivers a
paid product after checkout.

**Why the real paid files aren't in this `medguide-site` folder:** anything
under `assets/` is publicly downloadable by direct link whether or not
someone paid. The full paid files live in the separate
`medguide-paid-content-source` folder instead — see its README for exactly
which file goes with which product.

**The one exception — CPC Flashcards:** flashcards are meant to be printed
and flipped through, so that single item keeps the PDF preview/PDF-delivery
pattern (`previewUrl` pointing at `assets/pdfs/previews/cpc-flashcards-preview.pdf`,
plus a Payhip `buyUrl`) instead of an HTML guide page. Every other guide —
free or paid — uses the HTML-page pattern.

## 5. Adding new guides (the only file you need to edit, plus one new page)

1. Duplicate `guides/_template.html`, rename it to your new guide's slug
   (e.g. `guides/your-next-guide.html`), and fill in the content — the
   template has inline comments showing both the free/full pattern and the
   paid/preview-then-buy pattern.
2. Open `assets/js/materials-data.js` and add one entry to the `MATERIALS`
   array pointing its `pageUrl` at your new file (there's a commented
   example template at the bottom of that file). Every page (Home's
   featured section, Guides, Free Resources) renders from this one array
   automatically, so this is the only other step.
3. **Free guide:** set `access: "free"`, `format: "html"`, and `pageUrl` to
   the full guide page — no `buyUrl` needed.
4. **Paid guide:** set `access: "paid"`, `format: "html"`, a `price`,
   `pageUrl` pointing at the preview page, and a `buyUrl` from Payhip
   (step 4 above). Keep the real, complete file in
   `../medguide-paid-content-source/` — never in `assets/`.

Every guide page opens in its own browser tab when clicked from a card
elsewhere on the site, so the catalog page a visitor came from stays open.

## 6. Adding YouTube videos later

Open `assets/js/materials-data.js` and add an entry to the `VIDEOS` array at
the bottom (a commented-out example is already there). You only need the
YouTube video ID — the part of the URL after `v=`. The Videos page switches
automatically from "coming soon" to showing your videos embedded, once at
least one entry exists.

## 7. About page — team bio

`about.html` already has Sana Ahmed's photo and a bio adapted from her
resume/professional summary (find the `TEAM PROFILE CARD` comment in that
file to edit the text further). One thing worth keeping in mind: her
materials themselves note she should be described as a **"CPC Candidate"**
until she actually passes the exam — keep that wording accurate as her
status changes.

## 8. Changing colors / branding

All colors are CSS variables at the top of `assets/css/styles.css`, under
`:root` (light theme) and `:root[data-theme="dark"]` / the
`prefers-color-scheme: dark` block (dark theme). Change `--primary`,
`--navy`, `--gold`, etc., and every page updates together — buttons, badges,
hero, links, and the guide-page article styles (`.guide-article`,
`.guide-table`, `.guide-buy-box`, etc.).

The dark/light toggle remembers each visitor's choice (via `localStorage`)
across visits, and falls back to their OS-level preference the first time.

## 9. SEO notes

- Each page has its own title, meta description, and Open Graph/Twitter
  tags — better for search ranking per topic than a single scrolling page.
  Every guide page under `guides/` follows the same pattern.
- `guides.html` generates JSON-LD Product/ItemList structured data
  automatically from `materials-data.js`; `faq.html` has FAQPage structured
  data built in.
- Add a real `assets/img/og-cover.png` (1200×630px) so social/link previews
  look right — that file doesn't exist yet.
- `sitemap.xml` and `robots.txt` are included — remember to add each new
  `guides/*.html` page to `sitemap.xml` as you create it.
- Guide cards render via JavaScript from `materials-data.js`, which modern
  Google indexing handles fine; `guides.html` also has a `<noscript>`
  fallback list linking directly to every guide page for non-JS crawlers.

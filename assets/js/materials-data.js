/* ==========================================================================
   GetMedGuide — materials-data.js
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD NEW CONTENT.

   Guides live on the site as HTML pages (not PDF downloads) so readers stay
   on GetMedGuide and can share a link — see guides/_template.html for how
   to build a new guide page, then add an entry here pointing to it.

   FIELD GUIDE
   -----------
   id          : unique short slug, no spaces (used for tracking)
   title       : shown as the card heading
   description : 1-2 sentence summary shown on the card
   category    : free-text label, e.g. "CPC Exam", "ICD-10", "CPT"
   format      : "html" for every item's PREVIEW/READ page (the on-site
                 guide, all items now use this), "pdf" only to flag that the
                 file delivered after purchase is a PDF (used for the
                 flashcards, which are meant to be printed/flipped through
                 rather than read on-screen — it just adds a "PDF" badge),
                 or "video"
   access      : "free" or "paid"
   price       : display string for paid items, e.g. "$12". Ignored if access = "free".
   pageUrl     : the on-site guide page — guides/your-slug.html. For a FREE
                 item this is the full guide. For a PAID item (including the
                 flashcards) this is a preview page — a page's worth of real
                 sample content, then a "Buy" CTA — build every one, free or
                 paid, from guides/_template.html. Never link straight to a
                 PDF as the preview.
   buyUrl      : for PAID items — the checkout link from Payhip. Create the
                 product in Payhip, copy its product link, paste it here.
   ========================================================================== */

const MATERIALS = [
  {
    id: "medical-coding-career-guide",
    title: "Medical Coding Career Guide",
    description: "A complete walkthrough of how to break into medical billing and coding — training paths, certifications, and what the job actually looks like.",
    category: "Getting Started",
    format: "html",
    access: "free",
    pageUrl: "guides/medical-coding-career-guide.html"
  },
  {
    id: "revenue-cycle-explained",
    title: "The Revenue Cycle, Explained",
    description: "A visual, step-by-step breakdown of the healthcare revenue cycle from patient registration through payment.",
    category: "Revenue Cycle",
    format: "html",
    access: "free",
    pageUrl: "guides/revenue-cycle-explained.html"
  },
  {
    id: "interview-prep",
    title: "Medical Billing & Coding Interview Prep",
    description: "Real technical, field-knowledge, and behavioral interview questions with model answers, plus questions to ask them back.",
    category: "Career",
    format: "html",
    access: "free",
    pageUrl: "guides/interview-prep.html"
  },
  {
    id: "cpc-exam-pocket-guide",
    title: "CPC Exam Pocket Guide",
    description: "A condensed, exam-day reference covering the high-yield rules and reminders that show up again and again on the CPC exam.",
    category: "CPC Exam",
    format: "html",
    access: "paid",
    price: "$12",
    pageUrl: "guides/cpc-exam-pocket-guide.html",
    buyUrl: "https://payhip.com/b/REPLACE-ME-cpc-exam-pocket-guide"
  },
  {
    id: "cpc-cheat-sheet",
    title: "CPC Cheat Sheet",
    description: "A one-glance reference for the code ranges, modifiers, and rules most likely to trip you up on exam day.",
    category: "CPC Exam",
    format: "html",
    access: "paid",
    price: "$8",
    pageUrl: "guides/cpc-cheat-sheet.html",
    buyUrl: "https://payhip.com/b/REPLACE-ME-cpc-cheat-sheet"
  },
  {
    id: "cpc-flashcards",
    title: "CPC Exam Flashcards (160 Cards)",
    description: "Flashcard-style review covering terminology, anatomy, ICD-10-CM, CPT, modifiers, HCPCS, E/M, and compliance for fast, repeatable study sessions. Printable PDF.",
    category: "CPC Exam",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/cpc-flashcards.html",
    buyUrl: "https://payhip.com/b/4wmnb"
  },
  {
    id: "cpt-sections-tree",
    title: "CPT Sections Quick-Reference Tree",
    description: "A visual map of every CPT section and subsection, built for fast lookups while you practice.",
    category: "CPT",
    format: "html",
    access: "paid",
    price: "$6",
    pageUrl: "guides/cpt-sections-tree.html",
    buyUrl: "https://payhip.com/b/REPLACE-ME-cpt-sections-tree"
  },
  {
    id: "hcpcs-level2-tree",
    title: "HCPCS Level II Quick-Reference Tree",
    description: "A visual map of the HCPCS Level II code ranges — supplies, drugs, DME, and services outside CPT.",
    category: "HCPCS",
    format: "html",
    access: "paid",
    price: "$6",
    pageUrl: "guides/hcpcs-level2-tree.html",
    buyUrl: "https://payhip.com/b/REPLACE-ME-hcpcs-level2-tree"
  },
  {
    id: "icd10cm-chapters-tree",
    title: "ICD-10-CM Chapters Quick-Reference Tree",
    description: "A visual map of every ICD-10-CM chapter and code range, for fast diagnosis-code lookups.",
    category: "ICD-10",
    format: "html",
    access: "paid",
    price: "$6",
    pageUrl: "guides/icd10cm-chapters-tree.html",
    buyUrl: "https://payhip.com/b/REPLACE-ME-icd10cm-chapters-tree"
  },
  {
    id: "revenue-cycle-pocket-guide",
    title: "Revenue Cycle Pocket Guide",
    description: "A condensed reference for every stage of the revenue cycle — registration through collections — with the terms you're expected to know.",
    category: "Revenue Cycle",
    format: "html",
    access: "paid",
    price: "$10",
    pageUrl: "guides/revenue-cycle-pocket-guide.html",
    buyUrl: "https://payhip.com/b/REPLACE-ME-revenue-cycle-pocket-guide"
  }

  /* --------------------------------------------------------------------
     Add your next guide here. Steps:
     1. Duplicate guides/_template.html, rename it to your-slug.html, and
        fill in the content (see the comments inside that file).
     2. Add an entry here following the pattern above.
     That's it — every page (Home's featured section, Guides, Free
     Resources) picks it up automatically.

  {
    id: "your-next-guide",
    title: "Your Next Guide Title",
    description: "One or two sentences describing it.",
    category: "CPC Exam",
    format: "html",
    access: "paid",
    price: "$15",
    pageUrl: "guides/your-next-guide.html",
    buyUrl: "https://payhip.com/b/your-product-link"
  },

  -------------------------------------------------------------------- */
];

/* Video walkthroughs — add entries here once you record your YouTube videos.
   youtubeId is the part of the URL after "v=", e.g. for
   https://www.youtube.com/watch?v=dQw4w9WgXcQ the id is "dQw4w9WgXcQ". */
const VIDEOS = [
  // {
  //   id: "cpc-intro-video",
  //   title: "How the CPC Exam Works (Intro)",
  //   description: "A 5-minute overview of the exam format and how to prepare.",
  //   youtubeId: "REPLACE_WITH_YOUTUBE_ID",
  //   access: "free"
  // }
];

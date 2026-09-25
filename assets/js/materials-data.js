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
   featured    : optional. Set to true to show this item in the Home page's
                 "Featured Guides" section. If nothing has featured: true,
                 Home falls back to showing the first 4 items in this list.
   ========================================================================== */

const MATERIALS = [
  {
    id: "intro-to-healthcare-flashcards",
    title: "Introduction to Healthcare Flashcards (100 Cards)",
    description: "100 free flashcards covering healthcare industry fundamentals — body systems, terminology, insurance basics, HIPAA, EHR, and more.",
    category: "Getting Started",
    format: "pdf",
    access: "free",
    featured: true,
    pageUrl: "guides/intro-to-healthcare-flashcards.html"
  },
  {
    id: "medical-coding-career-guide",
    title: "Medical Coding Career Guide",
    description: "A complete walkthrough of how to break into medical billing and coding — training paths, certifications, and what the job actually looks like.",
    category: "Getting Started",
    format: "html",
    access: "free",
    featured: true,
    pageUrl: "guides/medical-coding-career-guide.html"
  },
  {
    id: "revenue-cycle-explained",
    title: "The Revenue Cycle, Explained",
    description: "A visual, step-by-step breakdown of the healthcare revenue cycle from patient registration through payment.",
    category: "Revenue Cycle",
    format: "html",
    access: "free",
    featured: true,
    pageUrl: "guides/revenue-cycle-explained.html"
  },
  {
    id: "interview-prep",
    title: "Medical Billing & Coding Interview Prep",
    description: "Real technical, field-knowledge, and behavioral interview questions with model answers, plus questions to ask them back.",
    category: "Career",
    format: "html",
    access: "free",
    featured: true,
    pageUrl: "guides/interview-prep.html"
  },
  {
    id: "cpc-exam-pocket-guide",
    title: "CPC Exam Pocket Guide",
    description: "A condensed, exam-day reference covering the high-yield rules and reminders that show up again and again on the CPC exam.",
    category: "CPC Exam",
    format: "html",
    access: "free",
    featured: true,
    pageUrl: "guides/cpc-exam-pocket-guide.html"
  },
  {
    id: "cpc-cheat-sheet",
    title: "CPC Cheat Sheet",
    description: "A one-glance reference for the code ranges, modifiers, and rules most likely to trip you up on exam day.",
    category: "CPC Exam",
    format: "html",
    access: "free",
    pageUrl: "guides/cpc-cheat-sheet.html"
  },
  {
    id: "cpc-flashcards",
    title: "CPC Exam Flashcards (160 Cards)",
    description: "Flashcard-style review covering terminology, anatomy, ICD-10-CM, CPT, modifiers, HCPCS, E/M, and compliance for fast, repeatable study sessions. Printable PDF.",
    category: "CPC Exam",
    format: "pdf",
    access: "paid",
    price: "$25",
    featured: true,
    pageUrl: "guides/cpc-flashcards.html",
    buyUrl: "https://payhip.com/b/4wmnb"
  },
  {
    id: "cpt-sections-tree",
    title: "CPT Sections Quick-Reference Tree",
    description: "A visual map of every CPT section and subsection, built for fast lookups while you practice.",
    category: "CPT",
    format: "html",
    access: "free",
    pageUrl: "guides/cpt-sections-tree.html"
  },
  {
    id: "hcpcs-level2-tree",
    title: "HCPCS Level II Quick-Reference Tree",
    description: "A visual map of the HCPCS Level II code ranges — supplies, drugs, DME, and services outside CPT.",
    category: "HCPCS",
    format: "html",
    access: "free",
    pageUrl: "guides/hcpcs-level2-tree.html"
  },
  {
    id: "icd10cm-chapters-tree",
    title: "ICD-10-CM Chapters Quick-Reference Tree",
    description: "A visual map of every ICD-10-CM chapter and code range, for fast diagnosis-code lookups.",
    category: "ICD-10",
    format: "html",
    access: "free",
    pageUrl: "guides/icd10cm-chapters-tree.html"
  },
  {
    id: "revenue-cycle-pocket-guide",
    title: "Revenue Cycle Pocket Guide",
    description: "A condensed reference for every stage of the revenue cycle — registration through collections — with the terms you're expected to know.",
    category: "Revenue Cycle",
    format: "html",
    access: "free",
    pageUrl: "guides/revenue-cycle-pocket-guide.html"
  },
  {
    id: "intro-hipaa-compliance",
    title: "Introduction to HIPAA Compliance",
    description: "What HIPAA actually protects, who it applies to, and what compliance looks like in a real coding or billing job.",
    category: "Compliance",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-hipaa-compliance.html"
  },
  {
    id: "intro-emr-ehr",
    title: "Introduction to EMR and EHR",
    description: "What separates an EMR from an EHR, how patient data moves between systems, and why it matters for coding accuracy.",
    category: "Health IT",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-emr-ehr.html"
  },
  {
    id: "intro-to-healthcare",
    title: "Introduction to Healthcare",
    description: "A big-picture map of the healthcare industry — sectors, players, coverage types, and where coding and billing careers fit in.",
    category: "Getting Started",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-to-healthcare.html"
  },
  {
    id: "intro-to-nursing",
    title: "Introduction to Nursing",
    description: "The nursing credential ladder, the nursing process, and why nursing documentation matters so much to coders and billers.",
    category: "Healthcare Careers",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-to-nursing.html"
  },
  {
    id: "intro-cca",
    title: "Introduction to CCA",
    description: "What AHIMA's entry-level Certified Coding Associate credential covers, and how it compares to CPC.",
    category: "AHIMA Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-cca.html"
  },
  {
    id: "intro-cbcs",
    title: "Introduction to CBCS",
    description: "What the NHA's Certified Billing and Coding Specialist exam covers, and who the combined billing-and-coding role fits.",
    category: "NHA Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-cbcs.html"
  },
  {
    id: "intro-coc",
    title: "Introduction to COC",
    description: "What the Certified Outpatient Coder credential covers, and how facility outpatient coding differs from physician coding.",
    category: "AAPC Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-coc.html"
  },
  {
    id: "intro-cic",
    title: "Introduction to CIC",
    description: "What the Certified Inpatient Coder credential covers — ICD-10-PCS, MS-DRGs, and how inpatient coding differs from outpatient.",
    category: "AAPC Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-cic.html"
  },
  {
    id: "intro-ccs",
    title: "Introduction to CCS",
    description: "What the advanced, hospital-wide Certified Coding Specialist credential covers, and how it compares to CCA, COC, and CIC.",
    category: "AHIMA Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-ccs.html"
  },
  {
    id: "intro-crc",
    title: "Introduction to CRC",
    description: "What risk adjustment coding is, how HCCs and RAF scores work, and what the Certified Risk Adjustment Coder credential tests.",
    category: "AAPC Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-crc.html"
  },
  {
    id: "intro-cpma",
    title: "Introduction to CPMA",
    description: "What medical auditing involves, the audit cycle, and what the Certified Professional Medical Auditor credential tests.",
    category: "AAPC Certifications",
    format: "html",
    access: "free",
    pageUrl: "guides/intro-cpma.html"
  },
  {
    id: "healthcare-exams-overview",
    title: "Healthcare Certification Exams Overview",
    description: "A side-by-side look at every certification GetMedGuide covers — CPC, CCA, CBCS, COC, CIC, CCS, CRC, and CPMA — who administers each one, what it tests, and who it's for.",
    category: "Certifications",
    format: "html",
    access: "free",
    featured: true,
    pageUrl: "guides/healthcare-exams-overview.html"
  },
  {
    id: "cca-flashcards",
    title: "CCA Exam Flashcards (110 Cards)",
    description: "Flashcard-style review covering coding fundamentals, ICD-10-CM/PCS, CPT, HCPCS, health records, reimbursement, compliance, and terminology for the CCA exam. Printable PDF.",
    category: "AHIMA Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/cca-flashcards.html",
    buyUrl: "https://payhip.com/b/RwDtg"
  },
  {
    id: "cbcs-flashcards",
    title: "CBCS Exam Flashcards (120 Cards)",
    description: "Flashcard-style review covering billing fundamentals, payer types, claims processing, ICD-10-CM/CPT/HCPCS basics, compliance, and revenue cycle for the CBCS exam. Printable PDF.",
    category: "NHA Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/cbcs-flashcards.html",
    buyUrl: "https://payhip.com/b/Fhv6q"
  },
  {
    id: "coc-flashcards",
    title: "COC Exam Flashcards (120 Cards)",
    description: "Flashcard-style review covering outpatient facility coding, APCs/OPPS, ASC and ED coding, modifiers, NCCI/OCE edits, and compliance for the COC exam. Printable PDF.",
    category: "AAPC Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/coc-flashcards.html",
    buyUrl: "https://payhip.com/b/zgZoR"
  },
  {
    id: "cic-flashcards",
    title: "CIC Exam Flashcards (123 Cards)",
    description: "Flashcard-style review covering ICD-10-PCS, MS-DRGs, POA indicators, principal/secondary diagnosis selection, and inpatient compliance for the CIC exam. Printable PDF.",
    category: "AAPC Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/cic-flashcards.html",
    buyUrl: "https://payhip.com/b/VQvKh"
  },
  {
    id: "ccs-flashcards",
    title: "CCS Exam Flashcards (130 Cards)",
    description: "Flashcard-style review covering advanced ICD-10-CM/PCS, facility CPT/HCPCS, DRG/APC reimbursement, pharmacology, anatomy, and data quality for the CCS exam. Printable PDF.",
    category: "AHIMA Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/ccs-flashcards.html",
    buyUrl: "https://payhip.com/b/BHDGi"
  },
  {
    id: "crc-flashcards",
    title: "CRC Exam Flashcards (130 Cards)",
    description: "Flashcard-style review covering HCCs, RAF scores, MEAT documentation, risk-adjusted ICD-10-CM specificity, and Medicare Advantage basics for the CRC exam. Printable PDF.",
    category: "AAPC Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/crc-flashcards.html",
    buyUrl: "https://payhip.com/b/vePoI"
  },
  {
    id: "cpma-flashcards",
    title: "CPMA Exam Flashcards (130 Cards)",
    description: "Flashcard-style review covering the audit cycle, sampling methods, E/M auditing, fraud/abuse red flags, and compliance regulations for the CPMA exam. Printable PDF.",
    category: "AAPC Certifications",
    format: "pdf",
    access: "paid",
    price: "$25",
    pageUrl: "guides/cpma-flashcards.html",
    buyUrl: "https://payhip.com/b/5hvL1"
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

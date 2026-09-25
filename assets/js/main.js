/* ==========================================================================
   GetMedGuide — main.js
   Shared across every page. Renders whichever materials/videos grid exists
   on the current page from materials-data.js, handles filtering, dark mode,
   mobile nav, and menu-click analytics. You should not need to edit this
   file to add content — see materials-data.js instead.
   ========================================================================== */

(function () {
  "use strict";

  var grid = document.getElementById("materialsGrid");       // guides.html — full catalog + filters
  var featuredGrid = document.getElementById("featuredGrid"); // index.html — small sample
  var freeGrid = document.getElementById("freeGrid");         // free-resources.html — free items only
  var videosGrid = document.getElementById("videosGrid");     // videos.html
  var filterButtons = document.querySelectorAll(".filter-btn");
  var searchInput = document.getElementById("materialsSearch"); // guides.html — search box

  /* ---------------- Card rendering helpers ---------------- */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function badgeForAccess(item) {
    return item.access === "free"
      ? '<span class="badge badge-free">Free</span>'
      : '<span class="badge badge-paid">Paid</span>';
  }

  function badgeForFormat(item) {
    // HTML guide pages are the normal case now, so they get no format badge —
    // only the handful of items that are still an actual file (PDF) or a
    // video get a badge calling that out.
    if (item.format === "video") return '<span class="badge badge-format">Video</span>';
    if (item.format === "pdf") return '<span class="badge badge-format">PDF</span>';
    return "";
  }

  function ctaForItem(item) {
    // On-site links (guide pages) open in the SAME window/tab — they're part
    // of getmedguide.com, so there's no reason to fork a new tab for them.
    // Only external links (Payhip checkout) open in a new tab, so the buyer
    // never loses their place on the site mid-checkout.
    if (item.access === "free") {
      // Free items are on-site HTML guides now — "Read Guide", not "Download".
      return (
        '<a class="btn btn-primary btn-small" href="' +
        item.pageUrl +
        '" data-menu="Read: ' +
        item.title +
        '">Read Guide</a>'
      );
    }
    // Paid items: an on-site HTML preview page (pageUrl) is the normal case.
    // Only the flashcards (format: "pdf") still use a previewUrl PDF instead —
    // they're meant to be printed/flipped through, not read as a web page.
    var previewBtn = item.pageUrl
      ? '<a class="btn btn-outline btn-small" href="' +
        item.pageUrl +
        '" data-menu="Preview: ' +
        item.title +
        '">Preview</a>'
      : item.previewUrl
      ? '<a class="btn btn-outline btn-small" href="' +
        item.previewUrl +
        '" data-menu="Preview: ' +
        item.title +
        '">Preview</a>'
      : "";
    var buyBtn =
      '<a class="btn btn-primary btn-small" href="' +
      item.buyUrl +
      '" data-menu="Buy: ' +
      item.title +
      '" target="_blank" rel="noopener">Buy ' +
      (item.price || "") +
      "</a>";
    return previewBtn + buyBtn;
  }

  function cardHtml(item) {
    return (
      '<article class="card" data-access="' +
      item.access +
      '" data-format="' +
      item.format +
      '">' +
      '<div class="card-badges">' +
      badgeForAccess(item) +
      badgeForFormat(item) +
      "</div>" +
      "<h3>" +
      item.title +
      "</h3>" +
      "<p>" +
      item.description +
      "</p>" +
      '<div class="card-price-row"><span class="card-price">' +
      (item.access === "free" ? "Free" : item.price || "") +
      "</span></div>" +
      '<div class="card-actions">' +
      ctaForItem(item) +
      "</div>" +
      "</article>"
    );
  }

  function renderInto(container, list, emptyMessage) {
    if (!container) return;
    if (!list.length) {
      container.innerHTML = '<p class="loading-note">' + (emptyMessage || "Nothing here yet.") + "</p>";
      return;
    }
    container.innerHTML = list.map(cardHtml).join("");
    attachMenuTracking(container);
  }

  /* ---------------- guides.html — full catalog with filters + search ---------------- */
  function applyFilter(filter) {
    if (filter === "all") return MATERIALS;
    if (filter === "free" || filter === "paid") {
      return MATERIALS.filter(function (m) { return m.access === filter; });
    }
    return MATERIALS.filter(function (m) { return m.format === filter; });
  }

  // Matches the search box against title, description, and category — a
  // simple case-insensitive substring match is plenty for a library this
  // size (no need for a search library/index).
  function matchesSearch(item, query) {
    if (!query) return true;
    var q = query.toLowerCase();
    return (
      (item.title || "").toLowerCase().indexOf(q) !== -1 ||
      (item.description || "").toLowerCase().indexOf(q) !== -1 ||
      (item.category || "").toLowerCase().indexOf(q) !== -1
    );
  }

  var currentFilter = "all";

  function updateCatalog() {
    var query = searchInput ? searchInput.value.trim() : "";
    var list = applyFilter(currentFilter).filter(function (m) { return matchesSearch(m, query); });
    var emptyMessage = query
      ? 'No guides match "' + escapeHtml(query) + '".'
      : "No materials match this filter yet.";
    renderInto(grid, list, emptyMessage);
  }

  if (grid) {
    renderInto(grid, MATERIALS, "No materials yet — check back soon.");
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        currentFilter = btn.getAttribute("data-filter");
        updateCatalog();
      });
    });
    if (searchInput) {
      searchInput.addEventListener("input", updateCatalog);
    }
  }

  /* ---------------- index.html — featured sample ----------------
     Shows items with featured: true in materials-data.js. Falls back to
     the first 4 materials if nothing is explicitly flagged. */
  if (featuredGrid) {
    var featuredItems = MATERIALS.filter(function (m) { return m.featured; });
    if (featuredItems.length === 0) featuredItems = MATERIALS.slice(0, 4);
    renderInto(featuredGrid, featuredItems, "Guides are on the way — check back soon.");
  }

  /* ---------------- free-resources.html — free items only ---------------- */
  if (freeGrid) {
    var freeItems = MATERIALS.filter(function (m) { return m.access === "free"; });
    renderInto(freeGrid, freeItems, "No free resources yet — check back soon.");
  }

  /* ---------------- videos.html ---------------- */
  if (videosGrid && window.VIDEOS && VIDEOS.length) {
    videosGrid.innerHTML = VIDEOS.map(function (v) {
      return (
        '<article class="card video-card" data-access="' + v.access + '" data-format="video">' +
        '<iframe src="https://www.youtube.com/embed/' + v.youtubeId + '" ' +
        'title="' + v.title + '" loading="lazy" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        "allowfullscreen></iframe>" +
        "<h3>" + v.title + "</h3>" +
        "<p>" + v.description + "</p>" +
        "</article>"
      );
    }).join("");
    attachMenuTracking(videosGrid);
  }
  /* if videosGrid exists but VIDEOS is empty, the "coming soon" markup already
     in the HTML is left untouched */

  /* ---------------- JSON-LD structured data (SEO) — guides.html only ---------------- */
  function injectStructuredData() {
    if (!grid) return;
    var items = MATERIALS.map(function (m, i) {
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: m.title,
          description: m.description,
          category: m.category,
          offers: {
            "@type": "Offer",
            price: m.access === "free" ? "0" : String(m.price || "").replace(/[^0-9.]/g, ""),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          }
        }
      };
    });

    var data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: items
    };

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /* ---------------- Dark / light theme toggle ---------------- */
  // Preference is remembered via localStorage (this site is deployed on the
  // user's own hosting, not previewed inside a chat sandbox, so persistence
  // is safe here). Falls back gracefully to the OS-level preference if
  // storage is unavailable (private browsing, blocked storage, etc). A small
  // inline script in <head> applies the saved choice before first paint to
  // avoid a flash of the wrong theme — this just keeps it in sync afterward.
  var themeToggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  function storedTheme() {
    try { return localStorage.getItem("gmg-theme"); } catch (e) { return null; }
  }
  function storeTheme(value) {
    try { localStorage.setItem("gmg-theme", value); } catch (e) { /* ignore */ }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isDark = current ? current === "dark" : systemPrefersDark;
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      storeTheme(next);
    });
  }

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { siteNav.classList.remove("is-open"); });
    });
  }

  /* ---------------- Menu / link click analytics (GA4) ---------------- */
  // Fires a "menu_click" event to Google Analytics for every element with a
  // data-menu attribute (nav links, filter buttons, hero CTAs, card buttons,
  // footer links). View under GA4 > Reports > Engagement > Events > menu_click,
  // or build an Exploration filtered to that event name for a breakdown by
  // menu_item. No extra setup needed beyond adding your Measurement ID.
  function attachMenuTracking(scope) {
    (scope || document).querySelectorAll("[data-menu]").forEach(function (el) {
      if (el.dataset.trackingBound) return; // avoid double-binding on re-render
      el.dataset.trackingBound = "true";
      el.addEventListener("click", function () {
        if (typeof gtag === "function") {
          gtag("event", "menu_click", {
            menu_item: el.getAttribute("data-menu"),
            link_url: el.getAttribute("href") || "",
            page_location: window.location.href
          });
        }
      });
    });
  }

  /* ---------------- Init ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  injectStructuredData();
  attachMenuTracking(document);
})();

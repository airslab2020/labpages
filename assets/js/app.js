(function () {
  const { SiteContent, SiteUI } = window;

  function localPaperHref(slug) {
    return `./papers/${encodeURIComponent(slug)}/index.html`;
  }

  function localNoteHref(slug) {
    return `./notes/${encodeURIComponent(slug)}/index.html`;
  }

  function youtubeVideoId(url) {
    const value = String(url || "");
    const embedMatch = value.match(/youtube(?:-nocookie)?\.com\/embed\/([^?&/]+)/i);
    if (embedMatch) {
      return embedMatch[1];
    }

    const watchMatch = value.match(/[?&]v=([^?&]+)/i);
    if (watchMatch) {
      return watchMatch[1];
    }

    const shortMatch = value.match(/youtu\.be\/([^?&/]+)/i);
    return shortMatch ? shortMatch[1] : "";
  }

  function bilibiliVideoId(url) {
    const value = String(url || "");
    const queryMatch = value.match(/[?&]bvid=([^?&]+)/i);
    if (queryMatch) {
      return queryMatch[1];
    }

    const pathMatch = value.match(/bilibili\.com\/video\/([^?&/]+)/i);
    return pathMatch ? pathMatch[1] : "";
  }

  function videoEmbedSrc(url) {
    const value = String(url || "").trim();
    const id = youtubeVideoId(url);
    if (!id) {
      return value.startsWith("//") ? `https:${value}` : value;
    }

    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1"
    });

    if (/^https?:$/i.test(window.location.protocol)) {
      params.set("origin", window.location.origin);
    }

    return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
  }

  function videoWatchHref(url) {
    const id = youtubeVideoId(url);
    if (id) {
      return `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
    }

    const bvid = bilibiliVideoId(url);
    if (bvid) {
      return `https://www.bilibili.com/video/${encodeURIComponent(bvid)}`;
    }

    const value = String(url || "").trim();
    return value.startsWith("//") ? `https:${value}` : value;
  }

  function externalLinkAttrs(href) {
    return /^https?:\/\//i.test(href || "") ? ' target="_blank" rel="noreferrer"' : "";
  }

  function buttonMarkup(action) {
    return `<a class="button ${action.kind === "secondary" ? "button-secondary" : "button-primary"}" href="${SiteUI.escapeHtml(action.href)}"${externalLinkAttrs(action.href)}>${SiteUI.escapeHtml(action.label)}</a>`;
  }

  function headerMarkup(currentPage) {
    const brandMark = SiteContent.site.brandMark || "XJ";
    const logoMark = SiteContent.site.logoMark;
    const logoMarkAlt = SiteContent.site.logoMarkAlt || SiteContent.site.title || "Site logo";
    const activePage =
      currentPage === "vr-2026-projects" ||
      currentPage === "vr-2026-reading" ||
      currentPage === "networking-2026-reading" ||
      currentPage === "networking-2025-reading"
        ? "course"
        : currentPage;
    return `
      <header class="site-header">
        <div class="shell nav-shell">
          <a class="brand" href="./index.html" aria-label="${SiteUI.escapeHtml(SiteContent.site.title)} home">
            ${
              logoMark
                ? `<span class="brand-mark brand-mark--logo"><img src="${SiteUI.escapeHtml(logoMark)}" alt="${SiteUI.escapeHtml(logoMarkAlt)}" loading="eager" decoding="async"></span>`
                : `<span class="brand-mark">${SiteUI.escapeHtml(brandMark)}</span>`
            }
            <span class="brand-copy">
              <strong>${SiteUI.escapeHtml(SiteContent.site.title)}</strong>
              <small>${SiteUI.escapeHtml(SiteContent.site.tagline)}</small>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav id="site-nav" class="site-nav" aria-label="Primary">
            ${SiteContent.site.nav
              .map(
                (item) => `
                  <a class="nav-link${item.key === activePage ? " is-active" : ""}" href="${item.href}">
                    ${SiteUI.escapeHtml(item.label)}
                  </a>
                `
              )
              .join("")}
          </nav>
        </div>
      </header>
    `;
  }

  function footerMarkup() {
    const footerMark = SiteContent.site.footerMark || SiteContent.site.brandMark || "XJ";
    const logoMark = SiteContent.site.logoMark;
    const logoMarkAlt = SiteContent.site.logoMarkAlt || SiteContent.site.title || "Site logo";
    return `
      <footer class="site-footer">
        <div class="shell footer-grid">
          <div class="footer-brand">
            <div class="footer-badge${logoMark ? " footer-badge--logo" : ""}">
              ${
                logoMark
                  ? `<img src="${SiteUI.escapeHtml(logoMark)}" alt="${SiteUI.escapeHtml(logoMarkAlt)}" loading="lazy" decoding="async">`
                  : SiteUI.escapeHtml(footerMark)
              }
            </div>
            <div>
              <p>${SiteUI.escapeHtml(SiteContent.site.description)}</p>
            </div>
          </div>
          <div>
            <p class="footer-title">Pages</p>
            <div class="footer-links">
              ${SiteContent.site.footerLinks
                .map(
                  (item) =>
                    `<a href="${SiteUI.escapeHtml(item.href)}"${externalLinkAttrs(item.href)}>${SiteUI.escapeHtml(item.label)}</a>`
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="shell footer-meta">
          <p>${SiteUI.escapeHtml(SiteContent.site.copyright || "")}</p>
          <p class="footer-counter" id="busuanzi_container_site_pv">
            Visits <strong id="busuanzi_value_site_pv">--</strong>
          </p>
        </div>
      </footer>
    `;
  }

  function setupVisitCounter() {
    if (document.querySelector('script[data-counter-provider="busuanzi"]')) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.dataset.counterProvider = "busuanzi";
    script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.body.appendChild(script);
  }

  function pageHeroMarkup(config, asideMarkup) {
    return `
      <section class="hero-section">
        <div class="shell hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${SiteUI.escapeHtml(config.eyebrow || "")}</p>
            <h1>${SiteUI.escapeHtml(config.title || "").replace(/\n/g, "<br>")}</h1>
            ${
              config.descriptionHtml
                ? `<div class="hero-description">${config.descriptionHtml}</div>`
                : `<p class="hero-description">${SiteUI.escapeHtml(config.description || "")}</p>`
            }
            ${
              Array.isArray(config.actions)
                ? `<div class="button-row">${config.actions.map(buttonMarkup).join("")}</div>`
                : ""
            }
          </div>
          <aside class="${config.asideClass || "hero-panel"}">
            ${asideMarkup || ""}
          </aside>
        </div>
      </section>
    `;
  }

  function sectionHeading(title, eyebrow, extra) {
    return `
      <div class="section-heading">
        <div>
          <p class="eyebrow">${SiteUI.escapeHtml(eyebrow || "")}</p>
          <h2>${SiteUI.escapeHtml(title)}</h2>
        </div>
        ${extra || '<span class="heading-orbit" aria-hidden="true"></span>'}
      </div>
    `;
  }

  function richTextPartsMarkup(parts, fallback) {
    if (!Array.isArray(parts)) {
      return SiteUI.escapeHtml(fallback || "");
    }

    return parts
      .map((part) => {
        if (typeof part === "string") {
          return SiteUI.escapeHtml(part);
        }
        if (part && part.strong) {
          return `<strong>${SiteUI.escapeHtml(part.strong)}</strong>`;
        }
        if (part && part.href && part.label) {
          return `<a class="inline-link" href="${part.href}" target="_blank" rel="noreferrer">${SiteUI.escapeHtml(part.label)}</a>`;
        }
        return "";
      })
      .join("");
  }

  function sponsorLogoMarkup(sponsor) {
    const name = typeof sponsor === "string" ? sponsor : sponsor.name;
    const logo = typeof sponsor === "object" && sponsor ? sponsor.logo : "";
    const color = typeof sponsor === "object" && /^#[0-9a-f]{6}$/i.test(sponsor.color || "") ? sponsor.color : "";
    const style = color ? ` style="--sponsor-color: ${color}"` : "";

    return `
      <span class="marquee-item sponsor-logo-card" aria-label="${SiteUI.escapeHtml(name)}"${style}>
        ${
          logo
            ? `<img src="${SiteUI.escapeHtml(logo)}" alt="${SiteUI.escapeHtml(`${name} logo`)}" loading="lazy" decoding="async">`
            : `<span class="sponsor-wordmark">${SiteUI.escapeHtml(name)}</span>`
        }
      </span>
    `;
  }

  function renderAboutPage() {
    const about = SiteContent.about;
    const heroAside = `
      <div class="aside-card">
        <p class="eyebrow">Research Lens</p>
        <h3>AI meets interaction and real-world systems.</h3>
        <p>We study how perception, human-centered interaction, and efficient intelligence can turn real-world signals and devices into practical systems for everyday environments.</p>
      </div>
      <div class="chip-row">
        <span>Wireless Sensing</span>
        <span>Wearables</span>
        <span>Multimodal AI</span>
        <span>Edge Intelligence</span>
      </div>
    `;

    return `
      ${pageHeroMarkup(about.hero, heroAside)}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Who We Are", "Overview")}
          <div class="panel stack-panel">
            ${about.intro.map((paragraph) => `<p>${SiteUI.escapeHtml(paragraph)}</p>`).join("")}
          </div>
          <div class="metric-grid">
            ${about.metrics
              .map(
                (item) => `
                  <article class="metric-card">
                    <strong>${SiteUI.escapeHtml(item.label)}</strong>
                    <p>${SiteUI.escapeHtml(item.value)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${sectionHeading("Research Directions", "Focus")}
          <div class="card-grid card-grid-2">
            ${about.highlights
              .map(
                (item) => `
                  <article class="panel info-card">
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.text)}</p>
                    ${
                      Array.isArray(item.details) && item.details.length
                        ? `<ul class="info-list">
                            ${item.details.map((detail) => `<li>${SiteUI.escapeHtml(detail)}</li>`).join("")}
                          </ul>`
                        : ""
                    }
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Latest News", "News", '<a class="inline-link" href="./publications.html">Browse papers</a>')}
          <div class="news-grid">
            ${about.news
              .map((item) => {
                const newsHref = item.href || localPaperHref(item.slug);
                const newsLinkLabel = item.linkLabel || "Open paper page";
                return `
                  <article class="panel news-card">
                    <span class="date-pill">${SiteUI.escapeHtml(item.date)}</span>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.summary)}</p>
                    <a class="inline-link" href="${SiteUI.escapeHtml(newsHref)}"${externalLinkAttrs(
                      newsHref
                    )}>${SiteUI.escapeHtml(newsLinkLabel)}</a>
                  </article>
                `;
              })
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${sectionHeading("Partners In the Dream", "Support")}
          <div class="marquee">
            <div class="marquee-track">
              ${[...about.sponsors, ...about.sponsors]
                .map(sponsorLogoMarkup)
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function publicationCardMarkup(paper) {
    const theme = SiteUI.publicationTheme(paper);
    return `
      <a class="panel publication-card publication-card-link" href="${localPaperHref(
        paper.slug
      )}" data-year="${paper.year || ""}" data-text="${SiteUI.escapeHtml(
        `${paper.title} ${paper.authors} ${paper.venue} ${theme.label}`.toLowerCase()
      )}">
        <span class="date-pill">${SiteUI.escapeHtml(String(paper.year || "Archive"))}</span>
        <h3>${SiteUI.escapeHtml(paper.title)}</h3>
        <p class="muted">${SiteUI.escapeHtml(paper.authors)}</p>
        <div class="meta-row">
          <span>${SiteUI.escapeHtml(paper.venue)}</span>
          <span>${SiteUI.escapeHtml(theme.label)}</span>
        </div>
        <span class="inline-link">Read paper page</span>
      </a>
    `;
  }

  function renderPublicationsPage() {
    const years = SiteUI.uniqueYears(SiteContent.publications);
    const featuredCount = SiteContent.publications.length;
    const latestPaper = SiteContent.publications[0];

    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Publications",
          title: "Publications from the XJTU AIRS Lab.",
          description:
            "Explore our work on wireless and wearable sensing, multimodal learning, efficient AI, and real-world systems for understanding people and the physical world.",
          actions: [
            { label: "Read Latest Paper", href: localPaperHref(latestPaper.slug), kind: "secondary" },
            { label: "About The Group", href: "./index.html", kind: "primary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Research Output</p>
            <h3>${featuredCount} publications</h3>
            <p>Browse peer-reviewed papers, preprints, and project pages spanning sensing datasets, learning methods, and real-world intelligent systems.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Publication List", "Archive")}
          <div class="toolbar">
            <label class="search-field">
              <span>Search papers</span>
              <input id="publication-search" type="search" placeholder="Title, author, venue, topic">
            </label>
            <div class="filter-row" id="year-filters">
              <button class="filter-chip is-active" type="button" data-year="all">All years</button>
              ${years
                .map((year) => `<button class="filter-chip" type="button" data-year="${year}">${year}</button>`)
                .join("")}
            </div>
          </div>
          <p id="publication-results" class="toolbar-note">Showing ${featuredCount} papers.</p>
          <div id="publication-grid" class="publication-grid">
            ${SiteContent.publications.map(publicationCardMarkup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderDatasetPage() {
    const datasets = SiteContent.datasets;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Datasets",
          title: "Datasets and benchmarks from XJTU AIRS Lab.",
          description: datasets.intro,
          actions: [
            { label: "Browse Publications", href: "./publications.html", kind: "secondary" },
            { label: "Back To About", href: "./index.html", kind: "primary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Collection</p>
            <h3>${datasets.items.length} public resources</h3>
            <p>Each entry can link to a local paper page, project repository, DOI, and dataset download portal.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Featured Datasets", "Resources")}
          <div class="card-grid card-grid-2">
            ${datasets.items
              .map(
                (item) => `
                  <article class="panel info-card dataset-card" role="link" tabindex="0" data-href="${localPaperHref(
                    item.slug
                  )}" aria-label="Open ${SiteUI.escapeHtml(item.title)} paper page">
                    <img class="dataset-cover" src="${SiteUI.datasetCardCoverSrc(item)}" alt="${SiteUI.escapeHtml(
                      item.coverAlt || `${item.title} title card`
                    )}">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.year)}</span>
                      <span>${SiteUI.escapeHtml(item.venue)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.summary)}</p>
                    ${
                      Array.isArray(item.sensors) && item.sensors.length
                        ? `<div class="chip-row">
                            ${item.sensors.map((sensor) => `<span>${SiteUI.escapeHtml(sensor)}</span>`).join("")}
                          </div>`
                        : ""
                    }
                    ${
                      Array.isArray(item.highlights) && item.highlights.length
                        ? `<ul class="clean-list">
                            ${item.highlights.map((point) => `<li>${SiteUI.escapeHtml(point)}</li>`).join("")}
                          </ul>`
                        : ""
                    }
                    <div class="dataset-link-row">
                      <a class="chip-link" href="${localPaperHref(item.slug)}">Paper Page</a>
                      ${(Array.isArray(item.links) ? item.links : [])
                        .map((link) => {
                          const external = /^https?:\/\//i.test(link.href);
                          return `<a class="chip-link" href="${link.href}"${
                            external ? ' target="_blank" rel="noreferrer"' : ""
                          }>${SiteUI.escapeHtml(link.label)}</a>`;
                        })
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function setupDatasetCards(shell) {
    shell.querySelectorAll(".dataset-card[data-href]").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest("a, button, input, textarea, select, label")) {
          return;
        }
        window.location.href = card.dataset.href;
      });

      card.addEventListener("keydown", (event) => {
        if (event.target !== card || (event.key !== "Enter" && event.key !== " ")) {
          return;
        }
        event.preventDefault();
        window.location.href = card.dataset.href;
      });
    });
  }

  function renderNotesPage() {
    const notes = SiteContent.notes;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Notes",
          title: "Group knowledge, onboarding, and shared references.",
          description: notes.intro,
          actions: [
            { label: "Open Gallery", href: "./gallery.html", kind: "secondary" },
            { label: "Back To About", href: "./index.html", kind: "primary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Notes</p>
            <h3>${notes.items.length} maintained ${notes.items.length === 1 ? "entry" : "entries"}</h3>
            <p>This page collects long-form group knowledge pages that deserve their own top-level archive instead of living inside the gallery.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Group Notes", "Writing")}
          <div class="card-grid card-grid-2">
            ${notes.items
              .map(
                (item) => `
                  <a class="panel info-card note-card" href="${localNoteHref(item.slug)}">
                    <img class="note-card-cover" src="${SiteUI.noteCardCoverSrc(item)}" alt="${SiteUI.escapeHtml(
                      item.coverAlt || `${item.title} title card`
                    )}">
                    <span class="date-pill">${SiteUI.escapeHtml(item.tags)}</span>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.text)}</p>
                    <span class="inline-link">Open note</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderFeiWangPage() {
    const profile = SiteContent.feiWang;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Fei Wang",
          title: `${profile.name}\n${profile.subtitle}`,
          asideClass: "hero-panel hero-panel-plain",
          descriptionHtml: `
            <p>${SiteUI.escapeHtml(profile.note)}</p>
            ${
              profile.phdOpening
                ? `
            <div class="recruitment-banner" lang="zh-CN">
              <div class="recruitment-banner__copy">
                <span class="recruitment-banner__eyebrow">${SiteUI.escapeHtml(profile.phdOpening.label)}</span>
                <p class="recruitment-banner__text">${SiteUI.escapeHtml(profile.phdOpening.text)}</p>
              </div>
              ${
                profile.phdOpening.link
                  ? `<a class="recruitment-banner__link" href="${profile.phdOpening.link.href}"${externalLinkAttrs(profile.phdOpening.link.href)}>${SiteUI.escapeHtml(profile.phdOpening.link.label)}</a>`
                  : ""
              }
            </div>`
                : ""
            }
            <div class="admissions-callout">
              <div class="admissions-copy">
                <strong>Interns, Master's & Ph.D. Applicants</strong>
                <p>${SiteUI.escapeHtml(profile.admissionsNote)}</p>
                ${profile.admissionsNoteZh ? `<p lang="zh-CN">${SiteUI.escapeHtml(profile.admissionsNoteZh)}</p>` : ""}
              </div>
              <a class="admissions-link" href="${profile.admissionsLink.href}"${externalLinkAttrs(profile.admissionsLink.href)}>
                <span class="admissions-link-label">${SiteUI.escapeHtml(profile.admissionsLink.label)}</span>
                <span class="admissions-link-hint">Open link / 点击查看</span>
              </a>
            </div>
          `,
          actions: [
            { label: "View Teaching", href: "./teaching.html", kind: "secondary" },
            { label: "Meet The Team", href: "./team.html", kind: "primary" }
          ]
        },
        `
          <div class="profile-card profile-card-compact">
            <img class="avatar-large" src="${SiteUI.portraitPreviewSrc({
              name: profile.name,
              role: "Faculty",
              palette: ["#264a72", "#d9ebff"],
              photo: profile.photo
            })}" alt="${SiteUI.escapeHtml(profile.photoAlt || profile.name)}" decoding="async">
            <ul class="clean-list">
              ${profile.quickFacts.map((item) => `<li>${richTextPartsMarkup(item, item)}</li>`).join("")}
            </ul>
            <div class="chip-row">
              ${profile.profileLinks
                .map((item) => `<a class="chip-link" href="${item.href}">${SiteUI.escapeHtml(item.label)}</a>`)
                .join("")}
            </div>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Biography", "Profile")}
          <div class="panel stack-panel">
            ${profile.bio.map((paragraph) => `<p>${richTextPartsMarkup(paragraph, paragraph)}</p>`).join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          ${sectionHeading("Significant Performance", "Professional Statement")}
          ${
            profile.significantPerformance.intro
              ? `<div class="panel stack-panel performance-summary">
                  <p>${SiteUI.escapeHtml(profile.significantPerformance.intro)}</p>
                </div>`
              : ""
          }
          <div class="card-grid card-grid-3 performance-grid">
            ${profile.significantPerformance.items
              .map(
                (item) => `
                  <article class="panel info-card performance-card">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.period)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          ${
            profile.significantPerformance.note
              ? `<div class="panel stack-panel performance-note">
                  <p>${SiteUI.escapeHtml(profile.significantPerformance.note)}</p>
                </div>`
              : ""
          }
        </div>
      </section>
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Academic Service", "Service")}
          <div class="card-grid card-grid-2">
            ${profile.service
              .map(
                (item) => `
                  <article class="panel info-card">
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <ul class="clean-list">
                      ${item.items.map((entry) => `<li>${SiteUI.escapeHtml(entry)}</li>`).join("")}
                    </ul>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          ${sectionHeading("Selected Grants As PI", "Funding")}
          <div class="card-grid card-grid-2">
            ${profile.grants
              .map(
                (item) => `
                  <article class="panel info-card">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.period)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p class="muted">${SiteUI.escapeHtml(item.sponsor)}</p>
                    <p>${SiteUI.escapeHtml(item.note)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Appointments And Education", "Timeline")}
          <div class="timeline-grid timeline-grid-single">
            ${profile.appointments
              .map(
                (item) => `
                  <article class="panel timeline-card">
                    <span class="date-pill">${SiteUI.escapeHtml(item.year)}</span>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${richTextPartsMarkup(item.textParts, item.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function courseOfferingMarkup(offering) {
    const label = SiteUI.escapeHtml(offering.label);
    const action = offering.action ? SiteUI.escapeHtml(offering.action) : "";
    const content = action ? `<span>${label}</span><strong>${action}</strong>` : `<span>${label}</span>`;
    if (!offering.href) {
      return `<span class="course-offering-chip">${content}</span>`;
    }
    const external = /^https?:\/\//i.test(offering.href);
    return `<a class="course-offering-chip course-offering-link" href="${offering.href}"${
      external ? ' target="_blank" rel="noreferrer"' : ""
    }>${content}</a>`;
  }

  function courseLanguageCardMarkup(course, language) {
    const data = course[language];
    const label = language === "en" ? "English" : "中文";
    const resourceLabel =
      data.resourcesHeading || (language === "en" ? "Academic Reading" : "学术论文阅读");
    return `
      <article class="panel course-card course-language-card">
        <div class="meta-row">
          <span class="date-pill">${SiteUI.escapeHtml(label)}</span>
          <span>${SiteUI.escapeHtml(data.code)}</span>
          <span>${SiteUI.escapeHtml(data.level)}</span>
        </div>
        <h3>${SiteUI.escapeHtml(data.name)}</h3>
        <p class="course-school">${SiteUI.escapeHtml(data.school || "")}</p>
        <p>${SiteUI.escapeHtml(data.overview)}</p>
        <div class="course-offering-list" aria-label="${SiteUI.escapeHtml(data.name)} offerings">
          ${(data.offerings || []).map(courseOfferingMarkup).join("")}
        </div>
        ${
          data.resources && data.resources.length
            ? `
        <div class="course-resource-block">
          <p class="eyebrow course-resource-label">${SiteUI.escapeHtml(resourceLabel)}</p>
          <div class="course-offering-list" aria-label="${SiteUI.escapeHtml(data.name)} academic reading">
            ${data.resources.map(courseOfferingMarkup).join("")}
          </div>
        </div>`
            : ""
        }
        <div class="chip-row">
          ${(data.topics || []).map((topic) => `<span>${SiteUI.escapeHtml(topic)}</span>`).join("")}
        </div>
        <ul class="clean-list">
          ${(data.outcomes || []).map((item) => `<li>${SiteUI.escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `;
  }

  function textbookLanguageMarkup(textbook, language) {
    const data = textbook[language] || {};
    const label = language === "en" ? "English" : "中文";
    return `
      <article class="panel course-card textbook-card">
        <div class="meta-row">
          <span class="date-pill">${SiteUI.escapeHtml(label)}</span>
          <span>${SiteUI.escapeHtml(textbook.year || "")}</span>
          <span>${SiteUI.escapeHtml(data.note || "")}</span>
        </div>
        <h3>${SiteUI.escapeHtml(data.title || "")}</h3>
        <p class="textbook-authors">${richTextPartsMarkup(data.authorsParts, data.authors || "")}</p>
        <p class="course-school">${SiteUI.escapeHtml(data.publisher || "")}</p>
      </article>
    `;
  }

  function textbookPairMarkup(textbook) {
    return `
      <div class="course-pair textbook-pair">
        ${textbookLanguageMarkup(textbook, "en")}
        ${textbookLanguageMarkup(textbook, "zh")}
      </div>
    `;
  }

  function renderCoursePage() {
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Teaching",
          title: "Teaching, textbooks, and course resources.",
          description:
            "This page collects textbooks, recent teaching records, course levels, offering terms, and project links for teaching activities in the group.",
          actions: [{ label: "Back To About", href: "./index.html", kind: "primary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Teaching Portfolio</p>
            <h3>Textbooks, courses, and project showcases.</h3>
            <p>Recent teaching materials and offerings include software engineering, graduate networking, undergraduate virtual reality, and professional English practice.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Textbooks", "Teaching Materials")}
          <div class="course-pair-list">
            ${(SiteContent.textbooks || []).map(textbookPairMarkup).join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          ${sectionHeading("Course Offerings", "Teaching Archive")}
          <div class="course-pair-list">
            ${SiteContent.courses
              .map(
                (course) => `
                  <div class="course-pair" id="${SiteUI.escapeHtml(course.id)}">
                    ${courseLanguageCardMarkup(course, "en")}
                    ${courseLanguageCardMarkup(course, "zh")}
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function vrReadingPaperMarkup(paper) {
    const segments = String(paper.title || "").split("|");
    const code = (segments[0] || "").trim();
    const title = segments.slice(1).join("|").trim() || code;
    return `
      <article class="panel vr-reading-paper">
        <div class="meta-row">
          <span class="date-pill">${SiteUI.escapeHtml(code)}</span>
        </div>
        <h5>${SiteUI.escapeHtml(title)}</h5>
        ${
          paper.authors
            ? `<p class="vr-reading-paper__authors"><strong>Authors / 作者：</strong>${SiteUI.escapeHtml(paper.authors)}</p>`
            : ""
        }
        <p>${SiteUI.escapeHtml(paper.summary || "")}</p>
      </article>
    `;
  }

  function vrReadingGuideMarkup(guide) {
    if (!guide) {
      return "";
    }

    return `
      <section class="vr-reading-guide" id="${SiteUI.escapeHtml(guide.id || "")}">
        <article class="panel vr-reading-overview">
          <div class="vr-reading-overview__copy">
            <p class="eyebrow">${SiteUI.escapeHtml(guide.label || "Reading Guide")}</p>
            <h3>${SiteUI.escapeHtml(guide.title)}</h3>
            <p>${SiteUI.escapeHtml(guide.description || "")}</p>
          </div>
          <div class="vr-reading-overview__meta">
            <span>${SiteUI.escapeHtml(guide.curator || "")}</span>
            <span>${SiteUI.escapeHtml(guide.countLabel || "")}</span>
          </div>
        </article>
        <div class="vr-reading-section-list">
          ${(guide.sections || [])
            .map(
              (section) => `
                <article class="panel vr-reading-section">
                  <div class="vr-reading-section__header">
                    <p class="eyebrow">Reading Theme</p>
                    <h3>${SiteUI.escapeHtml(section.title || "")}</h3>
                    ${
                      section.description
                        ? `<p>${SiteUI.escapeHtml(section.description)}</p>`
                        : ""
                    }
                  </div>
                  <div class="vr-reading-group-list">
                    ${(section.groups || [])
                      .map(
                        (group) => `
                          <section class="vr-reading-group">
                            ${
                              group.title && group.title !== "未分类"
                                ? `<h4>${SiteUI.escapeHtml(group.title)}</h4>`
                                : ""
                            }
                            <div class="vr-reading-paper-grid">
                              ${(group.papers || []).map(vrReadingPaperMarkup).join("")}
                            </div>
                          </section>
                        `
                      )
                      .join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function vrReadingLibraryMarkup(guides) {
    if (!Array.isArray(guides) || !guides.length) {
      return "";
    }

    return `
      <section class="section">
        <div class="shell">
          ${sectionHeading("Academic Reading References", "Curated Reading")}
          <div class="vr-reading-library">
            ${guides.map(vrReadingGuideMarkup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function vrSelectedReadingCardMarkup(item, index) {
    return `
      <article class="panel vr-selected-card">
        <div class="meta-row">
          <span class="date-pill">Group ${String(index + 1).padStart(2, "0")}</span>
          <span>${SiteUI.escapeHtml(item.venue || "")}</span>
        </div>
        <h3>
          ${
            item.link
              ? `<a class="vr-selected-card__title-link" href="${SiteUI.escapeHtml(item.link)}" target="_blank" rel="noreferrer">${SiteUI.escapeHtml(item.title || "")}</a>`
              : SiteUI.escapeHtml(item.title || "")
          }
        </h3>
        <div class="vr-selected-card__students">
          ${(item.students || []).map((student) => `<span>${SiteUI.escapeHtml(student)}</span>`).join("")}
        </div>
        ${
          item.authors
            ? `<p class="vr-selected-card__authors"><strong>Authors / 作者：</strong>${SiteUI.escapeHtml(item.authors)}</p>`
            : ""
        }
        ${
          item.summary
            ? `<p class="vr-selected-card__summary">${SiteUI.escapeHtml(item.summary)}</p>`
            : ""
        }
        ${
          item.link
            ? `<a class="inline-link" href="${SiteUI.escapeHtml(item.link)}" target="_blank" rel="noreferrer">Open paper link</a>`
            : ""
        }
      </article>
    `;
  }

  function vrSelectedSummaryItemsMarkup(items) {
    if (!Array.isArray(items) || !items.length) {
      return "";
    }

    return `
      <ul class="vr-selected-summary__list">
        ${items
          .map((item) => {
            if (typeof item === "string") {
              return `<li>${SiteUI.escapeHtml(item)}</li>`;
            }
            const label = SiteUI.escapeHtml(item.label || item.title || "");
            const text = item.text ? SiteUI.escapeHtml(item.text) : "";
            const nested = item.subitems ? vrSelectedSummaryItemsMarkup(item.subitems) : "";
            return `
              <li>
                ${label ? `<strong>${label}</strong>` : ""}
                ${text ? `${label ? "：" : ""}${text}` : ""}
                ${nested}
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
  }

  function vrSelectedSummaryMarkup(selection) {
    if (!selection) {
      return "";
    }

    const hasSections = Array.isArray(selection.summarySections) && selection.summarySections.length;
    const hasTakeaways = Array.isArray(selection.summaryTakeaways) && selection.summaryTakeaways.length;
    if (!selection.summaryLead && !hasSections && !hasTakeaways && !selection.summaryClosing) {
      return "";
    }

    return `
      <div class="vr-reading-overview__summary vr-selected-summary">
        ${
          selection.summaryLead
            ? `<p class="vr-selected-summary__lead">${SiteUI.escapeHtml(selection.summaryLead)}</p>`
            : ""
        }
        ${
          hasSections
            ? `
          <div class="vr-selected-summary__grid">
            ${selection.summarySections
              .map(
                (section) => `
                  <section class="vr-selected-summary__section">
                    <h4>${SiteUI.escapeHtml(section.title || "")}</h4>
                    ${vrSelectedSummaryItemsMarkup(section.items)}
                  </section>
                `
              )
              .join("")}
          </div>`
            : ""
        }
        ${
          hasTakeaways
            ? `
          <section class="vr-selected-summary__takeaways">
            <h4>${SiteUI.escapeHtml(selection.summaryTakeawaysTitle || "研究启示")}</h4>
            ${vrSelectedSummaryItemsMarkup(selection.summaryTakeaways)}
          </section>`
            : ""
        }
        ${
          selection.summaryClosing
            ? `<p class="vr-selected-summary__closing">${SiteUI.escapeHtml(selection.summaryClosing)}</p>`
            : ""
        }
      </div>
    `;
  }

  function vrSelectedReadingMarkup(selection) {
    if (!selection || !Array.isArray(selection.items) || !selection.items.length) {
      return "";
    }

    return `
      <section class="section">
        <div class="shell">
          ${sectionHeading("Student Reading Selections", "2026 Spring")}
          <article class="panel vr-reading-overview">
            <div class="vr-reading-overview__copy">
              <p class="eyebrow">${SiteUI.escapeHtml(selection.label || "Student Selections")}</p>
              <h3>${SiteUI.escapeHtml(selection.title || "")}</h3>
              <p>${SiteUI.escapeHtml(selection.description || "")}</p>
            </div>
            <div class="vr-reading-overview__meta">
              <span>${SiteUI.escapeHtml(selection.curator || "")}</span>
              <span>${SiteUI.escapeHtml(selection.countLabel || "")}</span>
            </div>
            ${vrSelectedSummaryMarkup(selection)}
          </article>
          <div class="vr-selected-grid">
            ${(selection.items || []).map(vrSelectedReadingCardMarkup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderVRShowcase2026Page() {
    const showcase = SiteContent.vrShowcase2026;
    const projects = showcase.projects || [];
    const groups = [];
    const groupByCategory = new Map();

    projects.forEach((project) => {
      const category = project.category || (project.tags && project.tags[0]) || "Uncategorized";
      if (!groupByCategory.has(category)) {
        const group = {
          id: `vr-category-${groups.length + 1}`,
          category,
          projects: []
        };
        groupByCategory.set(category, group);
        groups.push(group);
      }
      groupByCategory.get(category).projects.push(project);
    });

    const preferredCategoryOrder = [
      "文化",
      "文化体验",
      "红色教育",
      "心理恐怖游戏",
      "心理恐怖",
      "微恐RPG游戏",
      "情感叙事",
      "人文关怀",
      "音乐疗愈",
      "治愈疗愈",
      "解谜密室",
      "沉浸式体验",
      "运动游戏",
      "安全教育",
      "教育培训",
      "jrpg",
      "反诈骗",
      "环境保护",
      "游戏化环保教育"
    ];
    const categoryOrderIndex = new Map(preferredCategoryOrder.map((category, index) => [category, index]));
    groups.sort((a, b) => {
      const aOrder = categoryOrderIndex.has(a.category) ? categoryOrderIndex.get(a.category) : Number.MAX_SAFE_INTEGER;
      const bOrder = categoryOrderIndex.has(b.category) ? categoryOrderIndex.get(b.category) : Number.MAX_SAFE_INTEGER;
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
      return a.category.localeCompare(b.category, "zh-Hans-CN");
    });

    const projectCardMarkup = (project, index) => {
      const video = String(project.video || "").trim();
      const poster = String(project.poster || "").trim();
      const tags = project.tags && project.tags.length ? project.tags : [project.category || "VR Project"];
      return `
        <article class="panel vr-project-card">
          <div class="vr-video-frame${video ? "" : " vr-video-frame--empty"}">
            ${
              video
                ? `<button
                    class="vr-video-trigger"
                    type="button"
                    data-video-src="${SiteUI.escapeHtml(videoEmbedSrc(video))}"
                    data-video-title="${SiteUI.escapeHtml(project.title)} video"
                    aria-label="Play video: ${SiteUI.escapeHtml(project.title)}">
                    ${
                      poster
                        ? `<img class="vr-video-poster" src="${SiteUI.escapeHtml(poster)}" alt="" loading="lazy" decoding="async">`
                        : ""
                    }
                    <span class="vr-video-overlay" aria-hidden="true"></span>
                    <span class="vr-video-play" aria-hidden="true"></span>
                    <span class="vr-video-label">Play video</span>
                  </button>`
                : `<div class="vr-video-placeholder">Video link pending</div>`
            }
          </div>
          <div class="vr-project-copy">
            <p class="eyebrow">Project ${String(project.id || index + 1).padStart(2, "0")}</p>
            <h3>${SiteUI.escapeHtml(project.title)}</h3>
            ${project.titleEn ? `<p class="vr-project-title-en">${SiteUI.escapeHtml(project.titleEn)}</p>` : ""}
            <div class="vr-project-tags">
              ${tags.map((tag) => `<span>${SiteUI.escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="vr-author-grid">
              ${(project.authors || []).map((author) => `<span>${SiteUI.escapeHtml(author)}</span>`).join("")}
            </div>
            <p>${SiteUI.escapeHtml(project.description || "")}</p>
            ${
              project.descriptionEn
                ? `<div class="vr-project-english">
                    <p class="vr-project-english__label">English introduction</p>
                    <p>${SiteUI.escapeHtml(project.descriptionEn)}</p>
                  </div>`
                : ""
            }
            ${
              video
                ? `<a class="inline-link" href="${SiteUI.escapeHtml(videoWatchHref(video))}" target="_blank" rel="noreferrer">Open video in a new tab / 在视频网站打开视频</a>`
                : `<span class="inline-link vr-project-link-disabled">Video link pending</span>`
            }
          </div>
        </article>
      `;
    };

    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Virtual Reality Technology",
          title: "2026 Spring VR course project showcase.",
          descriptionHtml: `
            <p>${SiteUI.escapeHtml(showcase.subtitle)}</p>
            <p>${SiteUI.escapeHtml(showcase.description)}</p>
          `,
          actions: [
            { label: "Back To Teaching", href: "./teaching.html", kind: "primary" },
            { label: "Meet The Team", href: "./team.html", kind: "secondary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Projects</p>
            <h3>${SiteUI.escapeHtml(showcase.title)}</h3>
            <p>${projects.length} student demos are grouped into ${groups.length} categories, with team members, tags, short notes, and embedded videos.</p>
          </div>
        `
      )}
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Course Staff", "Instructor & TAs")}
          <div class="vr-staff-grid">
            ${showcase.staff
              .map((person) => {
                const card = `
                  <article class="panel vr-staff-card">
                    <img src="${SiteUI.portraitPreviewSrc({
                      name: `${person.name} ${person.englishName || ""}`.trim(),
                      role: person.role,
                      photo: person.photo,
                      palette: ["#243c5a", "#d8ecff"]
                    })}" alt="${SiteUI.escapeHtml(`${person.name} ${person.englishName || ""}`.trim())}" decoding="async">
                    <span>${SiteUI.escapeHtml(person.role)}</span>
                    <h3>${SiteUI.escapeHtml(person.name)}</h3>
                    <p>${SiteUI.escapeHtml(person.englishName || "")}</p>
                  </article>
                `;
                if (!person.href || person.href === "#") {
                  return card;
                }
                return `<a class="vr-staff-link" href="${person.href}" target="_blank" rel="noreferrer">${card}</a>`;
              })
              .join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          ${sectionHeading("Project Categories", "2026 Spring")}
          <div class="vr-category-pills">
            ${groups
              .map(
                (group) => `<a href="#${group.id}"><span>${SiteUI.escapeHtml(group.category)}</span><strong>${group.projects.length}</strong></a>`
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Project Videos", "Grouped By Category")}
          <div class="vr-project-category-list">
            ${groups
              .map(
                (group, groupIndex) => `
                  <section class="vr-project-category${group.projects.length === 1 ? " vr-project-category--single" : ""}" id="${group.id}">
                    <div class="vr-project-category__head">
                      <div>
                        <p class="eyebrow">Category ${String(groupIndex + 1).padStart(2, "0")}</p>
                        <h3>${SiteUI.escapeHtml(group.category)}</h3>
                      </div>
                      <span>${group.projects.length} project${group.projects.length > 1 ? "s" : ""}</span>
                    </div>
                    <div class="vr-project-grid">
                      ${group.projects.map(projectCardMarkup).join("")}
                    </div>
                  </section>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderVRReadingPage() {
    const showcase = SiteContent.vrShowcase2026;
    const selectedReadings = window.VRReadingContent && window.VRReadingContent.studentSelections2026;
    const readingGuides = window.VRReadingContent
      ? ["chi2025", "chi2024", "uist2025", "uist2024"]
          .map((key) => window.VRReadingContent[key])
          .filter(Boolean)
      : [];
    const totalPapers = readingGuides.reduce((sum, guide) => {
      return (
        sum +
        (guide.sections || []).reduce((sectionSum, section) => {
          return sectionSum + (section.groups || []).reduce((groupSum, group) => groupSum + (group.papers || []).length, 0);
        }, 0)
      );
    }, 0);

    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Virtual Reality Technology",
          title: "2026 Spring VR Academic Reading / 2026春 学术论文阅读",
          descriptionHtml: `
            <p>${SiteUI.escapeHtml(showcase.subtitle)}</p>
            <p>This page first records the final paper selections made by 29 student groups, then collects the broader VR reading references from CHI 2025, CHI 2024, UIST 2025, and UIST 2024 for the Virtual Reality Technology course.</p>
          `,
          actions: [
            { label: "Back To Teaching", href: "./teaching.html", kind: "primary" },
            { label: "Project Showcase", href: "./vr-2026-projects.html", kind: "secondary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Reading Archive</p>
            <h3>VR papers for course-guided reading.</h3>
            <p>This separate page organizes 29 student-group selections on top of ${SiteUI.escapeHtml(String(totalPapers))} papers across four venue-year collections for fast browsing and follow-up reading.</p>
          </div>
        `
      )}
      ${vrSelectedReadingMarkup(selectedReadings)}
      ${vrReadingLibraryMarkup(readingGuides)}
    `;
  }

  function networkingVenueMarkup(venue) {
    return `
      <article class="panel network-venue-card">
        <div class="meta-row">
          <span class="date-pill">${SiteUI.escapeHtml(venue.venue || "")}</span>
          <span>${SiteUI.escapeHtml(String((venue.years || []).length))} links</span>
        </div>
        <h3>${SiteUI.escapeHtml(venue.venue || "")}</h3>
        <div class="network-venue-links">
          ${(venue.years || [])
            .map(
              (item) => `
                <a class="network-venue-link" href="${SiteUI.escapeHtml(item.href || "#")}" target="_blank" rel="noreferrer">
                  <strong>${SiteUI.escapeHtml(item.year || "")}</strong>
                  <span>${SiteUI.escapeHtml(item.label || "Conference Page")}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function networkingVenueSectionMarkup(recommended, seasonLabel) {
    if (!recommended || !Array.isArray(recommended.venues) || !recommended.venues.length) {
      return "";
    }

    return `
      <section class="section">
        <div class="shell">
          ${sectionHeading("Recommended Venue Reading", seasonLabel || "Networking Reading")}
          <article class="panel vr-reading-overview">
            <div class="vr-reading-overview__copy">
              <p class="eyebrow">${SiteUI.escapeHtml(recommended.label || "Recommended Venues")}</p>
              <h3>${SiteUI.escapeHtml(recommended.title || "")}</h3>
              <p>${SiteUI.escapeHtml(recommended.description || "")}</p>
            </div>
            <div class="vr-reading-overview__meta">
              <span>${SiteUI.escapeHtml(recommended.countLabel || "")}</span>
            </div>
          </article>
          <div class="network-venue-grid">
            ${(recommended.venues || []).map(networkingVenueMarkup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function networkingSelectedReadingCardMarkup(item) {
    return `
      <article class="panel vr-selected-card network-selected-card">
        <div class="meta-row">
          ${item.slot ? `<span class="date-pill">${SiteUI.escapeHtml(item.slot)}</span>` : ""}
          ${item.index ? `<span>No. ${SiteUI.escapeHtml(String(item.index).padStart(2, "0"))}</span>` : ""}
          ${item.venue ? `<span>${SiteUI.escapeHtml(item.venue)}</span>` : ""}
        </div>
        <h3>
          ${
            item.link
              ? `<a class="vr-selected-card__title-link" href="${SiteUI.escapeHtml(item.link)}" target="_blank" rel="noreferrer">${SiteUI.escapeHtml(item.title || "")}</a>`
              : SiteUI.escapeHtml(item.title || "")
          }
        </h3>
        ${
          Array.isArray(item.presenters) && item.presenters.length
            ? `
          <div class="vr-selected-card__students">
            ${item.presenters.map((presenter) => `<span>${SiteUI.escapeHtml(presenter)}</span>`).join("")}
          </div>`
            : ""
        }
        ${
          item.authors
            ? `<p class="vr-selected-card__authors"><strong>Authors / 作者：</strong>${SiteUI.escapeHtml(item.authors)}</p>`
            : ""
        }
        ${
          item.summary
            ? `<p class="vr-selected-card__summary">${SiteUI.escapeHtml(item.summary)}</p>`
            : ""
        }
        ${
          item.link
            ? `<a class="inline-link" href="${SiteUI.escapeHtml(item.link)}" target="_blank" rel="noreferrer">Open paper link</a>`
            : ""
        }
      </article>
    `;
  }

  function networkingSelectedReadingMarkup(selection, seasonLabel) {
    if (!selection || !Array.isArray(selection.items) || !selection.items.length) {
      return "";
    }

    return `
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Student Paper Selections", seasonLabel || "Networking Reading")}
          <article class="panel vr-reading-overview">
            <div class="vr-reading-overview__copy">
              <p class="eyebrow">${SiteUI.escapeHtml(selection.label || "Student Selections")}</p>
              <h3>${SiteUI.escapeHtml(selection.title || "")}</h3>
              <p>${SiteUI.escapeHtml(selection.description || "")}</p>
            </div>
            <div class="vr-reading-overview__meta">
              <span>${SiteUI.escapeHtml(selection.countLabel || "")}</span>
            </div>
          </article>
          <div class="vr-selected-grid">
            ${(selection.items || []).map(networkingSelectedReadingCardMarkup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderNetworkingReadingPage(config) {
    const course = SiteContent.courses.find((item) => item.id === "advanced-computer-networks-and-communications");
    const courseZh = course && course.zh ? course.zh : {};
    const store = config.store || {};
    const recommended = store[config.recommendedKey];
    const selected = store[config.selectedKey];
    const selectedCount = selected && Array.isArray(selected.items) ? selected.items.length : 0;

    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Advanced Computer Networks and Communications",
          title: config.title,
          descriptionHtml: `
            <p>${SiteUI.escapeHtml(courseZh.overview || "")}</p>
            <p>${SiteUI.escapeHtml(config.description)}</p>
          `,
          actions: [{ label: "Back To Teaching", href: "./teaching.html", kind: "primary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Reading Archive</p>
            <h3>Networking papers for course-guided reading.</h3>
            <p>${SiteUI.escapeHtml(config.asidePrefix)} ${SiteUI.escapeHtml(String(selectedCount))} student-selected papers with direct venue entry points for NSDI, MobiCom, MobiSys, and SenSys.</p>
          </div>
        `
      )}
      ${networkingVenueSectionMarkup(recommended, config.seasonLabel)}
      ${networkingSelectedReadingMarkup(selected, config.seasonLabel)}
    `;
  }

  function awardSectionMarkup(title, eyebrow, items) {
    return `
      <section class="section">
        <div class="shell">
          ${sectionHeading(title, eyebrow)}
          <div class="card-grid card-grid-2">
            ${items
              .map(
                (item) => `
                  <article class="panel award-card">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.year)}</span>
                      <span>${SiteUI.escapeHtml(item.people)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p class="muted">${SiteUI.escapeHtml(item.org)}</p>
                    <p>${SiteUI.escapeHtml(item.note)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderAwardsPage() {
    const awards = SiteContent.awards;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Awards",
          title: "Recognitions earned by our students and faculty.",
          description:
            "A curated record of student competition results, paper awards, academic honors, and professional service milestones from the XJTU AIRS Lab.",
          actions: [{ label: "Meet Our Team", href: "./team.html", kind: "primary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Recognition Areas</p>
            <h3>Competitions, papers, and honors.</h3>
            <p>Awards are grouped by recognition type and ordered with the newest achievements first.</p>
          </div>
        `
      )}
      ${awardSectionMarkup("Competition Awards", "Competition", awards.competition)}
      ${awardSectionMarkup("Paper and Demo Awards", "Recognition", awards.paperAwards)}
      ${awardSectionMarkup("Honors and Fellowships", "Honors", awards.honors)}
    `;
  }

  function memberCardMarkup(member) {
    const tagName = member.link ? "a" : "article";
    const href = member.link ? ` href="${member.link}" target="_blank" rel="noreferrer"` : "";
    return `
      <${tagName} class="panel member-card"${href}>
        <img class="member-avatar" src="${SiteUI.portraitPreviewSrc(member)}" alt="${SiteUI.escapeHtml(member.photoAlt || member.name)}" loading="lazy" decoding="async">
        <div class="member-copy">
          <h3>${SiteUI.escapeHtml(member.name)}</h3>
          <p class="muted member-role">${SiteUI.escapeHtml(member.role)}</p>
          <p class="member-bio">${SiteUI.escapeHtml(member.bio)}</p>
          ${member.link ? `<span class="inline-link">Open profile</span>` : ""}
        </div>
      </${tagName}>
    `;
  }

  function renderTeamPage() {
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Team",
          title: "People building ubiquitous AI systems together.",
          description: SiteContent.team.intro,
          actions: [{ label: "View Awards", href: "./awards.html", kind: "secondary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Lab Members</p>
            <h3>Meet our researchers and students.</h3>
            <p>You can find all our team members here, including our graduates who remain a cherished part of our history.</p>
          </div>
        `
      )}
      ${SiteContent.team.groups
        .map(
          (group) => `
            <section class="section">
              <div class="shell">
                ${sectionHeading(group.title, "Team")}
                <div class="member-grid">
                  ${group.members.map(memberCardMarkup).join("")}
                </div>
              </div>
            </section>
          `
        )
        .join("")}
    `;
  }

  function renderGalleryPage() {
    const gallery = SiteContent.gallery;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Gallery",
          title: "Research snapshots and life in the lab.",
          description: gallery.intro,
          actions: [
            { label: "Open Notes", href: "./notes.html", kind: "secondary" },
            { label: "Back To About", href: "./index.html", kind: "primary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Gallery</p>
            <h3>Snapshots from research and everyday life.</h3>
            <p>The gallery showcases our group's activities, travel, celebrations, conferences, and informal moments around research life.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Snapshots", "Gallery")}
          <div class="gallery-grid">
            ${gallery.snapshots
              .map(
                (item) => `
                  <article class="panel snapshot-card">
                    <img class="snapshot-image" src="${SiteUI.snapshotPreviewSrc(item)}" alt="${SiteUI.escapeHtml(item.photoAlt || item.title)}" loading="lazy" decoding="async">
                    <div class="snapshot-copy">
                      <div class="meta-row">
                        <span class="date-pill">${SiteUI.escapeHtml(item.tag)}</span>
                        <span>${SiteUI.escapeHtml(item.date)}</span>
                      </div>
                      <h3>${SiteUI.escapeHtml(item.title)}</h3>
                      <p>${SiteUI.escapeHtml(item.caption)}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderPage(page) {
    switch (page) {
      case "publications":
        return renderPublicationsPage();
      case "dataset":
        return renderDatasetPage();
      case "fei-wang":
        return renderFeiWangPage();
      case "course":
        return renderCoursePage();
      case "vr-2026-projects":
        return renderVRShowcase2026Page();
      case "vr-2026-reading":
        return renderVRReadingPage();
      case "networking-2026-reading":
        return renderNetworkingReadingPage({
          store: window.NetworkReadingContent || {},
          recommendedKey: "recommendedVenues2026",
          selectedKey: "studentSelections2026",
          seasonLabel: "2026 Spring",
          title: "2026 Spring Networking Academic Reading / 2026春 高等计算机网络与通信 学术论文阅读",
          description:
            "This page first organizes recommended venue entry points from NSDI, MobiCom, MobiSys, and SenSys, then records the final paper selections made by students in the 2026 Spring Advanced Computer Networks and Communications course.",
          asidePrefix: "This separate page combines"
        });
      case "networking-2025-reading":
        return renderNetworkingReadingPage({
          store: window.NetworkReadingContent2025 || {},
          recommendedKey: "recommendedVenues2025",
          selectedKey: "studentSelections2025",
          seasonLabel: "2025 Spring",
          title: "2025 Spring Networking Academic Reading / 2025春 高等计算机网络与通信 学术论文阅读",
          description:
            "This page first organizes recommended venue entry points from NSDI, MobiCom, MobiSys, and SenSys, then records the final paper selections made by students in the 2025 Spring Advanced Computer Networks and Communications course.",
          asidePrefix: "This separate page combines"
        });
      case "awards":
        return renderAwardsPage();
      case "team":
        return renderTeamPage();
      case "gallery":
        return renderGalleryPage();
      case "notes":
        return renderNotesPage();
      case "about":
      default:
        return renderAboutPage();
    }
  }

  function createProjectVideoIframe(src, title) {
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title || "Project video";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.setAttribute("allowfullscreen", "");
    iframe.allowFullscreen = true;
    return iframe;
  }

  function setupVRProjectVideos(shell) {
    shell.addEventListener("click", (event) => {
      const trigger = event.target.closest(".vr-video-trigger");
      if (!trigger || !shell.contains(trigger)) {
        return;
      }

      const src = trigger.dataset.videoSrc;
      if (!src) {
        return;
      }

      const frame = trigger.closest(".vr-video-frame");
      if (!frame) {
        return;
      }

      const title = trigger.dataset.videoTitle || trigger.getAttribute("aria-label") || "Project video";
      frame.textContent = "";
      frame.classList.add("is-loaded");
      frame.appendChild(createProjectVideoIframe(src, title.replace(/^Play video: /, "")));
    });
  }

  function setupNavToggle(shell) {
    const toggle = shell.querySelector(".nav-toggle");
    const nav = shell.querySelector(".site-nav");
    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  function setupPublicationFilters(shell) {
    const search = shell.querySelector("#publication-search");
    const resultLabel = shell.querySelector("#publication-results");
    const cards = Array.from(shell.querySelectorAll(".publication-card"));
    const filterButtons = Array.from(shell.querySelectorAll(".filter-chip"));
    let activeYear = "all";

    if (!search || !resultLabel || cards.length === 0) {
      return;
    }

    function update() {
      const query = search.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const yearMatch = activeYear === "all" || card.dataset.year === activeYear;
        const textMatch = !query || (card.dataset.text || "").includes(query);
        const visible = yearMatch && textMatch;
        card.hidden = !visible;
        if (visible) {
          visibleCount += 1;
        }
      });

      resultLabel.textContent = `Showing ${visibleCount} paper${visibleCount === 1 ? "" : "s"}.`;
    }

    search.addEventListener("input", update);

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeYear = button.dataset.year || "all";
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        update();
      });
    });

    update();
  }

  function init() {
    const shell = document.querySelector("#site-shell");
    const page = document.body.dataset.page || "about";
    if (!shell || !SiteContent || !SiteUI) {
      return;
    }

    shell.innerHTML = `
      <div class="page-shell">
        ${headerMarkup(page)}
        <main class="page-main">${renderPage(page)}</main>
        ${footerMarkup()}
      </div>
    `;

    setupNavToggle(shell);
    setupVisitCounter();

    if (page === "publications") {
      setupPublicationFilters(shell);
    }

    if (page === "dataset") {
      setupDatasetCards(shell);
    }

    if (page === "vr-2026-projects") {
      setupVRProjectVideos(shell);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

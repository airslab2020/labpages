const fs = require("fs");
const path = require("path");
const vm = require("vm");
const MarkdownIt = require("markdown-it");

const root = path.resolve(__dirname, "..");
const overwrite = process.argv.includes("--overwrite");
const slugArg = process.argv.find((arg) => arg.startsWith("--slug="));
const targetSlug = slugArg ? slugArg.slice("--slug=".length).trim() : "";

function loadBrowserData() {
  const context = {
    window: {},
    console
  };
  context.window = context;
  vm.createContext(context);

  [
    path.join(root, "assets", "js", "data", "site-content.js"),
    path.join(root, "assets", "js", "data", "publications.js")
  ].forEach((file) => {
    const code = fs.readFileSync(file, "utf8");
    vm.runInContext(code, context, { filename: file });
  });

  return context.SiteContent;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function yearFromVenue(venue) {
  const match = String(venue).match(/(20\d{2}|19\d{2})/);
  return match ? Number(match[1]) : null;
}

function publicationTheme(paper) {
  const title = paper.title.toLowerCase();

  if (/quant|compression|4-bit|8-bit|fp8|low-rank|sparse/i.test(title)) {
    return "Compression & Quantization";
  }

  if (/video|stream|longlive|long-rl|radial attention|streamingvlm/i.test(title)) {
    return "Video & Streaming";
  }

  if (/llm|language|context|attention|serving|retrieval/i.test(title)) {
    return "LLM Systems";
  }

  if (/wifi|wi-fi|mmwave|radar|rfid|wireless|radio frequency|imu|wearable|eeg|sensing|ubiquitous|har|respiration|pose|emotion|handwashing|speech enhancement|speech separation/i.test(title)) {
    return "Ubiquitous Sensing";
  }

  if (/multimodal/i.test(title)) {
    return "Multimodal Learning";
  }

  if (/diffusion|image|visual|multimodal|vila|gan/i.test(title)) {
    return "Visual Generation";
  }

  if (/quantum|circuit|qubit/i.test(title)) {
    return "Emerging Hardware";
  }

  return "Efficient AI Systems";
}

function buildSummary(paper, manualNotes) {
  if (manualNotes && manualNotes.summary) {
    return manualNotes.summary;
  }

  return `This page is generated from a local Markdown source file. Replace this summary with the paper's abstract, a project-focused introduction, or your own reading notes whenever you want a richer public archive.`;
}

function buildBullets(paper, manualNotes) {
  if (manualNotes && Array.isArray(manualNotes.bullets) && manualNotes.bullets.length > 0) {
    return manualNotes.bullets;
  }

  return [
    `Research theme: ${publicationTheme(paper)}.`,
    `Published at ${paper.venue}.`,
    "Replace these generated bullets with the paper's actual core contributions and experimental findings."
  ];
}

function toBibAuthors(authors) {
  return String(authors)
    .replace(/\*/g, "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .join(" and ");
}

function parseFrontmatter(source) {
  const normalized = String(source).replace(/\r\n?/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { meta: {}, body: normalized };
  }

  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) {
    return { meta: {}, body: normalized };
  }

  const rawMeta = normalized.slice(4, end).trim();
  const meta = {};

  rawMeta.split("\n").forEach((line) => {
    const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!match) {
      return;
    }
    meta[match[1]] = match[2].trim();
  });

  return { meta, body: normalized.slice(end + 5) };
}

const markdownRenderer = new MarkdownIt({
  html: true,
  linkify: true
});

markdownRenderer.renderer.rules.table_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrJoin("class", "markdown-table");
  return `<div class="markdown-table-wrap">${self.renderToken(tokens, idx, options)}`;
};

markdownRenderer.renderer.rules.table_close = (tokens, idx, options, env, self) => {
  return `${self.renderToken(tokens, idx, options)}</div>`;
};

function markdownToHtml(markdown) {
  return markdownRenderer.render(String(markdown).replace(/\r\n?/g, "\n"));
}

function wrapSvgLines(text, maxLineLength, maxLines) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLineLength && current) {
      lines.push(current);
      current = word;
      return;
    }
    current = next;
  });

  if (current) {
    lines.push(current);
  }

  if (lines.length <= maxLines) {
    return lines;
  }

  const visible = lines.slice(0, maxLines);
  const last = visible[maxLines - 1];
  visible[maxLines - 1] = last.length > maxLineLength - 3 ? `${last.slice(0, maxLineLength - 3)}...` : `${last}...`;
  return visible;
}

function paperCoverSvg(model) {
  const titleLines = wrapSvgLines(model.title, 28, 4);
  const titleMarkup = titleLines
    .map((line, index) => `<tspan x="92" dy="${index === 0 ? 0 : 72}">${escapeXml(line)}</tspan>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 840" role="img" aria-label="${escapeXml(model.title)}">
  <defs>
    <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#183a5b"/>
      <stop offset="48%" stop-color="#476f99"/>
      <stop offset="100%" stop-color="#f0cbd0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="840" rx="44" fill="url(#paperGradient)"/>
  <circle cx="210" cy="176" r="110" fill="rgba(255,255,255,0.16)"/>
  <circle cx="1010" cy="170" r="84" fill="rgba(255,255,255,0.16)"/>
  <path d="M0 640C124 590 218 566 312 566C434 566 532 602 634 624C744 648 850 644 960 614C1042 592 1118 546 1200 520V840H0Z" fill="rgba(255,255,255,0.12)"/>
  <rect x="78" y="474" width="1044" height="270" rx="34" fill="rgba(255,255,255,0.14)"/>
  <text x="92" y="578" font-family="Exo, Arial, sans-serif" font-size="58" font-weight="800" fill="#ffffff">${titleMarkup}</text>
  <text x="92" y="690" font-family="Source Sans 3, Arial, sans-serif" font-size="28" fill="rgba(255,255,255,0.9)">${escapeXml(model.theme)}</text>
  <text x="92" y="730" font-family="Source Sans 3, Arial, sans-serif" font-size="26" fill="rgba(255,255,255,0.72)">${escapeXml(model.venue)}</text>
</svg>
`;
}

function noteCoverSvg(note) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" role="img" aria-label="${escapeXml(note.title)}">
  <defs>
    <linearGradient id="noteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#24486b"/>
      <stop offset="100%" stop-color="#f0cbd0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="760" rx="44" fill="url(#noteGradient)"/>
  <circle cx="210" cy="160" r="104" fill="rgba(255,255,255,0.16)"/>
  <rect x="86" y="440" width="1028" height="220" rx="34" fill="rgba(255,255,255,0.14)"/>
  <text x="102" y="536" font-family="Exo, Arial, sans-serif" font-size="56" font-weight="800" fill="#ffffff">${escapeXml(note.title)}</text>
  <text x="102" y="602" font-family="Source Sans 3, Arial, sans-serif" font-size="30" fill="rgba(255,255,255,0.88)">${escapeXml(note.date || "Lab Note")}</text>
</svg>
`;
}

function navMarkup(siteContent, basePath, sectionLabel) {
  const brandMark = siteContent.site.brandMark || "XJ";
  const items = siteContent.site.nav
    .map((item) => `<a href="${basePath}${item.href.replace("./", "")}">${escapeHtml(item.label)}</a>`)
    .join("");

  return `<header class="${sectionLabel === "note" ? "note-header" : "paper-header"}">
    <div class="${sectionLabel === "note" ? "note-shell note-nav-shell" : "paper-shell paper-nav-shell"}">
      <a class="${sectionLabel === "note" ? "note-brand" : "paper-brand"}" href="${basePath}index.html">
        <span class="${sectionLabel === "note" ? "note-brand-mark" : "paper-brand-mark"}">${escapeHtml(brandMark)}</span>
        <span class="${sectionLabel === "note" ? "note-brand-copy" : "paper-brand-copy"}">
          <strong>${escapeHtml(siteContent.site.title)}</strong>
          <small>${sectionLabel === "note" ? "Notes" : "Publication Detail"}</small>
        </span>
      </a>
      <nav class="${sectionLabel === "note" ? "note-nav" : "paper-nav"}" aria-label="Primary">
        ${items}
      </nav>
    </div>
  </header>`;
}

function buildPaperModel(siteContent, paper, manualNotes) {
  const year = paper.year || yearFromVenue(paper.venue);

  return {
    slug: paper.slug,
    title: paper.title,
    authors: paper.authors,
    venue: paper.venue,
    year,
    theme: publicationTheme(paper),
    institution: (manualNotes && manualNotes.institution) || siteContent.site.title,
    summary: buildSummary(paper, manualNotes),
    bullets: buildBullets(paper, manualNotes),
    citation:
      (manualNotes && manualNotes.citation) ||
      `@inproceedings{${paper.slug},\n  title = {${paper.title}},\n  author = {${toBibAuthors(paper.authors)}},\n  booktitle = {${paper.venue}},\n  year = {${year || ""}}\n}`,
    projectUrl: manualNotes && manualNotes.projectUrl ? manualNotes.projectUrl : "",
    codeUrl: manualNotes && manualNotes.codeUrl ? manualNotes.codeUrl : "",
    paperUrl: manualNotes && manualNotes.paperUrl ? manualNotes.paperUrl : "",
    slidesUrl: manualNotes && manualNotes.slidesUrl ? manualNotes.slidesUrl : "",
    videoUrl: manualNotes && manualNotes.videoUrl ? manualNotes.videoUrl : ""
  };
}

function defaultPaperMarkdown(model) {
  const projectLine = model.projectUrl ? `project: ${model.projectUrl}\n` : "";
  const codeLine = model.codeUrl ? `code: ${model.codeUrl}\n` : "";
  const paperLine = model.paperUrl ? `paper: ${model.paperUrl}\n` : "";
  const slidesLine = model.slidesUrl ? `slides: ${model.slidesUrl}\n` : "";
  const videoLine = model.videoUrl ? `video: ${model.videoUrl}\n` : "";

  return `---
title: ${model.title}
authors: ${model.authors}
institution: ${model.institution}
summary: ${model.summary}
cover: ./assets/cover.svg
coverAlt: Cover image for ${model.title}
eyebrow: Publication
${projectLine}${codeLine}${paperLine}${slidesLine}${videoLine}---

# Overview

${model.summary}

## Main Contributions

${model.bullets.map((item) => `- ${item}`).join("\n")}

## Technical Details

Use this section for the main method, system design, architecture, training or serving strategy, and the details that make the work distinctive.

## Results

Summarize the headline findings, qualitative outcomes, ablations, or deployment lessons here.

## Resources

- [Cover image](./assets/cover.svg)
- Add figures, PDFs, posters, or demos to the local \`./assets/\` folder when they are ready.

## Citation

\`\`\`bibtex
${model.citation}
\`\`\`
`;
}

function paperButtonMarkup(label, href) {
  if (!href || href === "#") {
    return "";
  }
  return `<a class="paper-link-chip" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}

function paperPageHtml(siteContent, model, meta, articleHtml) {
  const title = meta.title || model.title;
  const authors = meta.authors || model.authors;
  const institution = meta.institution || model.institution;
  const summary = meta.summary || model.summary;
  const cover = meta.cover || "./assets/cover.svg";
  const coverAlt = meta.coverAlt || `${title} cover`;
  const eyebrow = meta.eyebrow || "Publication";
  const projectUrl = meta.project || model.projectUrl;
  const codeUrl = meta.code || model.codeUrl;
  const paperUrl = meta.paper || model.paperUrl;
  const cvprUrl = meta.cvpr || "";
  const tpamiUrl = meta.tpami || "";
  const slidesUrl = meta.slides || model.slidesUrl;
  const videoUrl = meta.video || model.videoUrl;
  const theme = meta.theme || model.theme;
  const paperLinks = [
    `<a class="paper-link-chip" href="../../publications.html">Back to publications</a>`,
    paperButtonMarkup("Project page", projectUrl),
    paperButtonMarkup("Code", codeUrl),
    paperButtonMarkup("Paper", paperUrl),
    paperButtonMarkup("CVPR version", cvprUrl),
    paperButtonMarkup("TPAMI version", tpamiUrl),
    paperButtonMarkup("Slides", slidesUrl),
    paperButtonMarkup("Video", videoUrl)
  ].filter(Boolean).join("\n            ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} - ${escapeHtml(siteContent.site.title)}</title>
  <meta name="description" content="${escapeHtml(summary)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/paper-page.css">
</head>
<body>
  ${navMarkup(siteContent, "../../", "paper")}
  <main class="paper-main">
    <section class="paper-hero">
      <div class="paper-shell paper-hero-grid">
        <div class="paper-hero-copy">
          <p class="paper-eyebrow">${escapeHtml(eyebrow)}</p>
          <h1>${escapeHtml(title)}</h1>
          <p class="paper-subtitle">${escapeHtml(authors)}</p>
          <div class="paper-meta-row">
            <span class="paper-pill">${escapeHtml(model.venue)}</span>
            <span class="paper-pill">${escapeHtml(String(model.year || ""))}</span>
            <span class="paper-pill">${escapeHtml(theme)}</span>
            <span class="paper-pill">${escapeHtml(institution)}</span>
          </div>
          <p class="paper-summary">${escapeHtml(summary)}</p>
          <div class="paper-link-row">
            ${paperLinks}
          </div>
        </div>
        <aside class="paper-hero-side">
          <div class="paper-panel paper-figure-card">
            <p class="paper-eyebrow">Cover / Teaser</p>
            <img src="${escapeHtml(cover)}" alt="${escapeHtml(coverAlt)}">
          </div>
          <aside class="paper-panel paper-side-note">
            <p class="paper-eyebrow">Affiliation</p>
            <p>${escapeHtml(institution)}</p>
          </aside>
        </aside>
      </div>
    </section>

    <section class="paper-section">
      <div class="paper-shell">
        <div class="paper-metric-grid">
          <article class="paper-panel paper-metric-card">
            <strong>Venue</strong>
            <p>${escapeHtml(model.venue)}</p>
          </article>
          <article class="paper-panel paper-metric-card">
            <strong>Theme</strong>
            <p>${escapeHtml(theme)}</p>
          </article>
          <article class="paper-panel paper-metric-card">
            <strong>Institution</strong>
            <p>${escapeHtml(institution)}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="paper-section">
      <div class="paper-shell">
        <article class="paper-panel paper-article">
          ${articleHtml}
        </article>
      </div>
    </section>
  </main>
</body>
</html>
`;
}

function defaultNoteMarkdown(note) {
  return `---
title: ${note.title}
date: ${note.date}
summary: ${note.text}
cover: ./assets/cover.svg
coverAlt: Cover image for ${note.title}
eyebrow: Lab Note
---

# ${note.title}

${note.text}

## What happened

Use this note to record a fuller story, a research insight, a group event, or a behind-the-scenes engineering lesson.

## Add images or downloads

![Cover image](./assets/cover.svg)

- Add extra figures to \`./assets/\`
- Link posters, slides, or PDFs with regular Markdown links
- Keep the note readable as a standalone long-form page
`;
}

function notePageHtml(siteContent, note, meta, articleHtml) {
  const title = meta.title || note.title;
  const summary = meta.summary || note.text;
  const date = meta.date || note.date;
  const cover = meta.cover || "./assets/cover.svg";
  const coverAlt = meta.coverAlt || title;
  const eyebrow = meta.eyebrow || "Lab Note";
  const bodyClass = meta.bodyClass ? ` class="${escapeHtml(meta.bodyClass)}"` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} - ${escapeHtml(siteContent.site.title)}</title>
  <meta name="description" content="${escapeHtml(summary)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/note-page.css">
  <script defer src="../../assets/js/note-page.js"></script>
</head>
<body${bodyClass}>
  ${navMarkup(siteContent, "../../", "note")}
  <main class="note-main">
    <section class="note-hero">
      <div class="note-shell note-hero-grid">
        <div class="note-hero-copy">
          <p class="note-eyebrow">${escapeHtml(eyebrow)}</p>
          <h1>${escapeHtml(title)}</h1>
          <div class="note-meta-row">
            <span class="note-pill">${escapeHtml(date)}</span>
            <span class="note-pill">${escapeHtml(note.slug)}</span>
          </div>
          <p class="note-summary">${escapeHtml(summary)}</p>
          <div class="note-link-row">
            <a class="note-link-chip" href="../../notes.html">Back to notes</a>
            <a class="note-link-chip" href="../../index.html">Back to about</a>
          </div>
        </div>
        <aside class="note-panel note-cover-panel">
          <img src="${escapeHtml(cover)}" alt="${escapeHtml(coverAlt)}">
        </aside>
      </div>
    </section>

    <section class="note-section">
      <div class="note-shell">
        <article class="note-panel note-article">
          ${articleHtml}
        </article>
      </div>
    </section>
  </main>
</body>
</html>
`;
}

function generatePaperFiles(siteContent) {
  const papersDir = path.join(root, "papers");
  ensureDir(papersDir);

  let htmlWritten = 0;
  let markdownWritten = 0;
  let assetsCreated = 0;

  const papers = targetSlug
    ? siteContent.publications.filter((paper) => paper.slug === targetSlug)
    : siteContent.publications;

  if (targetSlug && papers.length === 0) {
    throw new Error(`Publication slug not found: ${targetSlug}`);
  }

  papers.forEach((paper) => {
    const manualNotes = siteContent.publicationManualNotes[paper.slug];
    const model = buildPaperModel(siteContent, paper, manualNotes);
    const dir = path.join(papersDir, paper.slug);
    const assetsDir = path.join(dir, "assets");
    const coverFile = path.join(assetsDir, "cover.svg");
    const markdownFile = path.join(dir, "index.md");
    const htmlFile = path.join(dir, "index.html");

    ensureDir(dir);
    ensureDir(assetsDir);

    if (!fs.existsSync(coverFile) || overwrite) {
      fs.writeFileSync(coverFile, paperCoverSvg(model), "utf8");
      assetsCreated += 1;
    }

    if (!fs.existsSync(markdownFile) || overwrite) {
      fs.writeFileSync(markdownFile, defaultPaperMarkdown(model), "utf8");
      markdownWritten += 1;
    }

    const source = fs.readFileSync(markdownFile, "utf8");
    const { meta, body } = parseFrontmatter(source);
    fs.writeFileSync(htmlFile, paperPageHtml(siteContent, model, meta, markdownToHtml(body)), "utf8");
    htmlWritten += 1;
  });

  return { htmlWritten, markdownWritten, assetsCreated };
}

function generateNoteFiles(siteContent) {
  const notesDir = path.join(root, "notes");
  ensureDir(notesDir);

  let htmlWritten = 0;
  let markdownWritten = 0;
  let assetsCreated = 0;

  const notes = siteContent.notes && Array.isArray(siteContent.notes.items) ? siteContent.notes.items : [];

  notes.forEach((note) => {
    const dir = path.join(notesDir, note.slug);
    const assetsDir = path.join(dir, "assets");
    const coverFile = path.join(assetsDir, "cover.svg");
    const markdownFile = path.join(dir, "index.md");
    const htmlFile = path.join(dir, "index.html");

    ensureDir(dir);
    ensureDir(assetsDir);

    if (!fs.existsSync(coverFile) || overwrite) {
      fs.writeFileSync(coverFile, noteCoverSvg(note), "utf8");
      assetsCreated += 1;
    }

    if (!fs.existsSync(markdownFile) || overwrite) {
      fs.writeFileSync(markdownFile, defaultNoteMarkdown(note), "utf8");
      markdownWritten += 1;
    }

    const source = fs.readFileSync(markdownFile, "utf8");
    const { meta, body } = parseFrontmatter(source);
    fs.writeFileSync(htmlFile, notePageHtml(siteContent, note, meta, markdownToHtml(body)), "utf8");
    htmlWritten += 1;
  });

  return { htmlWritten, markdownWritten, assetsCreated };
}

function generate() {
  const siteContent = loadBrowserData();
  const paperResult = generatePaperFiles(siteContent);
  const noteResult = targetSlug
    ? { htmlWritten: 0, markdownWritten: 0, assetsCreated: 0 }
    : generateNoteFiles(siteContent);

  console.log(`Paper HTML pages written: ${paperResult.htmlWritten}`);
  console.log(`Paper Markdown sources written: ${paperResult.markdownWritten}`);
  console.log(`Paper cover assets created: ${paperResult.assetsCreated}`);
  console.log(`Note HTML pages written: ${noteResult.htmlWritten}`);
  console.log(`Note Markdown sources written: ${noteResult.markdownWritten}`);
  console.log(`Note cover assets created: ${noteResult.assetsCreated}`);
}

generate();

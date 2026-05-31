(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function getInitials(name) {
    return String(name)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  function svgToDataUri(svg) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function preferredImage(item, keys, fallback) {
    if (item && Array.isArray(keys)) {
      for (const key of keys) {
        const value = item[key];
        if (typeof value === "string" && value.trim()) {
          return value;
        }
      }
    }
    return fallback(item);
  }

  function createAvatarData(person) {
    const palette = person.palette || ["#29406a", "#d8e5ff"];
    const initials = getInitials(person.name);
    const role = person.role || "";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" role="img" aria-label="${escapeHtml(person.name)}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${palette[0]}"/>
            <stop offset="100%" stop-color="${palette[1]}"/>
          </linearGradient>
        </defs>
        <rect width="600" height="720" rx="42" fill="url(#grad)"/>
        <circle cx="300" cy="250" r="118" fill="rgba(255,255,255,0.18)"/>
        <circle cx="300" cy="205" r="78" fill="rgba(255,255,255,0.86)"/>
        <path d="M170 458c28-80 90-122 130-122 51 0 105 37 130 122v84H170z" fill="rgba(255,255,255,0.86)"/>
        <text x="300" y="628" text-anchor="middle" font-family="Exo,Arial,sans-serif" font-size="92" font-weight="800" fill="rgba(255,255,255,0.92)">${escapeHtml(initials)}</text>
        <text x="300" y="680" text-anchor="middle" font-family="Source Sans 3,Arial,sans-serif" font-size="26" fill="rgba(255,255,255,0.82)">${escapeHtml(role)}</text>
      </svg>
    `;
    return svgToDataUri(svg);
  }

  function createSnapshotData(item) {
    const palette = item.palette || ["#29406a", "#d8e5ff"];
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 860" role="img" aria-label="${escapeHtml(item.title)}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${palette[0]}"/>
            <stop offset="100%" stop-color="${palette[1]}"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="860" rx="56" fill="url(#grad)"/>
        <circle cx="230" cy="180" r="110" fill="rgba(255,255,255,0.18)"/>
        <circle cx="960" cy="160" r="74" fill="rgba(255,255,255,0.2)"/>
        <circle cx="990" cy="650" r="126" fill="rgba(255,255,255,0.14)"/>
        <rect x="84" y="506" width="1032" height="238" rx="34" fill="rgba(255,255,255,0.14)"/>
        <text x="92" y="600" font-family="Exo,Arial,sans-serif" font-size="66" font-weight="800" fill="#ffffff">${escapeHtml(item.title)}</text>
        <text x="92" y="652" font-family="Source Sans 3,Arial,sans-serif" font-size="32" fill="rgba(255,255,255,0.88)">${escapeHtml(item.tag || "")}</text>
      </svg>
    `;
    return svgToDataUri(svg);
  }

  function portraitSrc(person) {
    return preferredImage(person, ["photo", "image", "avatar"], createAvatarData);
  }

  function snapshotSrc(item) {
    return preferredImage(item, ["photo", "image"], createSnapshotData);
  }

  function optimizedMediaSrc(src, mediaFolder) {
    if (typeof src !== "string") {
      return src;
    }
    const folder = mediaFolder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(/assets/media/${folder}/)([^/]+)\\.(jpe?g|png)$`, "i");
    return src.replace(pattern, "$1optimized/$2.jpg");
  }

  function portraitPreviewSrc(person) {
    return preferredImage(
      person,
      ["thumbnail", "thumb", "preview"],
      () => optimizedMediaSrc(portraitSrc(person), "people")
    );
  }

  function galleryPreviewSrc(src) {
    return src.replace(
      /(\/assets\/media\/gallery\/)([^/]+)\.(jpe?g|png)$/i,
      "$1optimized/$2.jpg"
    );
  }

  function snapshotPreviewSrc(item) {
    return preferredImage(
      item,
      ["thumbnail", "thumb", "preview"],
      () => galleryPreviewSrc(snapshotSrc(item))
    );
  }

  function titleCardSrc(section, slug) {
    return `./assets/media/title-covers/${section}/${slug}.svg`;
  }

  function datasetCardCoverSrc(item) {
    return preferredImage(item, ["cardCover"], () =>
      titleCardSrc("datasets", item.slug)
    );
  }

  function noteCardCoverSrc(item) {
    return preferredImage(item, ["cardCover", "cover"], () =>
      titleCardSrc("notes", item.slug)
    );
  }

  function groupBy(items, getKey) {
    return items.reduce((acc, item) => {
      const key = getKey(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }

  function publicationTheme(paper) {
    if (paper.theme) {
      return {
        label: paper.theme,
        overview:
          "This work belongs to a more specific research thread within the lab's publication portfolio."
      };
    }

    const title = paper.title.toLowerCase();
    if (/quant|compression|4-bit|8-bit|fp8|low-rank|sparse/i.test(title)) {
      return {
        label: "Compression & Quantization",
        overview:
          "This work sits in the lab's efficiency track on reducing memory, bandwidth, and arithmetic cost through compression-aware model design."
      };
    }
    if (/video|stream|longlive|long-rl|radial attention|streamingvlm/i.test(title)) {
      return {
        label: "Video & Streaming",
        overview:
          "This paper targets long-horizon video generation or understanding, where temporal consistency and memory usage are the dominant challenges."
      };
    }
    if (/llm|language|context|attention|serving|retrieval/i.test(title)) {
      return {
        label: "LLM Systems",
        overview:
          "This work addresses the systems and modeling bottlenecks behind large language model training or inference."
      };
    }
    if (/wifi|wi-fi|mmwave|radar|rfid|wireless|radio frequency|imu|wearable|eeg|sensing|ubiquitous|har|respiration|pose|emotion|handwashing|speech enhancement|speech separation/i.test(title)) {
      return {
        label: "Ubiquitous Sensing",
        overview:
          "This paper studies AI systems for sensing people, activities, or environments from wireless signals, wearables, or other ubiquitous-computing data sources."
      };
    }
    if (/multimodal/i.test(title)) {
      return {
        label: "Multimodal Learning",
        overview:
          "This work focuses on how multiple sensing or data modalities can be aligned, fused, or made robust under real-world missingness and noise."
      };
    }
    if (/diffusion|image|visual|multimodal|vila|gan/i.test(title)) {
      return {
        label: "Visual Generation",
        overview:
          "This paper contributes to efficient image, video, or multimodal generation, with an emphasis on practical deployment cost."
      };
    }
    if (/quantum|circuit|qubit/i.test(title)) {
      return {
        label: "Emerging Hardware",
        overview:
          "This work explores compiler, circuit, or systems questions for emerging hardware and quantum workloads."
      };
    }
    return {
      label: "Efficient AI Systems",
      overview:
        "This publication belongs to the lab's broader effort to connect algorithmic ideas with deployable systems results."
    };
  }

  function buildPublicationSummary(paper, manualNotes) {
    if (manualNotes && manualNotes.summary) {
      return manualNotes.summary;
    }

    const theme = publicationTheme(paper);
    return `${theme.overview} Based on the title and venue, this paper likely focuses on a concrete efficiency bottleneck and proposes a method that improves throughput, memory use, or deployability without giving up the model behavior that matters in practice. Replace this generated summary with the paper's abstract whenever you want a richer local archive.`;
  }

  function buildPublicationBullets(paper, manualNotes) {
    if (manualNotes && Array.isArray(manualNotes.bullets)) {
      return manualNotes.bullets;
    }

    const theme = publicationTheme(paper);
    return [
      `Research theme: ${theme.label}.`,
      `Venue context: presented at ${paper.venue}.`,
      "Editable placeholder summary: swap in the real abstract, project URL, or code link when available."
    ];
  }

  function uniqueYears(publications) {
    return Array.from(
      new Set(publications.map((paper) => paper.year).filter((value) => Number.isFinite(value)))
    ).sort((a, b) => b - a);
  }

  window.SiteUI = {
    escapeHtml,
    slugify,
    getInitials,
    createAvatarData,
    createSnapshotData,
    portraitSrc,
    portraitPreviewSrc,
    snapshotSrc,
    snapshotPreviewSrc,
    datasetCardCoverSrc,
    noteCardCoverSrc,
    groupBy,
    publicationTheme,
    buildPublicationSummary,
    buildPublicationBullets,
    uniqueYears
  };
})();

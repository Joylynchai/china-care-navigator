import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd());
const reportsDir = path.join(root, "reports");
const docsDir = path.join(root, "docs");

const reports = [
  {
    source: "business-plan.md",
    output: "business-plan.html",
    label: "商业计划书",
    deck: "../downloads/chinacare-navigator-bp.pptx",
    summary: "市场定位、产品体系、商业模式、合规边界和 90 天验证计划。",
  },
  {
    source: "financial-model.md",
    output: "financial-model.html",
    label: "财务模型",
    deck: "../downloads/chinacare-navigator-bp.pptx",
    summary: "产品单价、成本结构、单单经济、盈亏平衡和 12 个月预测。",
  },
  {
    source: "operations-sop.md",
    output: "operations-sop.html",
    label: "运营 SOP",
    deck: "../downloads/chinacare-navigator-bp.pptx",
    summary: "客户流程、病历处理、医院协调、陪诊、保险文件和纠纷处理。",
  },
  {
    source: "competitor-research-report.md",
    output: "competitor-research-report.html",
    label: "竞品调研报告",
    deck: "../downloads/chinacare-navigator-bp.pptx",
    summary: "中国直接竞品、官方区域平台、全球医疗旅游平台和竞争策略。",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replaceAll(/`([^`]+)`/g, "<code>$1</code>");
}

function tableToHtml(lines) {
  const rows = lines
    .filter((line) => !/^\|\s*-+/.test(line))
    .map((line) => line.trim().slice(1, -1).split("|").map((cell) => inlineMarkdown(cell.trim())));
  const [head, ...body] = rows;
  return [
    "<div class=\"report-table-wrap\"><table>",
    "<thead><tr>",
    ...head.map((cell) => `<th>${cell}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`),
    "</tbody></table></div>",
  ].join("");
}

function markdownToHtml(markdown) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];
  let table = [];
  let quote = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      list = [];
    }
  };
  const flushTable = () => {
    if (table.length) {
      html.push(tableToHtml(table));
      table = [];
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      html.push(`<blockquote>${quote.map((line) => `<p>${inlineMarkdown(line)}</p>`).join("")}</blockquote>`);
      quote = [];
    }
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushTable();
    flushQuote();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushAll();
      continue;
    }
    if (line.startsWith("|") && line.endsWith("|")) {
      flushParagraph();
      flushList();
      flushQuote();
      table.push(line);
      continue;
    }
    if (line.startsWith(">")) {
      flushParagraph();
      flushList();
      flushTable();
      quote.push(line.replace(/^>\s?/, ""));
      continue;
    }
    if (/^#{1,4}\s+/.test(line)) {
      flushAll();
      const level = Math.min((line.match(/^#+/)?.[0].length || 2) + 1, 5);
      const text = line.replace(/^#{1,4}\s+/, "");
      html.push(`<h${level}>${inlineMarkdown(text)}</h${level}>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      flushTable();
      flushQuote();
      list.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      flushTable();
      flushQuote();
      list.push(line.replace(/^\d+\.\s+/, ""));
      continue;
    }
    flushList();
    flushTable();
    flushQuote();
    paragraph.push(line);
  }
  flushAll();
  return html.join("\n");
}

function pageTemplate({ title, summary, body, deck }) {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} | ChinaCare Navigator</title>
    <meta name="description" content="${escapeHtml(summary)}">
    <link rel="stylesheet" href="../styles.css">
  </head>
  <body class="report-page">
    <header class="site-header" data-elevated="false">
      <a class="brand" href="../index.html" aria-label="ChinaCare Navigator home">
        <span class="brand-mark" aria-hidden="true">C</span>
        <span><strong>ChinaCare</strong><small>Navigator</small></span>
      </a>
      <nav class="nav-links" aria-label="Report navigation">
        <a href="index.html">Reports</a>
        <a href="../pages/partners.html">Partners</a>
        <a href="../index.html">Website</a>
      </nav>
      <a class="header-cta" href="${deck}" download>
        <span>下载 PPT</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
      </a>
    </header>
    <main class="report-layout">
      <aside class="report-rail">
        <p class="eyebrow">Report</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(summary)}</p>
        <a class="button primary report-download" href="${deck}" download>
          <span>下载 BP PPTX</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
        </a>
      </aside>
      <article class="report-content">
        ${body}
      </article>
    </main>
    <script src="../script.js"></script>
  </body>
</html>`;
}

function indexTemplate() {
  const cards = reports.map((report) => `
        <article class="report-card">
          <p class="market-kicker">HTML Report</p>
          <h3>${escapeHtml(report.label)}</h3>
          <p>${escapeHtml(report.summary)}</p>
          <a class="text-link" href="${report.output}">查看 HTML</a>
        </article>`).join("");
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reports | ChinaCare Navigator</title>
    <meta name="description" content="ChinaCare Navigator 商业计划书、财务模型、运营 SOP 和竞品调研报告。">
    <link rel="stylesheet" href="../styles.css">
  </head>
  <body class="landing-page">
    <header class="site-header" data-elevated="false">
      <a class="brand" href="../index.html" aria-label="ChinaCare Navigator home">
        <span class="brand-mark" aria-hidden="true">C</span>
        <span><strong>ChinaCare</strong><small>Navigator</small></span>
      </a>
      <nav class="nav-links" aria-label="Reports navigation">
        <a href="../index.html">Website</a>
        <a href="../pages/partners.html">Partners</a>
        <a href="../pages/privacy.html">Privacy</a>
      </nav>
      <a class="header-cta" href="../downloads/chinacare-navigator-bp.pptx" download>
        <span>下载 PPT</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
      </a>
    </header>
    <main>
      <section class="landing-section report-index-hero">
        <p class="eyebrow">Planning package</p>
        <h1>ChinaCare Navigator 项目报告中心</h1>
        <p>商业计划书、财务模型、运营 SOP 和竞品调研报告已经转换为 HTML 页面，并提供 BP PPTX 下载。</p>
        <div class="hero-actions">
          <a class="button primary" href="../downloads/chinacare-navigator-bp.pptx" download>
            <span>下载 BP PPTX</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
          </a>
          <a class="button secondary" href="../index.html">返回官网</a>
        </div>
      </section>
      <section class="landing-section band">
        <div class="report-card-grid">
${cards}
        </div>
      </section>
    </main>
    <script src="../script.js"></script>
  </body>
</html>`;
}

await fs.mkdir(reportsDir, { recursive: true });
for (const report of reports) {
  const markdown = await fs.readFile(path.join(docsDir, report.source), "utf8");
  const body = markdownToHtml(markdown);
  await fs.writeFile(
    path.join(reportsDir, report.output),
    pageTemplate({ title: report.label, summary: report.summary, body, deck: report.deck }),
    "utf8",
  );
}
await fs.writeFile(path.join(reportsDir, "index.html"), indexTemplate(), "utf8");
console.log(`Generated ${reports.length + 1} report HTML files in ${reportsDir}`);

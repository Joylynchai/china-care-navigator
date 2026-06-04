import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const skillDir = "C:/Users/joyly/.codex/plugins/cache/openai-primary-runtime/presentations/26.601.10930/skills/presentations";
const nodeBin = "C:/Users/joyly/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe";
const workspace = path.join(root, "outputs", "manual-chinacare-bp", "presentations", "bp-summary");
const slidesDir = path.join(workspace, "slides");
const previewDir = path.join(workspace, "preview");
const layoutDir = path.join(workspace, "layout");
const downloadsDir = path.join(root, "downloads");
const finalPptx = path.join(downloadsDir, "chinacare-navigator-bp.pptx");

const slides = [
  {
    kicker: "THESIS",
    title: "ChinaCare Navigator turns China healthcare access into a navigable product.",
    body: "A multilingual operating layer for international patients: medical file preparation, translation, appointment coordination, interpreter support, and insurance-ready documentation.",
    proof: ["Non-medical coordination", "AI-assisted operations", "Human-reviewed handoff", "Patient-paid service fees"],
    style: "cover",
  },
  {
    kicker: "PROBLEM",
    title: "International patients do not lack hospitals; they lack a trusted operating path.",
    body: "The hard parts are records, language, appointment rules, payments, insurance documents, and on-site navigation.",
    proof: ["Where to go?", "What records are needed?", "Who translates?", "What will insurance accept?"],
    style: "question",
  },
  {
    kicker: "SOLUTION",
    title: "Start with files and coordination, not diagnosis.",
    body: "The platform packages fragmented steps into standard services while keeping clinical decisions inside licensed medical institutions.",
    proof: ["Medical File Pack", "Specialist Visit", "Checkup Starter", "Full Visit Companion"],
    style: "flow",
  },
  {
    kicker: "MARKET LANES",
    title: "Cold start through focused language and travel corridors.",
    body: "The launch plan avoids vague global expansion and tests four concrete customer lanes.",
    proof: ["Russian-speaking patients", "English-speaking executives", "Gulf VIP visits", "Korea short-trip add-ons"],
    style: "lanes",
  },
  {
    kicker: "PRODUCT",
    title: "The highest-margin wedge is documentation before travel.",
    body: "Medical File Pack and Insurance Pack create early paid conversion before heavy appointment or visit-companion work begins.",
    proof: ["USD 199+ File Pack", "USD 399+ Specialist Visit", "USD 499+ Checkup Starter", "USD 1,500+ Companion"],
    style: "pricing",
  },
  {
    kicker: "OPERATIONS",
    title: "AI lowers cost, but humans protect quality and compliance.",
    body: "AI handles OCR, summaries, terminology drafts, missing-document checks, quote drafts, and insurance checklists; reviewers approve client and hospital handoffs.",
    proof: ["AI prepares", "L1 coordinates", "L2 reviews", "L3 doctor/hospital escalates"],
    style: "system",
  },
  {
    kicker: "ECONOMICS",
    title: "Profitability depends on standard files, not unlimited concierge labor.",
    body: "Full visit-companion service can be profitable at high ticket sizes, but the repeatable margin engine is file preparation, insurance documents, and standardized checkups.",
    proof: ["Medical File Pack: ~69% gross margin", "Checkup Starter: ~54%", "Full Companion: 26%-46%", "Break-even: ~40-116 orders/month"],
    style: "finance",
  },
  {
    kicker: "COMPETITION",
    title: "The market is proven but fragmented in China.",
    body: "SinoHealth, MediLink, Orient Health, ChinaTravelMed and Lecheng each cover part of the value chain; global models prove the category at scale.",
    proof: ["SinoHealth: high-end Shanghai concierge", "MediLink: transparent pricing", "Vaidam: case manager model", "Bookimed/PlacidWay: marketplace logic"],
    style: "matrix",
  },
  {
    kicker: "90-DAY PLAN",
    title: "Validate willingness to pay before scaling hospital network depth.",
    body: "The first milestone is not traffic. It is paid file preparation, successful appointments, and clean hospital-arrival handoffs.",
    proof: ["100-200 qualified inquiries", "20-40 paid customers", "5-10 hospital visits", "2-3 B2B leads"],
    style: "roadmap",
  },
  {
    kicker: "NEXT STEP",
    title: "Build a paid pilot around three landing pages and five reliable providers.",
    body: "Use the site, reports, and SOP to sign supply, run targeted tests, and turn the first cases into operating data.",
    proof: ["Sign 5-8 providers", "Recruit translator pool", "Launch paid tests", "Review unit economics"],
    style: "close",
  },
];

function esc(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
}

function slideModule(slide, index) {
  const fn = `slide${String(index + 1).padStart(2, "0")}`;
  const proof = JSON.stringify(slide.proof);
  return `export async function ${fn}(presentation, ctx) {
  const slide = presentation.slides.add();
  const ink = "#11212d";
  const muted = "#5e6d78";
  const soft = "#eef5f5";
  const teal = "#1f8a86";
  const navy = "#18364a";
  const gold = "#b58b2d";
  const coral = "#c85f50";
  const line = "#d9e3e3";
  const proof = ${proof};
  const text = (t, x, y, w, h, size, color = ink, bold = false) => ctx.addText(slide, {
    text: t, x, y, w, h, fontSize: size, color, bold, typeface: bold ? ctx.fonts.title : ctx.fonts.body,
    insets: { left: 0, right: 0, top: 0, bottom: 0 }
  });
  const boxText = (t, x, y, w, h, size, fill = "#ffffff", color = ink, bold = false) => ctx.addText(slide, {
    text: t, x, y, w, h, fontSize: size, color, bold, fill,
    line: { style: "solid", fill: line, width: 1 },
    insets: { left: 18, right: 18, top: 14, bottom: 14 }
  });
  ctx.addShape(slide, { x: 0, y: 0, w: 1280, h: 720, fill: "${slide.style === "cover" || slide.style === "close" ? "#11212d" : "#fbfdfd"}" });
  ${slide.style === "cover" ? `
  ctx.addShape(slide, { x: 760, y: 0, w: 520, h: 720, fill: "#1f8a86" });
  ctx.addShape(slide, { x: 820, y: 80, w: 320, h: 320, fill: "#ffffff22", line: { style: "solid", fill: "#ffffff33", width: 1 } });
  text("CHINACARE NAVIGATOR", 70, 54, 420, 28, 16, "#9bd5d0", true);
  text(\`${esc(slide.title)}\`, 70, 150, 710, 210, 50, "#ffffff", true);
  text(\`${esc(slide.body)}\`, 74, 384, 620, 92, 22, "#dce8e7");
  proof.forEach((p, i) => boxText(p, 72 + i * 270, 560, 238, 70, 17, "#ffffff12", "#ffffff", true));
  ` : slide.style === "close" ? "" : `
  ctx.addShape(slide, { x: 0, y: 0, w: 1280, h: 12, fill: teal });
  text("${esc(slide.kicker)}", 64, 48, 250, 24, 14, teal, true);
  text(\`${esc(slide.title)}\`, 64, 86, 840, 110, 38, ink, true);
  text(\`${esc(slide.body)}\`, 68, 202, 720, 70, 20, muted);
  `}
  ${slide.style === "question" ? `
  proof.forEach((p, i) => boxText(p, 72 + (i % 2) * 560, 344 + Math.floor(i / 2) * 128, 500, 88, 24, "#ffffff", ink, true));
  ctx.addShape(slide, { x: 1010, y: 94, w: 140, h: 440, fill: "#eef5f5", line: { style: "solid", fill: "#d9e3e3", width: 1 } });
  text("Trust gap", 1030, 136, 100, 44, 24, navy, true);
  text("Language\\nRecords\\nInsurance\\nOn-site flow", 1032, 220, 110, 180, 22, muted);
  ` : ""}
  ${slide.style === "flow" ? `
  proof.forEach((p, i) => {
    boxText(p, 80 + i * 292, 350, 238, 92, 22, i === 0 ? "#e8f2f1" : "#ffffff", ink, true);
    if (i < proof.length - 1) text("→", 330 + i * 292, 376, 42, 42, 34, teal, true);
  });
  text("Service fees stay separate from medical institution fees.", 82, 520, 650, 30, 18, muted);
  ` : ""}
  ${slide.style === "lanes" ? `
  proof.forEach((p, i) => {
    const colors = ["#e8f2f1", "#f7f2e6", "#f7ebe8", "#edf0f5"];
    boxText(p, 70 + i * 292, 336, 250, 150, 22, colors[i], ink, true);
  });
  text("Focus beats generic global expansion.", 72, 548, 620, 30, 20, muted);
  ` : ""}
  ${slide.style === "pricing" ? `
  proof.forEach((p, i) => {
    const x = 78 + i * 286;
    ctx.addShape(slide, { x, y: 330, w: 238, h: 190, fill: "#ffffff", line: { style: "solid", fill: line, width: 1 } });
    text(p.split(":")[0], x + 18, 356, 190, 42, 20, ink, true);
    text(p.includes(":") ? p.split(":").slice(1).join(":").trim() : p, x + 18, 430, 190, 56, 28, teal, true);
  });
  ` : ""}
  ${slide.style === "system" ? `
  proof.forEach((p, i) => {
    boxText(p, 86 + i * 286, 342, 230, 90, 22, i === 0 ? "#e8f2f1" : "#ffffff", ink, true);
    if (i < proof.length - 1) ctx.addShape(slide, { x: 322 + i * 286, y: 382, w: 48, h: 3, fill: gold });
  });
  text("AI prepares the work. Humans approve the handoff.", 88, 520, 720, 34, 22, navy, true);
  ` : ""}
  ${slide.style === "finance" ? `
  const bars = [0.69, 0.54, 0.36, 0.30];
  proof.forEach((p, i) => {
    text(p.split(":")[0], 82, 326 + i * 70, 320, 28, 18, ink, true);
    ctx.addShape(slide, { x: 430, y: 330 + i * 70, w: 420, h: 22, fill: "#e7eeee" });
    ctx.addShape(slide, { x: 430, y: 330 + i * 70, w: 420 * bars[i], h: 22, fill: i < 2 ? teal : gold });
    text(p.includes(":") ? p.split(":").slice(1).join(":").trim() : p, 880, 322 + i * 70, 270, 40, 18, muted);
  });
  ` : ""}
  ${slide.style === "matrix" ? `
  proof.forEach((p, i) => boxText(p, 78 + (i % 2) * 546, 324 + Math.floor(i / 2) * 120, 480, 86, 19, "#ffffff", ink, true));
  text("Opportunity: own the China-specific operating layer.", 80, 590, 620, 30, 20, teal, true);
  ` : ""}
  ${slide.style === "roadmap" ? `
  proof.forEach((p, i) => {
    const x = 90 + i * 274;
    ctx.addShape(slide, { x, y: 370, w: 210, h: 10, fill: i < 2 ? teal : gold });
    boxText(p, x, 410, 220, 92, 20, "#ffffff", ink, true);
    text("0" + (i + 1), x, 330, 70, 32, 24, i < 2 ? teal : gold, true);
  });
  ` : ""}
  ${slide.style === "close" ? `
  ctx.addShape(slide, { x: 760, y: 0, w: 520, h: 720, fill: "#1f8a86" });
  ctx.addShape(slide, { x: 820, y: 80, w: 320, h: 320, fill: "#ffffff22", line: { style: "solid", fill: "#ffffff33", width: 1 } });
  text("${esc(slide.kicker)}", 70, 54, 240, 28, 16, "#9bd5d0", true);
  text(\`${esc(slide.title)}\`, 70, 132, 720, 172, 44, "#ffffff", true);
  text(\`${esc(slide.body)}\`, 74, 330, 620, 86, 22, "#dce8e7");
  proof.forEach((p, i) => boxText(p, 72 + (i % 2) * 330, 500 + Math.floor(i / 2) * 82, 292, 60, 17, "#ffffff12", "#ffffff", true));
  ` : ""}
  text("${String(index + 1).padStart(2, "0")}", 1180, 650, 48, 24, 13, "${slide.style === "cover" || slide.style === "close" ? "#dce8e7" : "#7a8993"}");
  return slide;
}
export const slideNumber = ${index + 1};
`;
}

await fs.mkdir(slidesDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });
await fs.mkdir(layoutDir, { recursive: true });
await fs.mkdir(downloadsDir, { recursive: true });

for (const [index, slide] of slides.entries()) {
  await fs.writeFile(path.join(slidesDir, `slide-${String(index + 1).padStart(2, "0")}.mjs`), slideModule(slide, index), "utf8");
}

const buildScript = path.join(skillDir, "scripts", "build_artifact_deck.mjs");
const result = spawnSync(nodeBin, [
  buildScript,
  "--workspace", workspace,
  "--slides-dir", slidesDir,
  "--out", finalPptx,
  "--preview-dir", previewDir,
  "--layout-dir", layoutDir,
  "--slide-count", String(slides.length),
], {
  cwd: root,
  env: { ...process.env, HOME: "C:/Users/joyly" },
  encoding: "utf8",
});

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);
if (result.status !== 0) {
  try {
    const partial = await fs.stat(finalPptx);
    if (partial.size > 0) {
      console.warn(`Deck builder exited with status ${result.status}, but exported ${finalPptx} (${partial.size} bytes).`);
    } else {
      throw new Error("empty PPTX");
    }
  } catch {
    throw new Error(`Deck build failed with status ${result.status}`);
  }
}

const stat = await fs.stat(finalPptx);
console.log(`Built ${finalPptx} (${stat.size} bytes)`);

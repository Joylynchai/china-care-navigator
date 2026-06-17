# 07. 官网与部署记录

## 已完成页面

首页：

- `index.html`

市场落地页：

- `pages/executive-checkup.html`
- `pages/russian-specialist.html`
- `pages/korean-visitor-checkup.html`

支持页面：

- `pages/partners.html`
- `pages/privacy.html`
- `pages/terms.html`

报告页面：

- `reports/index.html`
- `reports/business-plan.html`
- `reports/financial-model.html`
- `reports/operations-sop.html`
- `reports/competitor-research-report.html`

下载资产：

- `downloads/chinacare-navigator-bp.pptx`

## GitHub Pages

仓库：

- https://github.com/Joylynchai/china-care-navigator

线上站点：

- https://joylynchai.github.io/china-care-navigator/

部署分支：

- `gh-pages`

已确认：

- 首页可访问
- 多个子页面可访问
- 报告中心可访问
- BP PPTX 可下载
- `.nojekyll` 已添加，用于避免 GitHub Pages/Jekyll 处理导致静态资源问题

## 最近一次重要提交

提交：

- `473f17e Add HTML reports and BP deck download`

内容：

- 增加 HTML 报告中心
- 增加四份 HTML 报告
- 增加 BP PPTX 下载
- 首页增加 Reports 入口
- sitemap 增加报告页面

## 生成脚本

报告 HTML 生成脚本：

- `scripts/generate-report-pages.mjs`

BP PPTX 生成脚本：

- `scripts/build-bp-deck.mjs`

说明：

- PPTX 使用本地 presentation artifact 工具生成。
- `outputs/` 是构建输出目录，已加入 `.gitignore`。


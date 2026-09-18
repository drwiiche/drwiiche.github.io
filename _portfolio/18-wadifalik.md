---
title: "WadifaLik: Public Recruitment Portal & Automated Media Pipeline"
excerpt: "A full-stack employment platform and automated data aggregation system for Moroccan public sector recruitment, featuring a React/Vite SPA on Cloudflare CDN, a Python web scraper, and a headless Playwright visual compositing pipeline.<br/><img src='/images/wadifalik-icon.png' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**WadifaLik** ([wadifalik.ma](https://wadifalik.ma)) is a high-traffic employment and recruitment platform delivering real-time public sector job postings, ministerial examination notices (مباريات التوظيف), civil service convocations, and competition results across the 12 administrative regions of Morocco.

Beyond serving as a responsive web portal for job seekers, the platform is driven by an automated, serverless backend data pipeline (**Wadifa Bot**) that orchestrates continuous web scraping, stateful deduplication, headless visual asset compositing, dynamic video synthesis, and programmatic social media syndication.

---

## Architectural Highlights & Technical Decisions

### 1. Modern SPA Architecture & Cloudflare Edge CDN
* **Reactive Frontend:** Engineered as a high-performance Single Page Application (SPA) utilizing **React 18**, **Vite**, and **Tailwind CSS**, delivering instantaneous client-side navigation and smooth micro-interactions.
* **Edge Proxy & CDN Distribution:** Hosted behind **Cloudflare CDN** with aggressive edge caching, Brotli/Gzip asset minification, and HTTP/2 multiplexing, shielding the application from high-concurrency traffic spikes when major government recruitment results are published.
* **Mobile-First RTL Design System:** Polished right-to-left layout tailored for Arabic typography using Google Fonts (Cairo), featuring regional filtering, category pills, and instant search capabilities.

### 2. Autonomous Web Scraping & Ingestion Engine
* **Sitemap & DOM Ingestion Pipeline:** Custom Python scraping engine monitoring official employment sources and Google News XML sitemaps (`google-news.xml`) for newly published civil service notices.
* **Robust Tree Parsing:** Implemented with `requests` and `lxml` XPath extraction, featuring automatic encoding normalizers (UTF-8 with ISO-8859-1 fallback) to handle legacy government document formatting cleanly.
* **Stateful Deduplication:** Maintains local and cloud-synced tracking registers (`seen_posts.txt`) ensuring zero duplicate processing or redundant notifications.

### 3. Headless Visual Compositing Pipeline via Playwright
* **Pixel-Perfect Arabic Typography:** Standard graphic libraries (PIL/Pillow alone) notoriously struggle with proper Arabic ligature shaping, character joining, and bi-directional text layout. To solve this, engineered a headless compositing engine using **Playwright (Chromium)**.
* **In-Memory Base64 Asset Injection:** Background images and font binaries (`DIN Next LT Arabic`, `Cairo Bold`) are dynamically Base64-encoded and embedded directly into a virtual HTML/CSS canvas, eliminating file-path and permissions issues in containerized/headless environments.
* **Dynamic Font Autoscaling Algorithm:** Implemented a client-side DOM script within the headless renderer that dynamically calculates text bounding boxes and automatically reduces font size if job titles exceed maximum allocated pixel height.
* **Batch Banner Generation:** Automatically compiles 1080×1080 square social media graphics with custom branding, post watermarks, and high-contrast typographic hierarchy.

### 4. Cross-Platform Video Synthesis & Social Media Syndication
* **Audio-Video Compositing:** Automatically stitches generated visual announcement cards with synthesized voiceover tracks (`voice over.wav`), generating 60-second video clips ready for short-form video algorithms.
* **Programmatic Publishing Pipelines:** Integrates direct publishing routines to Instagram via `instagrapi` and TikTok via automated session cookie restoration (`COOKIES_BASE64`) without requiring manual editorial intervention.
* **Continuous Automation via GitHub Actions:** Scheduled workflows (`tiktok.yml`) execute automated monitoring, scraping, image generation, and multi-platform publishing on cron schedules.

---

## Technical Stack

* **Frontend:** React, Vite, Tailwind CSS, Cairo Font, Cloudflare Insights
* **Infrastructure & CDN:** Cloudflare Edge CDN, Reverse Proxy, HTTPS / SSL
* **Backend & Automation:** Python 3.11+, Requests, LXML (XPath), Regex
* **Headless Rendering:** Playwright (Chromium), Pillow (PIL), HTML5 Canvas
* **Media Processing:** MoviePy, FFmpeg, Audio Synchronizer
* **CI/CD & Scheduling:** GitHub Actions (Workflows), Dotenv Config Engine, Instagrapi

---

## Key Metrics & Impact
* **Coverage:** 12 administrative regions of Morocco across ministries, territorial collectives, and public institutions.
* **Automation:** 100% autonomous ingestion, typography rendering, and social asset generation pipeline.
* **Speed:** Instant page loads under Cloudflare edge caching with zero server-side rendering lag.

---

## Links & Live Platform
* **Live Website:** [https://wadifalik.ma/](https://wadifalik.ma/)

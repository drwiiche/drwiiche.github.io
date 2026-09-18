---
title: "Namodaj: Administrative Forms & Legal Document Engine"
excerpt: "A containerized, high-performance web platform and document generation engine hosting over 2,000 official Moroccan administrative forms, contracts, and legal templates with sub-second TTFB and AI-ready Generative Engine Optimization (GEO).<br/><img src='/images/namodaj-icon.png' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**Namodaj** ([namodaj.ma](https://namodaj.ma)) is Morocco's largest digital repository and dynamic generation engine for official administrative forms, civil declarations, legal contracts, and institutional paperwork. Built to streamline citizen-facing bureaucracy across the Kingdom, the platform catalogues and serves **2,000+ verified legal documents** categorized across 35+ specialized administrative domains (including CNSS, CMR, CNOPS, CNDP, MGPAP, Land Registry, Syndic, Commercial Court, Civil Status, and Auto-Entrepreneur declarations).

Engineered from the ground up for high concurrency, ultra-low latency, and modern AI discovery, Namodaj combines a tuned containerized runtime, dynamic multi-format document compilation, disk-level page caching, and comprehensive Generative Engine Optimization (GEO).

---

## Architectural Highlights & Technical Decisions

### 1. High-Performance Containerized Runtime & OPcache Tuning
* **Dockerized Architecture:** Encapsulated in production-ready Docker containers (`php:8.3-apache` paired with a MySQL 8.0 InnoDB relational cluster) via Docker Compose.
* **Zend OPcache Optimization:** Memory allocation configured at 64MB with `max_accelerated_files = 10000` and optimized revalidation cycles to eliminate compilation overhead and maintain lightning-fast response times under heavy read workloads.
* **Apache Hardening & Headers:** Configured `mod_rewrite` clean routing alongside security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, aggressive static asset cache headers with gzip/deflate compression).

### 2. Dual-Format Dynamic Document Pipeline
* **Word (`.docx`) & PDF Streaming:** Engineered an on-the-fly streaming pipeline allowing users to instantly download customizable Microsoft Word documents or stream printable vector PDFs rendered with official Moroccan typographic formatting.
* **Interactive In-Browser Preview & Clipboard Injection:** Integrated client-side instant copy functionality, allowing citizens to transfer legal formulations directly into word processors or email clients with sanitized RTL Arabic text formatting.

### 3. Disk-Backed Caching Layer & Full-Text Search
* **Zero-Database Caching Layer:** Implemented an autonomous file-based page cache (`cache/pages/`) with automated TTL invalidation. Frequently requested document templates bypass SQL queries entirely, resulting in sub-50ms Time-to-First-Byte (TTFB).
* **Bilingual Search Indexing:** Custom search subsystem (`search.php`) executing fast prefix, wildcard, and category-weighted matching across Arabic and French document titles, descriptions, and legal tags.

### 4. Generative Engine Optimization (GEO) & Machine-Readable AI Standards
* **`llms.txt` & `llms-full.txt` Protocol:** Implemented the emerging AI web standard (`/llms.txt` and `/llms-full.txt`) with clean markdown definitions of document schemas, regulatory citations, and institutional hierarchies—enabling AI search engines (ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews) to accurately cite and reference platform documents.
* **Rich Schema.org Structured Data:** Injected dynamic JSON-LD markup on every document page implementing `schema.org/DigitalDocument`, `BreadcrumbList`, and `Organization` to secure Google Rich Snippet carousels.
* **Automated XML Sitemaps:** High-scale sitemap engine (`sitemap.php`) generating partitioned sitemaps with dynamic `lastmod` tracking for rapid Google search indexation.

### 5. Bilingual Localization & RTL Typography
* **Bidirectional Layout Architecture:** Custom CSS design system tailored for right-to-left (RTL) Arabic typography using modern font weights, paired with full French taxonomy mapping for international and administrative institutions.

---

## Technical Stack

* **Backend:** PHP 8.3, Apache 2.4, PDO MySQL (InnoDB)
* **DevOps & Infrastructure:** Docker, Docker Compose, Linux, Git
* **Caching & Performance:** Zend OPcache, Disk Page Cache, HTTP/2 Server Push, Gzip Compression
* **SEO & AI Protocols:** Schema.org (JSON-LD), `llms.txt` / `llms-full.txt`, Dynamic XML Sitemaps, Open Graph
* **Frontend:** Modern Vanilla CSS (RTL/LTR design tokens), SVG Icons, Native JavaScript (ES6+)

---

## Key Metrics & Impact
* **Catalogue:** 2,000+ official Moroccan administrative templates and contracts.
* **Taxonomy:** 35+ distinct ministerial and institutional sectors.
* **Performance:** Sub-50ms TTFB on cached templates; zero client runtime framework dependencies.

---

## Links & Live Platform
* **Live Website:** [https://namodaj.ma/](https://namodaj.ma/)
* **AI Machine Index:** [https://namodaj.ma/llms.txt](https://namodaj.ma/llms.txt)

---
name: Add New Application
description: Instructions for adding a new mobile or web application to Brahim El Mouden's academic portfolio website, including adapting a privacy policy page and updating the main layout.
---

# Add New Application Workflow

This skill guides the agent in adding a new app (mobile or web) to Brahim El Mouden's portfolio. Follow these steps carefully:

## 1. App Icon Handling
- Save or find the app icon (usually provided as an image attachment in the chat).
- Copy the image to the site's local images directory: `images/<app-short-name>-icon.png` (or `.jpg`/`.webp` depending on format).
- Use local image paths (e.g., `images/<app-short-name>-icon.png`) instead of remote URLs when displaying the icon.

## 2. Adding the Project to index.html
- Open `index.html`.
- Add a new `<article class="resume-entry <category>">` entry inside `<div id="portfolio-list">`.
  - For mobile apps (Android/iOS), use `class="resume-entry android"`.
  - For web apps/games, use `class="resume-entry web"`.
  - Place it in chronological order (newer apps should be at the top of their respective category).
- Structure the `<article>` precisely using the existing pattern:
  ```html
  <article class="resume-entry android">
    <div class="entry-header">
      <div class="entry-title-block">
        <img src="images/<app-short-name>-icon.png" alt="App Title Icon" class="entry-icon">
        <div class="entry-text-block">
          <h3 class="entry-title">App Title</h3>
          <span class="entry-role">Your Role (e.g., Lead Mobile Developer)</span>
        </div>
      </div>
      <span class="entry-category-badge">Android App</span>
    </div>
    <div class="entry-desc">
      Brief overview paragraph.
      <ul>
        <li>Key bullet point 1</li>
        <li>Key bullet point 2</li>
      </ul>
    </div>
    <div class="badge-row">
      <span class="badge-label">Tech Stack:</span>
      <span class="tech-badge">Kotlin</span>
      <span class="tech-badge">Android SDK</span>
    </div>
    <div class="badge-row">
      <span class="badge-label">Techniques:</span>
      <span class="technique-badge">Local Database</span>
    </div>
    <div class="entry-links">
      <a href="/<app-short-name>-privacy/" class="entry-link">
        <i data-lucide="shield-alert" style="width: 14px; height: 14px;"></i> Privacy Policy
      </a>
    </div>
  </article>
  ```

## 3. Creating the Privacy Policy Page
- Create a new markdown file under `_pages/` named `_pages/<app-short-name>-privacy.md`.
- Include the following YAML Front Matter:
  ```yaml
  ---
  layout: single
  title: "Privacy Policy - <App Name>"
  permalink: /<app-short-name>-privacy/
  ---
  ```
- Adapt the policy to match the app's specific data processing structure (e.g., local-first vs cloud). Always reference **iqraa** as the publisher ("we", "our", "us") and include the developer URL `https://www.brahimelmouden.com/` under Contact Us.
- Link the new policy in the footer of `index.html` inside `<div class="footer-links">`:
  ```html
  <a href="/<app-short-name>-privacy/"><App Name> Privacy Policy</a>
  ```

## 4. Creating the Portfolio Markdown file
- Create a new markdown file under `_portfolio/` with a sequential prefix number, e.g., `15-netpulse-wol.md`.
- Use the standard layout:
  ```yaml
  ---
  title: "<App Name>"
  excerpt: "Short excerpt text.<br/><img src='/images/<app-short-name>-icon.png' width='100' style='border-radius:10px; margin-top:10px;'>"
  collection: portfolio
  ---

  ## Project Overview
  ...
  ```

## 5. Deployment & Git
- The Git client on this machine is pre-authenticated with access to the remote `drwiiche/drwiiche.github.io` repository.
- Stage all changes (`git add .`).
- Commit changes (`git commit -m "Add <App Name> app and privacy policy"`).
- Run `git pull --rebase` to integrate any remote commits.
- Push changes to the remote repository (`git push`).
- Wait 1-2 minutes for the GitHub Pages compile flow to complete, and verify the live deployment at `https://www.brahimelmouden.com/`.

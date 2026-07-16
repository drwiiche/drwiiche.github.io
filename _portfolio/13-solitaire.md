---
title: "Solitaire Classic"
excerpt: "Lightweight HTML5 card game developed for Facebook Instant Games, optimized for fast canvas redraws and quick asset preloading.<br/><img src='https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**Solitaire Classic** is a lightweight, mobile-responsive Solitaire game built using object-oriented vanilla JavaScript and HTML5 Canvas. The project was published to the Facebook Instant Games platform, focusing on instant load-time performance and fast rendering metrics.

---

## Key Features & Objectives
*   **Web Canvas Rendering:** Avoids heavy DOM overhead by rendering all animations, cards, and state changes inside an optimized HTML5 Canvas loop.
*   **FB Instant SDK Integration:** Connects with the Facebook Instant Games platform API to handle user profile loads, social sharing, and telemetry hooks.
*   **Asset Preloading Cache:** Custom-designed image and sprite sheet loaders that cache game assets dynamically to ensure sub-second startup times.

---

## Technical Stack & Technologies
*   **Languages:** JavaScript (ES6), HTML5, CSS3
*   **Graphics & APIs:** HTML5 Canvas Context 2D
*   **SDK Integrations:** Facebook Instant Games SDK
*   **Version Control:** Git

---

## Core Development Practices
*   **Object-Oriented State Engine:** Formulates game state machines to track card arrangements, deck distributions, and undo stack hierarchies.
*   **Sprite Sheet Rendering:** Preloads a single, consolidated sprite sheet containing all card faces, compiling drawing cycles to coordinate offsets to maximize canvas FPS.
*   **Asset Pipeline Optimization:** Compresses visual assets and reduces package foot-print sizes to meet Facebook's strict load speed benchmarks.

---

## Links & References
*   **Privacy Policy:** [Solitaire Classic Game Privacy Policy](/privacy/)

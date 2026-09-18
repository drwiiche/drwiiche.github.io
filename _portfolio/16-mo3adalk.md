---
title: "Mo3adalk: Moroccan GPA & Bac Simulator"
excerpt: "An offline-first Android application built with Jetpack Compose for calculating Moroccan school GPAs (Massar system), simulating Baccalaureate target exam scores, and generating official PDF report cards.<br/><img src='/images/mo3adalk-icon.png' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**Mo3adalk** (حاسبة المعدلات) is a modern, high-performance Android utility engineered for Moroccan students and educators across all academic cycles—Primary, Middle School (Collège), Common Core (Tronc Commun), 1st Year Baccalaureate, and 2nd Year Baccalaureate.

Built with **Jetpack Compose** and **Material Design 3**, the application delivers 100% accurate GPA computations adhering strictly to the official ministerial curricula and coefficient tables of the Moroccan Ministry of National Education (Massar system). In addition to standard GPA calculation, Mo3adalk features an intelligent **Baccalaureate Score Simulator**, a **Custom Curriculum Engine**, and on-device **Vector PDF Report Card Generation**.

<p align="center">
  <img src="/images/mo3adalk-feature-graphic.png" alt="Mo3adalk Feature Graphic" style="border-radius: 12px; width: 100%; max-width: 720px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin: 15px 0;">
</p>

---

## Key Features & Capabilities

* **Official Massar Curriculum Database:** Complete, pre-configured coefficient tables covering all Moroccan academic tracks and streams (Scientific, Mathematical Sciences A & B, Experimental Sciences, Humanities, Economics, Technical, and International French options).
* **Smart Baccalaureate Simulator (Simulateur Bac):** Reverse-calculates the exact score required on the National Exam (National) to achieve an overall passing grade or targeted academic honor (Assez Bien, Bien, Très Bien) based on the official formula:
  $$\text{Bac GPA} = \frac{(\text{National} \times 2) + \text{Regional} + \text{Continuous Assessment}}{4}$$
* **Instant Quarter-Step Grade Adjustments:** Ergonomic single-tap stepper buttons (`+0.25`, `-0.25`, quick sample fills, and bulk reset) tailored for standard Moroccan test grading increments.
* **Custom Curriculum Calculator:** Allows students in higher education, universities, vocational training institutes (OFPPT), or private academies to dynamically add arbitrary subjects, custom coefficients, and grading weights without restrictions.
* **Vector PDF Report Card & Export:** Generates clean, publication-ready academic transcripts formatted with official academic seals and subject breakdowns, ready to be saved locally or shared via Android's native share sheet.
* **100% Offline-First Architecture:** Zero latency and zero cloud dependency. Every grade calculation, subject weighting, and simulator formula executes instantaneously on-device.
* **Material 3 UI & Dual Theming:** Fluid adaptive layouts featuring high-contrast Emerald Dark Mode and sleek Light Mode, built with native Compose animations.

---

## Technical Stack & Architecture

* **Language:** Kotlin 1.9
* **UI Framework:** Android Jetpack Compose BOM (`2024.04.01`), Material 3, Material Icons Extended
* **Architecture:** Unidirectional Data Flow (UDF), MVVM Pattern, Kotlin Coroutines, StateFlow
* **Data Persistence:** Android Jetpack DataStore (Preferences) with GSON Serialization for instant state recovery
* **Monetization & Diagnostics:** Google Mobile Ads (AdMob v23.0) with localized ad throttling and privacy guardrails
* **Ratings & Engagement:** Google Play In-App Review API (`play:review-ktx:2.0.2`) for friction-free in-app ratings
* **Design & Graphics:** Custom SVG path rendering and vector report card generator

---

## Privacy by Design

Mo3adalk is designed from the ground up around student privacy:
* **Zero Remote Tracking:** No user registration, accounts, or cloud logins.
* **Isolated Academic Data:** All student names, grades, and projected exam marks are stored strictly in private local application storage and are never uploaded or shared with advertisers.
* **COPPA & GDPR Compliant:** Tailored safe configurations for minors and educational audiences.

---

## Links & References
* **Privacy Policy:** [Mo3adalk Privacy Policy](/mo3adalk-privacy/)
* **Publisher:** iqraa

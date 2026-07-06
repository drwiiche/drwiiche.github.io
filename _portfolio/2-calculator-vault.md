---
title: "Calculator Vault - Hide Photos"
excerpt: "Secure media gallery locker disguised as a fully functional calculator widget, leveraging local AES-256 encryption.<br/><img src='https://play-lh.googleusercontent.com/i9F4I9mTDXC7QVa-V7s-1nZjFYZcCpl69xzGQLScOFdX58mjpsU-_2LIw8m8vgUYNRztvzoqn3rDkzeOhMVgNng=s120-rw' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**Calculator Vault** is a secure, double-layered privacy locker app. To the user, it functions as a standard, fully operational mathematical calculator, but entering a pre-defined PIN triggers a transition into a locked file directory. The app provides robust local security and encryption layers to hide photos, videos, and private files.

---

## Key Features & Objectives
*   **Masqueraded Interface:** Fully working calculator UI acts as the decoy gate, hiding the secure entry screen.
*   **Media Security:** Scans and hides chosen device photos/videos from default gallery directories and system index engines.
*   **Intrusion Monitoring:** Logs invalid entry logs, taking silent snapshots of intruders (the intruder selfie feature).

---

## Technical Stack & Technologies
*   **Languages:** Kotlin
*   **Frameworks:** Android Jetpack Suite, Android Cryptography APIs
*   **Database:** Room Database (SQLite wrapper)
*   **Local Storage:** Encrypted File Directories

---

## Core Techniques & Encryption Protocols
*   **AES-256 File Encryption:** Encrypts user files locally before writing them to isolated directories, blocking decryption even if files are accessed via direct root file explorers.
*   **Biometric Cryptographic Auth:** Hooks into Android biometrics security modules to authorize folder decryption.
*   **Launcher Component Masking:** Hides the application package activities from active processes logs to enforce privacy.

---

## Links & References
*   **Download from Google Play:** [Calculator Vault on Google Play Store](https://play.google.com/store/apps/details?id=com.iqraa.vault.calculator.lock.hide.photos)

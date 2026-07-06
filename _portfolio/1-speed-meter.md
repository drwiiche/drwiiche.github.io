---
title: "Internet Speed Meter"
excerpt: "Android utility app displaying real-time internet speed in the status bar and notification shade, with daily traffic usage logs.<br/><img src='https://play-lh.googleusercontent.com/YZwPdcaZWjXb6SiDK1nPtiI0n3mmoC03iA5J3aIA7UIfeHDnQVToiNnU0rfEsU4H462Lbest9UrTWgHFh3At=s120-rw' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**Internet Speed Meter** is a lightweight, high-performance Android diagnostics tool designed to monitor and display active network throughput (upload/download speeds) in real time directly inside the system status bar and notification panel. It also tracks daily Wi-Fi and mobile data usage history. The application has achieved over **100,000+ total downloads** on the Google Play Store.

---

## Key Features & Objectives
*   **Real-time Speed Monitoring:** Active upload and download rates are updated continuously on the status bar and in the notification dropdown.
*   **Data Usage Logging:** Tracks and categorizes daily, weekly, and monthly data consumption, separating mobile networks from local Wi-Fi connections.
*   **Low-Resource Footprint:** Configured with optimized, battery-friendly service loops that prevent resource drain and avoid being killed by the Android OS background limits.

---

## Technical Stack & Technologies
*   **Languages:** Java
*   **Frameworks & Platforms:** Android SDK
*   **Storage:** SQLite Database
*   **System APIs:** Android Background Services, Broadcast Receivers, System Overlay Notifications

---

## Core Techniques & Architectures
*   **Background Telemetry Polling:** Implements lightweight background services to monitor system network socket traffic logs (`TrafficStats` API) without causing CPU lag.
*   **Notification Layout Bindings:** Customizes system notification views dynamically to show concurrent speed updates inside the status shade.
*   **Local Traffic History Audit:** Structures local SQL tables to log daily usage counters, enabling history queries and usage limit alerts.

---

## Links & References
*   **Download from Google Play:** [Internet Speed Meter on Google Play Store](https://play.google.com/store/apps/details?id=com.iqraa.internetspeedmeter)

---
title: "NetPulse WOL: Remote PC Power"
excerpt: "A powerful, clean, and modern Wake-on-LAN utility and remote host manager for Android, operating 100% locally.<br/><img src='/images/netpulse-icon.png' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
**NetPulse WOL** is a powerful, clean, and modern Wake-on-LAN utility and remote host manager for Android. It allows users to effortlessly wake up their home PC, gaming rig, media server, or work computer over their local network or DDNS URL with a single tap.

The application operates with a strict local-first architecture, ensuring all device profiles, network addresses, and power states remain safely stored on the user's hardware.

---

## Key Features & Objectives
*   **One-Tap Wake-on-LAN:** Send standard 102-byte UDP Magic Packets (Port 7 or 9) to any MAC address on your local network.
*   **Subnet Device Discovery:** Automatically scan your Wi-Fi network subnet to discover active IP addresses, hostnames, and MAC addresses.
*   **Remote Host & DDNS Support:** Supports custom remote hostnames, Webhooks, and DDNS domain routing (e.g., `myhome.ddns.net`).
*   **Real-Time Port Inspector:** Probe target servers for active listening ports including RDP (3389), SSH (22), SMB (445), and HTTP (80).
*   **Desktop Companion Power Controls:** Execute remote Shutdown, Restart, Sleep, and Screen Lock commands via the optional Wolow Desktop agent.
*   **Automated Wake Timers:** Configure recurring daily or weekday wake alarms (e.g., automatically wake your work PC at 8:30 AM every weekday).
*   **Deep Link & Automation Ready:** Full integration with Tasker, Home Assistant, and Google Assistant via custom URL scheme (`netpulse://wake?mac=AA:BB:CC:DD:EE:FF`).
*   **Host Profile Import & Export:** Safely back up your host profiles to a JSON file via Android Share Sheet or restore them anytime.
*   **Material 3 Design:** Clean, responsive dark and light themes optimized for speed and simplicity.

---

## Technical Stack & Technologies
*   **Languages:** Kotlin
*   **Frameworks:** Android Jetpack Suite, Material Design 3
*   **Network Protocols:** UDP (Magic Packet Broadcasting), TCP Port Probing, HTTP/HTTPS Webhooks
*   **Automation:** Custom Scheme Link Routing (`netpulse://`)

---

## Privacy & Security by Design
NetPulse WOL operates **100% locally** on your network. 
- **Zero Remote Servers:** No cloud synchronization, no user accounts, and no mandatory logins.
- **No Telemetry:** We collect zero analytics or usage metrics to protect user identity.
- **SSID Integration:** Android location requests are managed fully on-device to query localized SSID names and verify routing configurations.

---

## Links & References
*   **Privacy Policy:** [NetPulse WOL Privacy Policy](/netpulse-wol-privacy/)

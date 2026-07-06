---
title: "Local WISP Broadband Distribution Network"
excerpt: "Localized Wireless Internet Service Provider (WISP) distribution network serving 140+ active concurrent subscribers in Tiznit, Morocco.<br/><img src='https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This infrastructure project details the design, implementation, and operations of a private Wireless Internet Service Provider (WISP) serving over **140+ concurrent client stations** in peripheral residential areas in Tiznit, Morocco. The network provides high-availability broadband distributions over license-free 5GHz frequencies.

---

## Technical Specifications & Features
*   **Point-to-Multipoint (PtMP) Topology:** High-gain outdoor base stations distributing signals across sectors to subscriber client stations (CPEs).
*   **Dynamic Route Engineering:** Handles dynamic Layer 3 routing configurations to ensure path failovers and network scalability.
*   **Bandwidth Capacity Management:** Applies dynamic shaping limits per user subscription class to optimize network throughput under high contention ratios.

---

## Technical Stack & Technologies
*   **Operating Systems:** RouterOS (MikroTik Core Routers), Pharos OS (TP-Link Antennas)
*   **Hardware:** TP-Link Pharos CPE610/CPE510 arrays, MikroTik Cloud Core Router
*   **Protocols:** OSPF (Open Shortest Path First), PPPoE, TDMA (MAXtream)
*   **Management APIs:** Python API wrappers (for diagnostics automation)

---

## Core Infrastructure Engineering Practices
*   **Layer 3 OSPF Routing Backbone:** Configured dynamic OSPF multi-area routing parameters to establish dynamic routing path redundancies, guaranteeing fast failover convergence.
*   **Hierarchical Token Bucket (HTB) Shaping:** Designed advanced HTB queue structures and simple QoS queue trees inside RouterOS to shape bandwidth and prioritize latency-critical traffic classes.
*   **Layer 2 Access Layer Hardening:** Implemented strict MAC bridge filters, static ARP bindings, isolated client bridges, and PPPoE tunnel authentication layers to prevent DHCP spoofing, ARP poisoning, and network sniffing threats.
*   **RF Propagation Modeling:** Formulated links using Fresnel zone clearance reviews, link path attenuation checks, and active RSSI metrics to ensure high CCQ link stability.

---
title: "Self-Hosted Home VPS Containerization"
excerpt: "Systems engineering setup running Docker-orchestrated server applications behind secure Nginx reverse proxies.<br/><img src='https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=120&q=80' width='100' style='border-radius:10px; margin-top:10px;'>"
collection: portfolio
---

## Project Overview
This systems engineering project implements a self-hosted Virtual Private Server (VPS) node to deploy, manage, and orchestrate private development utilities, applications, and network services. Utilizing containerization tools, this setup ensures sandboxed process isolation and centralized port management.

---

## Key Features & Objectives
*   **Virtual Server Management:** Deploys developer tools and web services securely on a Linux host.
*   **Application Containerization:** Restricts server dependencies using Docker image layers.
*   **Port and Proxy Centralization:** Manages incoming connections dynamically through a reverse proxy.

---

## Technical Stack & Technologies
*   **Virtualization:** Docker, Docker Compose
*   **Operating System:** Linux (Ubuntu)
*   **Reverse Proxy:** Nginx
*   **Security:** Let's Encrypt (SSL certificates)

---

## Core Systems Engineering Practices
*   **Docker Container Orchestration:** Configured multi-container environments using `docker-compose.yml` to define isolated dependencies for services (databases, custom backend scripts, diagnostic dashboards).
*   **Nginx Reverse Proxy Mapping:** Configured virtual server blocks in Nginx, binding incoming domain/subdomain headers to specific dockerized port channels.
*   **Secure Networking Isolation:** Formed isolated virtual bridge networks inside Docker, restricting direct cross-container access and protecting system boundaries from external vulnerability points.

---

## Links & References
*   **Reference Guide:** [Docker VPS Containerization Guide](https://www.readyserver.sg/blog/docker-on-vps-beginners-guide-containerizing-first-app/)

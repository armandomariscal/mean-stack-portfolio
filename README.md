# 🚀 MEAN Stack Monorepo: Professional Portfolio & Study Tracker

## 🎯 The Vision
This project is a high-performance, interactive dashboard that serves as a live **Technical CV** and a tracker for my journey toward becoming a **Senior Full-Stack Developer**. 

I build this project incrementally every Monday, focusing on three pillars: **Clean Code**, **Scalable Architecture**, and **Professional English Communication**.



## 🏗️ Architectural Pattern: Clean Architecture & DDD
To ensure long-term maintainability, this project follows **Clean Architecture** principles, decoupling logic into:
* **Domain:** Enterprise business rules and interfaces.
* **Application:** User-specific business rules (Use Cases).
* **Infrastructure:** External tools (Express, Mongoose, Docker).

## 🛠️ Tech Stack & Tools
* **Monorepo Manager:** NPM Workspaces.
* **Database:** MongoDB (Containerized via **Docker Compose**).
* **Backend:** Node.js & Express.js (Modular API).
* **Frontend:** Angular (Standalone Components & Signals).
* **Shared Logic:** TypeScript library for cross-platform types and constants.

## 📈 Key Features
- **Dockerized Environment:** One-command setup for the entire development database.
- **Dynamic CV Data:** Profile, Role, and Skills fetched in real-time from MongoDB.
- **Security First:** Strict environment variable management and `.gitignore` policies.
- **English Learning Log:** Documenting technical vocabulary and grammar improvements.

## ✍️ Language Focus: Technical English
This repository is a dual-purpose learning tool. I am practicing:
* **Industry-standard terminology:** (e.g., *Staging, Atomic Commits, Decoupling, Middleware*).
* **Professional Documentation:** Writing clear PRs and READMEs.
* **Grammar Precision:** Refining my use of English in a professional context.

## 🗓️ Roadmap
- [x] **Phase 1:** Environment setup and Express.js "Hello World" server.
- [x] **Phase 2:** Monorepo Migration & Docker Integration.
- [ ] **Phase 3:** Clean Architecture Implementation (Moving logic to Domain/Application).
- [ ] **Phase 4:** Angular Material Dashboard & Interactive Skill Charts.

---

### 📅 Weekly Progress

**Monday, March 30, 2026**
* **Goal:** Phase 2 - Monorepo & Database Integration.
* **Completed:** * Migrated to a **Monorepo** structure using NPM Workspaces (`apps/api`, `apps/client`, `shared`).
    * Configured **Docker Compose** for a local MongoDB instance.
    * Integrated **Mongoose** to fetch CV profile data.
    * Implemented **Atomic Commits** and a safe Git workflow (fixing a `.env` leak).
* **English Milestone:** Mastered Git terminology (*Stage, Unstage, Remote, Upstream*). Practiced describing architectural layers (*Infrastructure vs. Domain*).

**Monday, March 9, 2026**
* **Goal:** Phase 1 - Environment Setup.
* **Completed:** Initialized NPM, installed Express, and created a basic "Hello World" server.
* **English Milestone:** Learned the difference between "show" and "display" and practiced using "it" as a subject.

---
*This project is updated every Monday. Stay tuned for more milestones!*
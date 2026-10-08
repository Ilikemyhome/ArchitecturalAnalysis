# ArchitecturalAnalysis

## Overview
This project is a lightweight, AI‑assisted companion application that visualizes the architectural structure of the Spotify music streaming platform. It was created as part of an Architectural Analysis assignment, which required analyzing an existing system, generating a prototype with AI assistance, verifying AI output, performing QA testing, and documenting the full process.

The dashboard is built using React + Vite, displays Spotify’s core architectural components using JSON data, and is deployed through Vercel.

## Step 1 — System Selection & Architecture Analysis
### Chosen System: Spotify
Spotify uses an event‑driven microservices architecture deployed on Google Cloud Platform (GCP). The system is designed for global scalability, low latency, and high availability.

### Architectural Style
- Event‑driven microservices
- Cloud‑native (Kubernetes on GCP)
- Multi‑CDN audio delivery
- Service‑owned databases
- Pub/Sub‑style event pipelines

### Architecture Layers
This analysis is represented visually in the included architecture diagram.

#### Client Layer
- Mobile apps (iOS / Android)
- Web player
- Desktop app

#### Edge & Delivery Layer
- Multi‑CDN (Akamai, CloudFront, Fastly)
- API Gateway

#### Microservices Layer
- Audio Streaming
- Search
- Recommendations
- User & Auth
- Payments
- Podcast Pipeline

#### Platform Layer
- Kubernetes (GCP)
- Event Delivery Infrastructure
- Backstage Developer Portal
  
The architecture diagram created in Step 1 serves as the foundation for the dashboard.

## Step 2 — AI Scaffolding, Verification & Corrections
AI tools (Microsoft Copilot) were used to generate initial scaffolding for the dashboard, including:

### AI Prompts Used

- “Explain Spotify’s system architecture using an event‑driven microservices model.”
- “Generate a React component that displays architecture components as cards using JSON data.”
- “Create a JSON structure representing Spotify’s core microservices and platform components.”

### AI Output Summary
AI generated:

- A list of Spotify microservices

- A JSON data structure

- A React component (ArchitectureCard)

- A basic dashboard layout

### Verification Against Real Documentation
I verified the AI output using Spotify engineering blog posts and public architecture write‑ups. Confirmed:

- Spotify uses microservices

- Spotify uses Kubernetes on GCP

- Spotify uses multiple CDNs

- Spotify uses event pipelines

- Spotify uses Backstage internally

### AI Mistakes Identified
- Invented non‑existent microservices

- Suggested outdated technologies (RabbitMQ, AWS Lambda)

- Generated deprecated React syntax

- Incorrectly implied a monolithic database

- Omitted the CDN layer initially
  
### Corrections Made
- Replaced hallucinated services with real ones

- Updated tech stack to match Spotify’s actual infrastructure

- Rewrote React components using modern functional patterns

- Added missing architecture layers

 - Improved UI using custom CSS

## Step 3 — Web Project Testing & QA
The dashboard was tested using the Web Project Testing & QA Checklist.

### Functional Testing
- All cards render correctly

- JSON loads without errors

- No broken links

- No undefined fields

- Edge cases tested (long text, rapid clicking)

#### UI & Responsive Design
- Verified on desktop, tablet, and mobile

- Cards stack properly

- No clipping or layout issues

#### Cross‑Browser Testing
- Tested in Chrome and Edge

- No console errors

- No missing assets

### Accessibility & Performance
- Keyboard navigation works

- Text contrast meets guidelines

- Page loads quickly

- No blocking scripts

## Step 4 — Final Prototype
### Tech Stack
- React

- Vite

- TypeScript

- CSS

- JSON data

- Vercel deployment

### Features
- Architecture cards

- Layer labels

- Hover animations

- Clean responsive layout

- Typed JSON data

- Simple, readable UI

### Deployment
The project is deployed on Vercel.

Live URL:  
https://architectural-analysis.vercel.app/

GitHub Repository:
https://github.com/Ilikemyhome/ArchitecturalAnalysis 

## AI Disclosure
AI was used to:

- Generate initial architecture description
- Scaffold React components

- Create JSON data structures

- Suggest styling

- Assist with debugging TypeScript errors

- All AI output was verified, corrected, and customized manually.

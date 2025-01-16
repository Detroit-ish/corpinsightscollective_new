# CorpInsights Development Setup Guide

This document provides the steps to set up your development environment for CorpInsights Collective, along with workflow, testing, and deployment instructions.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Setup & Installation](#setup--installation)
3. [Development Workflow](#development-workflow)
4. [Testing Requirements](#testing-requirements)
5. [Deployment Procedures](#deployment-procedures)
6. [Maintenance Guidelines](#maintenance-guidelines)

---

## 1. Introduction

CorpInsights Collective is built as a Progressive Web Application using modern technologies and a mobile-first approach. Follow this guide to set up your environment and maintain a consistent workflow.

---

## 2. Setup & Installation

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation Steps

Clone the repository and install dependencies:

```bash
git clone https://github.com/Detroit-ish/corpinsightscollective_new.git
cd corpinsightscollective_new
npm install
Running the Project
Development Server:

npm run dev
Testing:

npm run test
Building for Production:

npm run build
Starting Production:

npm run start


3. Development Workflow
Mobile-First Approach
Primary Device: iPhone 12 Pro (390px width)
Other Devices: iPhone SE (375px), iPhone 14 Pro Max (428px), Tablet (>=768px), Desktop (>=1024px)
Workflow Order:

Complete mobile design (390px).
Verify design with various screen sizes.
Adapt layouts for tablet and desktop.
Best Practices
Lock the viewport to mobile during early design stages.
Use Tailwind responsive utilities.
Adhere to guidelines in the design system at: /design/design-system.md

4. Testing Requirements
During Development
Initial Build:
Verify core functionality on the iPhone 12 Pro preset.
Pre-Pull Request:
Test across breakpoints, ensuring responsiveness and accessibility.
Production Preparation:
Conduct full device testing, performance evaluations, and accessibility audits.
Tools & Guidelines
Use Jest and React Testing Library for automated tests.
Follow component testing guidelines from the design system.

5. Deployment Procedures
Development:
Automatic deployment from the develop branch.
Production:
Manual deployment after QA.
Refer to the deployment sections in this guide for additional details.

6. Maintenance Guidelines
Regular Updates:
Follow version control practices (major, minor, patch) and document any breaking changes.
Documentation Updates:
Update this guide and related documentation whenever significant changes are made.
Component Audits:
Regularly review components against the design system standards.

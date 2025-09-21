
## Project info

![Live Demo of App](https://github.com/Kaawasaaki/order-analytics-viz/blob/main/sales_dashboard.gif)

# Order Analytics Viz

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

##  Table of Contents
- [Overview](#overview)  
- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Architecture](#architecture)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
- [Deployment](#deployment)  
  - [Environment Configuration](#environment-configuration)  
  - [CI/CD Pipeline (optional)](#cicd-pipeline-optional)  
  - [Hosting Options](#hosting-options)  
- [Testing](#testing)  
- [Linting & Code Quality](#linting--code-quality)  
- [Contributing](#contributing)  
- [License](#license)  

---

##  Overview
**Order Analytics Viz** is a data visualization application that enables users to explore, analyze, and gain insights from order-level data. The application provides **interactive dashboards, charts, and filtering capabilities** to help monitor trends, identify issues, and make data-driven decisions.

---

##  Tech Stack

| Layer | Technology / Tool |
|---|---|
| **Frontend** | React (or Vue/Angular), Recharts / D3.js / Chart.js, Redux or Context API, TailwindCSS / SASS |
| **Backend / API** | Node.js + Express (or Python Flask/FastAPI), REST API (or GraphQL) |
| **Database** | PostgreSQL / MySQL |
| **Data Processing** | Node.js jobs or Python ETL scripts |
| **Infrastructure** | Docker, Docker Compose, (Kubernetes optional), GitHub Actions CI/CD, AWS / GCP / Azure |
| **Security & Monitoring** | `.env` configs, HTTPS, JWT/Auth, Winston/Loggers, Prometheus / Grafana (optional) |

---

##  Features
-  Dashboard for total orders, revenue, average order value  
- Filters by date range, product category, region, and status  
- Interactive line charts, bar charts, and heatmaps  
-  Responsive UI (works on mobile and desktop)  
-  Export data/visuals (CSV, PDF)  

---

##  Architecture

- Client fetches data via API  
- Backend handles business logic & aggregation  
- Database stores raw and aggregated data  
- ETL jobs preprocess large datasets  

---

##  Getting Started

###  Prerequisites
- Node.js (v14+) & npm / yarn  
- Python (if backend uses Flask/FastAPI)  
- Docker (optional, for deployment)  
- PostgreSQL / MySQL instance  
- Git  

### Installation
```bash
# Clone repo
git clone https://github.com/Kaawasaaki/order-analytics-viz.git
cd order-analytics-viz

# Backend setup
cd backend
npm install      # or pip install -r requirements.txt

# Frontend setup
cd ../frontend
npm install
```

## Running Locally
# Start backend server
```bash
cd backend
npm run dev   # or python app.py / flask run

# Start frontend
cd ../frontend
npm start

```





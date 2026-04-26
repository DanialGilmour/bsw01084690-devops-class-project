# CSEB5143 DevOps Class Project: Node.js CI/CD Pipeline

## Project Overview
This project demonstrates a complete DevOps lifecycle for a Node.js web application. [cite_start]It automates building, testing, containerizing, and deploying using a modern CI/CD pipeline[cite: 2, 26].

## Tech Stack
* [cite_start]**Version Control:** Git & GitHub [cite: 4, 32]
* [cite_start]**Build Tool:** npm (Node.js) [cite: 4, 33]
* [cite_start]**CI/CD Orchestrator:** Jenkins [cite: 4, 35]
* [cite_start]**Containerization:** Docker [cite: 4, 34]
* [cite_start]**Orchestration:** Kubernetes (Minikube) [cite: 4, 36]
* [cite_start]**Webhook Tunneling:** ngrok [cite: 44, 183]

## Application Features
The web application is built with Express.js and includes:
* [cite_start]`/`: Returns "Hello DevOps" [cite: 5, 155]
* [cite_start]`/health`: Status check endpoint [cite: 5]

## Pipeline Stages
The `Jenkinsfile` defines the following automated workflow:
1. [cite_start]**Clone:** Pulls the latest code from this repository[cite: 9, 333].
2. [cite_start]**Build:** Installs dependencies using `npm install` and executes `npm run build`[cite: 46, 171, 172].
3. [cite_start]**Test:** Placeholder for SonarQube/Unit testing[cite: 173, 174].
4. [cite_start]**Docker Build:** Creates a container image tagged as `student-app`[cite: 9, 47, 338].
5. [cite_start]**K8s Deploy:** Applies Kubernetes manifests to the cluster[cite: 48, 339, 348].

## Deployment Instructions
### Local Setup
```bash
npm install
npm run build
node src/index.js
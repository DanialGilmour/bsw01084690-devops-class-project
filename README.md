# CSEB5143 DevOps Class Project: Node.js CI/CD Pipeline

## Project Overview
This project demonstrates a complete DevOps lifecycle for a Node.js web application. It automates building, testing, containerizing, and deploying using a modern CI/CD pipeline.

## Tech Stack
* **Version Control:** Git & GitHub
* **Build Tool:** npm (Node.js)
* **CI/CD Orchestrator:** Jenkins 
* **Containerization:** Docker 
* **Orchestration:** Kubernetes (Minikube)
* **Webhook Tunneling:** ngrok

## Application Features
The web application is built with Express.js and includes:
* `/`: Returns "Hello DevOps" 
* `/health`: Status check endpoint 

## Pipeline Stages
The `Jenkinsfile` defines the following automated workflow:
1. **Clone:** Pulls the latest code from this repository.
2. **Build:** Installs dependencies using `npm install` and executes `npm run build`.
3. **Test:** Placeholder for SonarQube/Unit testing.
4. **Docker Build:** Creates a container image tagged as `student-app`.
5. **K8s Deploy:** Applies Kubernetes manifests to the cluster.

## Deployment Instructions
### Local Setup
```bash
npm install
npm run build
node src/index.js

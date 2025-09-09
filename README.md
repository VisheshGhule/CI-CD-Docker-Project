# CI/CD Pipeline with GitHub Actions & Docker (Local VM)

**Objective:** Set up a full CI/CD pipeline that builds a Docker image, runs tests, and deploys locally (no cloud, no Minikube required).

---

### Tech Stack
- GitHub Actions – For CI/CD automation.
- Docker – Containerization platform.
- Docker Hub (Free) – To store and distribute container images.
- Local VM – For local deployment.

---

### Workflow Overview

1. Dockerize the App – Write a Dockerfile and docker-compose.yml.
2. CI/CD Setup – Configure GitHub Actions to:
   - Run tests.
   - Build the Docker image.
   - Push the image to Docker Hub.
3. Local Deployment – Run the image in a local VM.

---

### Create Docker file and docker-compose.yml file

---

### Create Personal Access Token in Docker hub
- Save it somewhere.
<img width="900" height="408" alt="e99443ba-b630-427e-8c45-d0459a59e529" src="https://github.com/user-attachments/assets/7936e6a6-11f6-49a0-8b3a-4293a9749a5d" />

---

### Add Docker Credentials 
- Add docker credentilas in your github
- Go to setting ➔ secret and variables ➔ action ➔ add docker credentials
<img width="900" height="410" alt="892df2b7-3ab2-4593-a94a-54c68f92be70" src="https://github.com/user-attachments/assets/a7140134-787c-44af-8161-cafade1184a4" />

---

### Create self-hosted runner
- In setting create self-hosted runner to deploy container on local machine (select your OS while creating self-hosted runner)
- After creating self hosted runner, copy paste that command in your local VM 
<img width="900" height="410" alt="e40dcfdf-fd29-4282-8772-90e38fe59061" src="https://github.com/user-attachments/assets/fb345f2b-8c31-437a-8c6a-ebca16248586" />

<br><br>

<img width="900" height="410" alt="3" src="https://github.com/user-attachments/assets/7dbbd79e-8da9-49a7-8977-86bcdda06d68" />

<br><br>

<img width="900" height="410" alt="4" src="https://github.com/user-attachments/assets/af8b460e-e5dc-44ca-9d45-816a84d18651" />

<br><br>

<img width="635" height="425" alt="5" src="https://github.com/user-attachments/assets/703a1782-6909-4743-99e9-94311817a747" />

<br><br>

---

### Run Pipeline
- In github ➔ action ➔ select pipeline and do run all jobs
<img width="900" height="410" alt="4329e835-3596-459f-abc2-55152ee45198" src="https://github.com/user-attachments/assets/edbc9016-91c0-4bae-8140-a4729df0e343" />

<br><br>

<img width="1364" height="566" alt="6" src="https://github.com/user-attachments/assets/0b6ea1ca-2ddf-4956-aada-9ff9f74dbb67" />

<br><br>

<img width="900" height="410" alt="7" src="https://github.com/user-attachments/assets/58cf9c7d-df2b-4769-a779-f4d8f332d878" />

<br><br>

<img width="900" height="410" alt="8" src="https://github.com/user-attachments/assets/ec1adfda-f2eb-4d34-b2eb-e551839680e8" />

- Image is push on docker hub and dokcer container is running on local VM
<img width="900" height="313" alt="9" src="https://github.com/user-attachments/assets/6a76dc52-e3bf-4142-94a5-8cb6d6afd98f" />

<br><br>

- In local VM check docker container `docker ps` and docker images `docker images`

<img width="900" height="226" alt="11" src="https://github.com/user-attachments/assets/047ccd51-b000-41a5-9d3b-0dfead35e888" />

### Check on browser `localhost:3000`
<img width="573" height="137" alt="10" src="https://github.com/user-attachments/assets/e6848556-3086-40b3-aa4c-8fac14d31825" />

<br><br>

---
📘 **Read the full step-by-step blog here:**  
[Building a CI-CD Pipeline with Docker & Github Actions](https://visheshblog.hashnode.dev/day-63-building-a-ci-cd-pipeline-with-docker-and-github-actions)


















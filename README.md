# CI/CD Pipeline with GitHub Actions & Docker (Local VM)

Objective: Set up a full CI/CD pipeline that builds a Docker image, runs tests, and deploys locally (no cloud, no Minikube required).

## Run locally without containers
```bash
npm install
npm test
npm start
# App on http://localhost:3000
```

## Run on local VM with Docker
Build and run, mapping host 8080 -> container 3000:
```bash
docker build -t ci-cd-docker-demo:local .
docker run -d --rm -p 8080:3000 --name demo ci-cd-docker-demo:local
curl -s http://localhost:8080/
curl -s http://localhost:8080/healthz
```
Stop the container:
```bash
docker stop demo
```

Or with docker-compose:
```bash
docker compose up --build
# visit http://localhost:8080
```

## GitHub Actions CI/CD
- Workflow: `.github/workflows/ci.yml`
- Steps: install deps → run tests → build Docker image → push to Docker Hub on `main` and tags `v*.*.*`.

Set GitHub Secrets:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

Image will be: `<DOCKERHUB_USERNAME>/ci-cd-docker-demo`

## Endpoints
- `/` → JSON message
- `/healthz` → ok

## Deliverables
- GitHub repo with workflows
- Docker image link
- CI/CD workflow run screenshots
- Screenshots of the app response on your local VM

---
title: Docker and Kubernetes
description: Learn the basics of Docker and Kubernetes, including commands, Dockerfile structure, and deployment practices.
category: DevOps, Infrastructure
---

# Docker

## Basic commands

| Command                                    | Description                                                       |
| ------------------------------------------ | ----------------------------------------------------------------- |
| `docker build -t <image-name> .`           | Build a Docker image from the Dockerfile in the current directory |
| `docker run <image-name>`                  | Run a Docker container from the specified image                   |
| `docker ps`                                | List running containers                                           |
| `docker ps -a`                             | List all containers (running and stopped)                         |
| `docker stop <container-id>`               | Stop a running container                                          |
| `docker rm <container-id>`                 | Remove a stopped container                                        |
| `docker rmi <image-name>`                  | Remove a Docker image                                             |
| `docker logs <container-id>`               | View logs of a running or stopped container                       |
| `docker exec -it <container-id> /bin/bash` | Open a shell in a running container                               |

## Basic docker-compose commands

| Command                                        | Description                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| `docker-compose up`                            | Start services defined in `docker-compose.yml`                                    |
| `docker-compose down`                          | Stop and remove containers, networks, and volumes defined in `docker-compose.yml` |
| `docker-compose build`                         | Build or rebuild services defined in `docker-compose.yml`                         |
| `docker-compose logs`                          | View logs for services defined in `docker-compose.yml`                            |
| `docker-compose ps`                            | List containers managed by `docker-compose`                                       |
| `docker-compose exec <service-name> /bin/bash` | Open a shell in a running service container                                       |

## Basic `Dockerfile` structure

```dockerfile
# Stage 1: Build dependencies
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

# Copy only the dependencies from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Set environment variable for runtime (can be overridden)
ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start"]
```

## Basic `docker-compose.yml` structure

```yaml
---
services:
  node-app:
    build: .
    ports:
      - "${PORT:-3000}:${PORT:-3000}"
    environment:
      - PORT=3000
```

## Build docker image

```bash
docker build -t my-node-app .
```

## Push docker image to Docker Hub

```bash
docker push <your-dockerhub-username>/<docker-image-name>:<docker-image-tag>
```

## Basic kubernetes deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-node-app
  labels:
    app: my-node-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-node-app
  template:
    metadata:
      labels:
        app: my-node-app
    spec:
      containers:
        - name: my-node-app
          image: <your-dockerhub-username>/<docker-image-name>:<docker-image-tag>
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "64Mi"
              cpu: "250m"
            limits:
              memory: "128Mi"
              cpu: "500m"
          env:
            - name: PORT
              value: "3000"
```

## Basic kubernetes service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-node-app
spec:
  selector:
    app: my-node-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
```

## Basic kubernetes ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-node-app
spec:
  rules:
    - host: my-node-app.example.com
      http:
        paths:
          - path: /
            pathType: Exact
            backend:
              service:
                name: my-node-app
                port:
                  number: 80
```

## kubectl commands

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
kubectl apply -f .
kubectl get namespaces
kubectl get pods
kubectl get services
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- bash
kubectl delete deployment my-node-app
kubectl delete service my-node-app
kubectl scale deployment my-node-app --replicas=5
```

# Dockerized Next.js Application

## 1. Project Overview

This project demonstrates how to containerize a Next.js application using Docker and Docker Compose.

The application is packaged into a Docker image and runs inside a Docker container. Docker Compose is used to build, start and manage the application.

## 2. Technologies Used

- Next.js
- React.js
- Node.js
- Docker
- Docker Compose
- Alpine Linux

## 3. Project Structure

```text
docker-nextjs-app/
│
├── public/
├── src/
│   └── app/
│       ├── page.js
│       ├── layout.js
│       └── globals.css
│
├── Dockerfile
├── .dockerignore
├── compose.yaml
├── package.json
├── package-lock.json
├── next.config.mjs
└── README.md
```

## 4. Dockerfile

The Dockerfile defines the instructions required to build the application image.

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
```

### Dockerfile Instructions

| Instruction | Description |
|---|---|
| FROM | Selects the Node.js base image |
| WORKDIR | Sets the working directory |
| COPY | Copies project files into the image |
| RUN | Executes commands during image building |
| EXPOSE | Documents the application port |
| CMD | Starts the Next.js application |

## 5. Docker Ignore File

The `.dockerignore` file excludes unnecessary files from the Docker build context.

```text
node_modules
.next
.git
.env*
npm-debug.log*
```

## 6. Build Docker Image

Navigate to the project directory:

```powershell
cd docker-nextjs-app
```

Build the Docker image:

```powershell
docker build -t docker-nextjs-app .
```

Verify the image:

```powershell
docker images
```

## 7. Run Docker Container

Run the application inside a Docker container:

```powershell
docker run -d --name nextjs-container -p 3000:3000 docker-nextjs-app
```

Check running containers:

```powershell
docker ps
```

Access the application:

**http://localhost:3000**

## 8. Docker Compose Configuration

The `compose.yaml` file defines the application service and its configuration.

```yaml
services:
  web:
    build: .
    container_name: nextjs-compose-app
    ports:
      - "3000:3000"
```

### Docker Compose Commands

Start and build the application:

```powershell
docker compose up --build -d
```

View running services:

```powershell
docker compose ps
```

View application logs:

```powershell
docker compose logs
```

Stop services:

```powershell
docker compose stop
```

Start stopped services:

```powershell
docker compose start
```

Restart services:

```powershell
docker compose restart
```

Stop and remove containers and networks:

```powershell
docker compose down
```

## 9. Container Management Commands

| Command | Description |
|---|---|
| `docker ps` | Lists running containers |
| `docker ps -a` | Lists all containers |
| `docker images` | Lists Docker images |
| `docker logs nextjs-container` | Displays container logs |
| `docker stop nextjs-container` | Stops a container |
| `docker start nextjs-container` | Starts a stopped container |
| `docker restart nextjs-container` | Restarts a container |
| `docker rm nextjs-container` | Removes a stopped container |

## 10. Rebuilding After Code Changes

When application source code changes, rebuild the Docker image and recreate the container to include the updates.

Using Docker Compose:

```powershell
docker compose up --build -d
```

## 11. Application URL

http://localhost:3000

## 12. Learning Outcomes

- Understood Docker images and containers.
- Created a Dockerfile for a Next.js application.
- Configured a `.dockerignore` file.
- Built and executed a Docker image.
- Configured host and container port mapping.
- Managed containers using Docker commands.
- Used Docker Compose to manage the application.
- Learned how to rebuild an image after source code changes.

## 13. Conclusion

Successfully containerized a Next.js application using Docker and Docker Compose. The application was built as a Docker image and executed inside a container, making it accessible locally through port 3000.
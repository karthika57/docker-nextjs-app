
# 1. Select Node.js base image
FROM node:22-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy project files
COPY . .

# 6. Build Next.js application
RUN npm run build

# 7. Document application port
EXPOSE 3000

# 8. Start application
CMD ["npm", "run", "start"]

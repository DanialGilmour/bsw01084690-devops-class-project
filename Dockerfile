#1 Use official Node.js LTS base image
FROM node:18-alpine

#2 Set working directory inside container
WORKDIR /app

#3 Copy package.json and package-lock.json first
# (helps with Docker layer caching)
COPY package*.json ./

#4  Install dependencies
RUN npm install

#5  Copy application source code
COPY . .

#6 Run build step (required by assignment)
RUN npm run build

#7 Expose application port
EXPOSE 3000

#8 Start the application
CMD ["npm", "start"]

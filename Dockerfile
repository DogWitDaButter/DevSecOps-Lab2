# Use Node.js 20 as the base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Expose the port your app runs on (adjust if different)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
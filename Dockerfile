# Base image
FROM node:18-alpine

# Buat direktori app
WORKDIR /usr/src/app

# Copy package.json dan install deps
COPY package*.json ./
RUN npm install

# Copy semua source code
COPY . .

# Expose port
EXPOSE 3000

# Start aplikasi
CMD [ "node", "app.js" ]

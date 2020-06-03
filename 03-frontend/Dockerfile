# For production environment

# Build phase: "..as builder" - temporary container
FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
# Will be built to the containers /app/build
RUN npm run build

# Run phase - new container
# Image of NGINX on Debian
FROM nginx
# NGINX default port is 80
EXPOSE 80
# Copy the built files from the builder phase, from-path, to-path. See the NGINX Docker image page
COPY --from=builder /app/build /usr/share/nginx/html
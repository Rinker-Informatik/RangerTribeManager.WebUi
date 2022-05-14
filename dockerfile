### Dockerfile for local testing

### STAGE 1: Build ###
FROM node:18.1.0 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.21.6
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/tribe-manager.web-ui /usr/share/nginx/html
EXPOSE 4200

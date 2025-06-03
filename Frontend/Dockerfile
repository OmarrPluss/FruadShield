# 1) Build Stage
FROM node:18 as build

WORKDIR /app

COPY Frontend/package.json ./
RUN npm install

COPY Frontend ./
RUN npm run build

# 2) Serve Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

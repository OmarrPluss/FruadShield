# 1) Build Stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all source code and build with Parcel
COPY . .
RUN npm run build

# 2) Serve Stage
FROM nginx:stable-alpine
# Copy the build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

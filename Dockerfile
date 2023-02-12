# build environment
FROM node:17-alpine as build
WORKDIR /app
ENV NODE_OPTIONS --max-old-space-size=8192
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# production environment
FROM nginx:1.19.0
WORKDIR /use/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
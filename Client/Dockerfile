FROM node:lts-alpine
USER $APP_UID
WORKDIR /app
COPY Client/package*.json ./
RUN npm ci
RUN npm i -g serve
COPY * ./
RUN npm run build
ENTRYPOINT ["serve", "-s", "dist"]
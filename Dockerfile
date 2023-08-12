ARG NODE_VERSION=18.17.0

FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.23.1-alpine as production

EXPOSE 80

WORKDIR /app

# COPY --from=build /app/package.json .
# COPY --from=build /app/node_modules node_modules

COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

FROM node:8.12.0 as source
WORKDIR /src/build-your-own-radar
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.13.5
WORKDIR /opt/build-your-own-radar
COPY --from=source /src/build-your-own-radar/dist .
COPY default.template /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
FROM node:24.18.0 AS builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:stable 

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]


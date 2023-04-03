FROM node:16-alpine as builder

WORKDIR /build

COPY package*.json /build
RUN npm ci

COPY . /build
RUN npm run build

FROM nginx:alpine
COPY --from=builder /build/build /usr/share/nginx/html/indicator-extraction-tool

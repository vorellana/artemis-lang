# description: Dockerfile for frontend
FROM node:14-alpine

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_KEY
ENV NEXT_PUBLIC_API_KEY=$NEXT_PUBLIC_API_KEY

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD [ "npm", "start" ]

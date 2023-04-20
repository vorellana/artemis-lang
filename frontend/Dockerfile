# description: Dockerfile for frontend
FROM node:14-alpine
ENV NEXT_PUBLIC_API_URL=
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD [ "npm", "start" ]

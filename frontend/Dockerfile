# description: Dockerfile for frontend
FROM node:14-alpine
ENV NEXT_PUBLIC_API_URL=http://artemis-backend-balance-1-1425567086.us-east-1.elb.amazonaws.com/ship/evaluate
# ENV NEXT_PUBLIC_API_URL=http://192.168.0.13:3000
ENV NEXT_PUBLIC_API_KEY=bmhgujpKT2PSq4lyQcT6M5VxvML1cusbER0fllLaEnMPT8HHHzcOPiKz6knrvQD5ak2EgKpxur6HIQsnryyyDePauenGn21NmChShBYVgc5Hkp8S7GVOYvUt7gadjqQc
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD [ "npm", "start" ]

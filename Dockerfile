FROM node:alpine-14
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node","index.js"]

FROM node:20
RUN mkdir -p /var/aaron
WORKDIR /var/aaron
COPY . .
RUN npm install
RUN npm run build
EXPOSE 80
CMD [ "node", "dist/main.js" ]
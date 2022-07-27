FROM node:18-alpine

WORKDIR /home/node/app

COPY index.mjs .
COPY package.json .
RUN npm install

ENTRYPOINT ["/home/node/app/index.mjs"]

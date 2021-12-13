FROM node:14

ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend

COPY . .

COPY package*.json ./

RUN npm install

CMD ["node", "dist/main"]
FROM node:14

ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

VOLUME [ "/backend/store" ]

CMD ["node", "dist/main"]
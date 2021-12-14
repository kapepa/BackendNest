FROM node

ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend

EXPOSE 5000

COPY . .
COPY package*.json ./backend
COPY src /backend/src

RUN npm install
RUN npm audit fix --force

CMD ["node", "dist/main"]
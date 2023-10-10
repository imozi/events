ARG NODE_VERSION=18
ARG FRONTEND_PORT=3000
ARG BACKEND_PORT=3001

FROM node:$NODE_VERSION-alpine

WORKDIR /app

COPY . .

RUN npm i && npm run build:prod && npm cache clean --force

EXPOSE $FRONTEND_PORT $BACKEND_PORT

CMD ["npm", "start"]
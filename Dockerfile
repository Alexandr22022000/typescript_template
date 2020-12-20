FROM node:15 as builder

COPY package.json /app/
COPY yarn.lock /app/

COPY tsconfig.json /app/
COPY src /app/src/
COPY public /app/public/
WORKDIR /app

RUN yarn --silent

RUN yarn build

RUN rm -rf tsconfig.json
RUN rm -rf src
RUN rm -rf public
RUN rm -rf package.json
RUN rm -rf yarn.lock
RUN rm -rf node_modules
RUN rm -rf .eslintcache

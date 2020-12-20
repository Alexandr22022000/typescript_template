# Builder container
FROM node:15 as builder

# Copy files to generate node_modules
COPY package.json /app/
COPY yarn.lock /app/

# Copy files to generate build
COPY tsconfig.json /app/
COPY src /app/src/
COPY public /app/public/

# Switch to app directory
WORKDIR /app

# Generate build
RUN yarn --silent
RUN yarn build

# Clean up
RUN rm -rf tsconfig.json
RUN rm -rf src
RUN rm -rf public
RUN rm -rf package.json
RUN rm -rf yarn.lock
RUN rm -rf node_modules
RUN rm -rf .eslintcache

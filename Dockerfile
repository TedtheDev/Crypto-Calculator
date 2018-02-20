FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm run-script install
RUN npm run-script build
COPY . .
CMD ["npm","start"]

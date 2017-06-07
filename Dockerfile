FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package.json /usr/src/app/
RUN npm install
RUN npm run build

COPY ./build /usr/src/app

EXPOSE 8080
CMD [ "npm", "production" ]
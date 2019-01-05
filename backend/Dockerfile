FROM node:9
ADD ./ /opt/tikal/octopus/

EXPOSE 3333

WORKDIR /opt/tikal/octopus/
RUN npm install -g yarn && yarn

CMD [ "node", "index.js" ]


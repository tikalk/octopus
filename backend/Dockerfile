FROM node:9
ADD ./ /opt/tikal/octopus/

EXPOSE 3333

WORKDIR /opt/tikal/octopus/
RUN npm install
CMD [ "node", "index.js" ]


const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const api = require('./api');
const _ = require('lodash');
const mongoose = require('mongoose')

const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const {typeDefs} = require('./graphql/type-defs');
const {resolvers} = require('./graphql/resolvers');

const PORT = process.env.PORT || 3333;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/octopus';
const PASS_HEADER = "'Authorization': 'Bearer " + process.env.TOKEN + "'";
console.log('pass header is %s',PASS_HEADER)
const whitelist = ['http://localhost:3333', 'http://localhost:8080', 'http://octopus.tikal.io', 'https://octopus.tikal.io'];
const { tokenToUserMW } = require('./middlewares/token.middleware');

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || _.includes(whitelist, origin)) {
      return cb(null, true);
    }
    return cb(new Error('Not allowed by CORS'));
  },
}));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/api', tokenToUserMW, api);

// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphql', bodyParser.json(), tokenToUserMW, graphqlExpress(req => ({schema, context: {req}})));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  passHeader: PASS_HEADER
}));

app.get('/health_check', (req, res) => {
  res.status(200).json({ health: 'OK' });
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./api');
const _ = require('lodash');
require('dotenv').config();

const PORT = process.env.PORT || 3333;
const whitelist = ['http://localhost:8080', 'http://octopus.tikal.io', 'https://octopus.tikal.io'];
const { tokenToUserMW } = require('./middlewares/token.middleware');

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

app.use('/api', tokenToUserMW, api);

app.get('/health_check', (req, res) => {
  res.status(200).json({ health: 'OK' });
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

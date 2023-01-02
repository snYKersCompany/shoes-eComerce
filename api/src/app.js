const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');
const Stripe = require("stripe")
const routes = require("./routes/index.js");
const pkg = require('../package.json');
const { createRoles } = require('./libs/initialSetup');

require("./db.js");

//Clave secreta, acomodarla en una variable de entorno.
const stripe = new Stripe("sk_test_51MHXZUEgY6MBu39VO7dnnFFp94Te9eBqnmjhuLQK2wSZMeQhn4GmIx8otuyuodQfhum25D3YYFiocNC0qvhKybup00huDmqVys")

const server = express();
createRoles();
server.set('pkg', pkg);
server.name = "API";
server.use(cors({origin: "*"}));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/api', routes);
server.get('/', (req, res) => {
  return res.status(200).json({
    author: server.get('pkg').author,
    description: server.get('pkg').description,
    version: server.get('pkg').version
  });
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;





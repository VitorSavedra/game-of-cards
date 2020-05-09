const { Router } = require('express');
const decksRouter = require('./decks.routes');

const routes = Router();

routes.use('/decks', decksRouter);

module.exports = routes;

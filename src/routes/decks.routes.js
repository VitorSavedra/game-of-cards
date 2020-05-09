const { Router } = require('express');

const decksRouter = Router();

decksRouter.post('/', (request, response) => response.json({ message: 'Hello World!' }));

module.exports = decksRouter;

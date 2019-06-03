const express = require('express');

const routes = express.Router();

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

module.exports = routes;

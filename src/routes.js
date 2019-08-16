const express = require('express');
const userController = require('./controller/UserController.js')

const routes = new express.Router();

routes.get('/user', userController.index);
routes.get('/user/:id', userController.findUserById)
routes.put('/user/:id', userController.putUserById)
routes.post('/user', userController.store)
routes.delete('/user/:id', userController.remove)

module.exports = routes
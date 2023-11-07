const myController = require('../controllers');
const routes = require('express').Router(); 

routes.get('/', myController.awsomeFunction);

module.exports = routes;
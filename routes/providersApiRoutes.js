const express = require('express');
const providersApiRouter = express.Router();
const providersApiController = require("../controllers/providersApiController");

providersApiRouter.get('/', providersApiController.getProviders);

module.exports = providersApiRouter;
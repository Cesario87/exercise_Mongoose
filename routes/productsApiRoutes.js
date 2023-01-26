const express = require('express');
const productsApiRouter = express.Router();
const productsApiController = require("../controllers/productsApiController");


productsApiRouter.get('/', productsApiController.getProductsProviders);

module.exports = productsApiRouter;
const express = require('express');
const productsApiRouter = express.Router();
const productsApiController = require("../controllers/productsApiController");


productsApiRouter.get('/', productsApiController.getProductsProviders);
productsApiRouter.post('/', productsApiController.postProductsProviders);

module.exports = productsApiRouter;
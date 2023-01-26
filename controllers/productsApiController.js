const Product = require('../models/products');

const getProductsProviders = async (req, res) => {
    Product.find()
    .populate('provider')
    .exec((err, products) => {
        if (err) {
            return res.status(500).json({
                message: 'Error getting products',
                error: err
            });
        }
        return res.status(200).json(products);
    });
};

module.exports = {
    getProductsProviders
}
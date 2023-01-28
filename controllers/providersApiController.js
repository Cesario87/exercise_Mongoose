const Product = require('../models/providers');
const Provider = require('../models/providers');

const getProviders = async (req, res) => {
    Provider.find()
        .exec((err, providers) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error getting providers',
                    error: err
                });
            }
            return res.status(200).json(providers);
        });
};

module.exports = {
    getProviders
}
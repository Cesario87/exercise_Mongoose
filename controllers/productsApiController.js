const Product = require('../models/products');
const Provider = require('../models/providers');

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

const postProductsProviders = async (req, res) => {
    const { title, price, description, provider } = req.body;

    // Buscar el proveedor correspondiente
    Provider.findOne({ provider }).then(provider => {
        if (!provider) {
            res.status(404).json({ message: 'Provider not found' });
        }

        // Crear el producto con los datos recibidos y el _id del proveedor
        const newProduct = new Product({
            title,
            price,
            description,
            provider: provider._id
        });

        // Guardar el producto en la base de datos
        newProduct.save().then(product => {
            // Retornar los datos del producto creado y un status 201 
            res.status(201)
                .json({ message: 'Product created', product });
        }).catch(err => {
            res.status(500).json({ message: err.message });
        });
    });
};

module.exports = {
    getProductsProviders,
    postProductsProviders
}
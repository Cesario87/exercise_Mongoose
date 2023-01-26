const mongoose = require('mongoose');
require('../utils/db_mongo');
const Schema = mongoose.Schema;
const Provider = require('./providers');

const objectSchema = {
    // id: { 
    //     type: Number, 
    //     required: true,
    //     unique: true
    // },
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;


//Insertar un producto

// Provider.findOne({ provider: "Feria SA"}).then(provider => {
//     const p = new Product({
//         id: 3,
//         title: "Pescaito",
//         price: 3.50,
//         description: "Frito",
//         provider: provider._id
//     });
//     p.save().then((data) => console.log(data));
// });


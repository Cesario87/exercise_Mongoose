const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  company_name: { type: String, required: true },
  CIF: { type: String, required: true },
  address: { type: String, required: true },
  url_web: { type: String, required: true }
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
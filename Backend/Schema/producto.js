const mongoose = require("mongoose");

const ProdSchema = new mongoose.Schema({
    id: { type: String, required: true },
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    descripcion: { type: String, required: true, unique: true },
    precio: { type: Number, required: true },
});

module.exports = mongoose.model('Producto', ProdSchema);
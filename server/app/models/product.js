const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: mongoose.Schema.Types.Decimal128,
});

mongoose.model('Product', ProductSchema);
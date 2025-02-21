const { product, Product } = require('../models/productModel');

const getProduct = (req, res) => {
    res.status(200).json({ success: true, product });
};

const getById = (req, res) => {
    const foundProduct = product.find(p => p.id === parseInt(req.params.id));
    if (!foundProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, product: foundProduct });
};

const createProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const newProduct = new Product(name, price);
    product.push(newProduct);
    res.status(201).json({ success: true, product: newProduct });
};

const updateProduct = (req, res) => {
    const foundProduct = product.find(p => p.id === parseInt(req.params.id));
    if (!foundProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ success: false, message: 'Name and price are required' });
    }

    foundProduct.name = name;
    foundProduct.price = price;
    res.status(200).json({ success: true, product: foundProduct });
};

const deleteProduct = (req, res) => {
    const index = product.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    product.splice(index, 1);
    res.status(200).json({ success: true, message: 'Product deleted' });
};

module.exports = { getProduct, getById, createProduct, updateProduct, deleteProduct };

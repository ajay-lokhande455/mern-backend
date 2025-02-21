const express = require('express');
const { getProduct, getById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProduct);
router.get('/:id', getById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

const express = require('express');
const router = express.Router();
const dal = require('../dal/database');

router.get('/products', async (req, res) => {
    const products = await dal.getAllProducts();
    res.json(products);
});

router.post('/products', async (req, res) => {
    const {name, description, price} = req.body;
    await dal.createProduct(name, description, price);
    res.redirect('/products');
});

router.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const {name, description, price} = req.body;
    await dal.updateProduct(id, name, description, price);
    res.redirect('/products');
});

router.patch('/products/:id', async (req, res) => {
    const {id} = req.params;
    const {price} = req.body;
    await dal.updateProductPrice(id, price);
    res.redirect('/products');
});

router.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    await dal.deleteProduct(id);
    res.redirect('/products');
});

module.exports = router;


const express = require('express');
const router = express.Router();
const dal = require('../dal/database');

router.get('/products', (req, res) => {
    const products = dal.getAllProducts();
    res.json(mockData);
});

module.exports = router;


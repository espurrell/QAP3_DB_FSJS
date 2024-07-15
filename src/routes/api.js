const express = require('express');
const router = express.Router();

const mockData = [
    {id:1, name: 'Product1', description: 'Description1', price: 19.99},    
    {id:2, name: 'Product2', description: 'Description2', price: 29.99},
];

router.get('/products', (req, res) => {
    res.json(mockData);
});

module.exports = router;


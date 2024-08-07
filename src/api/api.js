const router = require('express').Router(); // import express and create a router
const productsDal = require('../services/pg.products.dal');// import the products data access layer

router.get('/', async (req, res) => { // GET - all products
    try {
        const products = await productsDal.getAllProducts();
        res.json(products);
    } catch (error) {
        console.log('Error fetching products', error);
        res.status(503).json({message: 'Service Unavailable',status:503});
    }
});

router.get('/:id', async (req, res) => { // GET - product by id
    try{
        const productId = req.params.id;
        const product = await productsDal.getProductById(productId);
        if(!product){
            res.status(404).json({message: 'Product not found', status: 404});
        }else{
            res.json(product);
        }
    } catch (error) {
        console.error('Error fetching product by id', error);
        res.status(503).json({message: 'Service Unavailable', status: 503});
    }
});

router.post('/', async (req, res) => { // POST - create product
    try {
        const {productName, productDescription, productPrice, productQuantity} = req.body;
        await productsDal.createProduct(productName, productDescription, productPrice, productQuantity);
        res.status(201).json({message: 'Product created', status: 201});
    } catch (error) {
        console.error('Error creating product', error);
        res.status(503).json({message: 'Service Unavailable', status: 503});
    }
});

router.put('/:id', async (req, res) => { // PUT - update product
    try {
        const productId = req.params.id;
        const {productName, productDescription, productPrice, productQuantity} = req.body;
        await productsDal.updateProduct(productId, productName, productDescription, productPrice, productQuantity);
        res.status(200).json({message: 'Product updated', status: 200});
    } catch (error) {
        console.error('Error updating product', error);
        res.status(503).json({message: 'Service Unavailable', status: 503});
    }
});

router.delete('/:id', async (req, res) => { // DELETE - delete product
    try {
        const productId = req.params.id;
        await productsDal.deleteProduct(productId);
        res.status(200).json({message: 'Product deleted', status: 200});
    } catch (error) {
        console.error('Error deleting product', error);
        res.status(503).json({message: 'Service Unavailable', status: 503});
    }
});

module.exports = router;

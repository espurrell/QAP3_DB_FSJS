const router = require('express').Router();
const productsDal = require('../services/pg.products.dal');

router.get('/', async (req, res) => { // GET - all products
    try {
        const products = await productsDal.getAllProducts();
        res.render('products', {products});
    } catch (error) {
        console.log('Error fetching products', error);
        res.render(503);
    }
});

router.get('/:id', async (req, res) => { // GET - product by id
    try{
        const product = await productsDal.getProductById(req.params.id);
        console.log (`product one: ${JSON.stringify(product)}`);
        if (product)
            res.render ('product', { product });
        else
            res.render ('404');
    } catch (error) {
        console.error('Error fetching product by id', error);
        res.render('503');
    }
});

router.post('/', async (req, res) => { // POST - create product
    console.log("post request");
    try {
        console.log(`post re data: ${JSON.stringify(req.body)}`);
        await productsDal.addProduct(req.body.productname, req.body.productdescription, req.body.productprice, req.body.productquantity);
        const products = await productsDal.getAllProducts();    
        res.render('products', { products });
    } catch (error) {
        console.error('Error creating product', error);
        res.render('503');
    }
});

router.put('/:id', async (req, res) => { // PUT - update product
    console.log(`finally update call param: ${req.params.id}, ${JSON.stringify(req.params)} , body :${JSON.stringify(req.body)}`)
    try {
        await productsDal.updateProduct(req.params.id, req.body.productname, req.body.productdescription, req.body.productprice, req.body.productquantity);
        const products = await productsDal.getAllProducts();
        res.render('products', { products });
    } catch (error) {
        console.error('Error updating product', error);
        res.render('503');
    }
});

router.post("/:id/update", async (req, res) => { // POST - update product
    console.log(`update product request post method override: ${JSON.stringify(req.params)}`);
    const product = await productsDal.getProductById(req.params.id);
    res.render("edit", { product });
});

router.get("/0/add", async (req, res) => { 
    console.log("add product request + form");
    res.render("add");
});

router.delete('/:id', async (req, res) => { // DELETE - delete product
    try {
        await productsDal.deleteProduct(req.params.id);
        const products = await productsDal.getAllProducts();
        res.render('products', {products});
    } catch (error) {
        console.error('Error deleting product', error);
        res.render('503');
    }
});

module.exports = router;
     
const pool = require('./database');

const getAllProducts = () => { // GET - all products
    return new Promise ((resolve, reject) => {
        const sql = 'SELECT * FROM products';
        pool.query(sql, (err, result) => {
            if (err) {
                console.error('Error executing fetching products', err);
                reject(err);
            }else{
                resolve(result.rows);
            }
        });
    });
};

const getProductById = (productId) => { // GET - product by id
    return new Promise ((resolve, reject) => {
        const sql = 'SELECT * FROM products WHERE productId = $1';
        pool.query(sql, [productId], (err, result) => {
            if (err) {
                console.error('Error executing fetching product by id', err);
                reject(err);
            }else{
                resolve(result.rows[0]);
            }
        });
    });
};

 // POST - create product
const createProduct = (productName, productDescription, productPrice, productQuantity) => { 
    return new Promise ((resolve, reject) => {
        const sql = 'INSERT INTO products (name, description, price) VALUES ($1, $2, $3)';
        const values = [productName, productDescription, productPrice, productQuantity];
        pool.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error executing creating product', err);
                reject(err);
            }else{
                resolve(result.rows);
            }
        });
    });
};



const updateProduct = (productId, productName, productDescription, productPrice, productQuantity) => {
    console.log('Update Product: PUT request')
    console.log(`postman req data: ${productId}, ${productName}, ${productDescription}, ${productPrice}, ${productQuantity}`)

    return new Promise() ((resolve, reject) => {
        const sql = "UPDATE products SET productname = $1, productdescription = $2, productprice = $3, productquantity = $4 WHERE productid = $5";
        const values = [productId, productName, productDescription, productPrice, productQuantity]; 
        pool.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error executing updating product', err);
                reject(err);
            }else{
                resolve(result.rows);
            }
        });
    });
};   


const deleteProduct = (productId) => { // DELETE - product by id
    console.log(`pid: ${productId}, type: ${typeof productId}`)
    return new Promise ((resolve, reject) => {
        const sql = 'DELETE FROM products WHERE productId = $1';
        pool.query(sql, [productId], (err, result) => {
            if (err) {
                console.error('Error executing deleting product', err);
                reject(err);
            }else{
                resolve(result.rows);
            }
        });
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};


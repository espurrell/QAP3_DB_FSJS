const { Pool } = require('pg');

const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'yourdatabase',
    password: 'yourpassword',
    port: 5432,
});

const getAllProducts = async () => {
    const res = await pool.query('SELECT * FROM products');
    return res.rows;
};

const createProduct = async (name, description, price) => {
    await pool.query('INSERT INTO products (name, description, price) VALUES ($1, $2, $3)', [name, description, price]);
};

const updateProduct = async (id, name, description, price) => {
    await pool.query('UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4', [name, description, price, id]);
};

const updateProductPrice = async (id, price) => {
    await pool.query('UPDATE products SET price = $1 WHERE id = $2', [price, id]);
};

const deleteProduct = async (id) => {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    updateProductPrice,
    deleteProduct,
};

module.exports = {
    getAllProducts,
};

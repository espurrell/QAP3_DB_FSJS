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

module.exports = {
    getAllProducts,
};

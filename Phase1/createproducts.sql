CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM products;

INSERT INTO products (name, description, price) VALUES ('Product1', 'Description1', 19.99);

UPDATE products SET name = 'Updated Product', price = 29.99 WHERE id = 1;

UPDATE products SET price = 25.99 WHERE id = 1;

DELETE FROM products WHERE id = 1;
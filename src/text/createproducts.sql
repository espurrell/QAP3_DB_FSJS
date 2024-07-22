DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
	productID SERIAL PRIMARY KEY,
	productName VARCHAR(255) NOT NULL,
	productDescription TEXT,
	productPrice DECIMAL(10,2) NOT NULL, 
	productQuantity INTEGER NOT NULL 
);

INSERT INTO Products (productName, productDescription, productPrice, productQuantity)
VALUES
('mocha chip cookie', 'delicious coffee flavoured cookie', 4.00, 09),
('brownie', 'delicious brownies with frosting', 5.00, 18),
('vanilla bean scone', 'buttery scone with a vanilla bean glaze', 9.00, 27),
('chocolate crossaint', 'delicious chocolate crossaint', 7.00, 36),
('apple pie', 'warm apple pie with a dollop of vanilla ice cream', 10.00, 45),
('carrot cake', 'carrot cake with butter cream frosting', 8.00, 54);


INSERT INTO Products (productName, productDescription, productPrice, productQuantity)
VALUES ('new_product_name', 'new_product_description', 5.00, 63);


SELECT * FROM Products WHERE productID = 1;

SELECT * FROM Products;

UPDATE Products SET productName = 2, productDescription = 3, productPrice = 4, productQuantity = 5 WHERE productID = 1;



DELETE FROM Products WHERE productID = 2;

SELECT * FROM Products;

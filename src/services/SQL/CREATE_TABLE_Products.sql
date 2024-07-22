DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
	productID SERIAL PRIMARY KEY,
	productName VARCHAR(255) NOT NULL,
	productDescription TEXT,
	productPrice DECIMAL(10,2) NOT NULL, 
	productQuantity INTEGER NOT NULL 
);
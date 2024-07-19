
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;


global.DEBUG = true; 


// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const productsDal = require('./services/pg.products.dal');
const productRoutes = require('./routes/productsRoutes');

//Get all products
app.use('/products', productRoutes);

//home 
app.get('/', async (req, res) => { 
    res.render('index');
});

//start server
app.listen(port, () => {
    console.log('Server is running on port: ${PORT}');
});




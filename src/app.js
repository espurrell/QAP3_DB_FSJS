const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const apiRoutes = require('./');

const app = express();
const port = 3000;

global.DEBUG = true;    // Enable/disable debug messages

app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Middleware
app.use(methodOverride('_method')); // Enable the use of HTTP verbs such as PUT and DELETE
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
const productsDal = require('./services/products');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.render('index');
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
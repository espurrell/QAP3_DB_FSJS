const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.render('index');
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
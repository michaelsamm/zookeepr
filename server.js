const apiRoutes = require('./lib/routes/apiRoutes');
const htmlRoutes = require('./lib/routes/htmlRoutes');

const { animals } = require('./data/animals.json');
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// fix pulic files to be readily available
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})
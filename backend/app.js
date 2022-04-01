const express = require('express');
const app = express();
const cors = require('cors');

const bookController = require('./controllers/bookController');
const userController = require('./controllers/userController');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/books', bookController);
app.use('/api/users', userController);

module.exports = app;
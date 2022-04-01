const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;
const serverURI = 'http://localhost:' + PORT;
const mongoDB = process.env.MONGO_DB;

app.listen(PORT, () => console.log('Server is running on: ' + serverURI));

if(!mongoDB) {
  console.log('No connection')
} else {
  mongoose.connect(mongoDB, () => console.log('Connected to DB'))
}
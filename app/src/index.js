import express from 'express';
import bodyParser from 'body-parser';

import product from './routes/product.js';

const app = express();

// Set up mongoose connection
// const mongoose = require('mongoose');
// const dev_db_url =
// 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/product', product);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});

export default app;

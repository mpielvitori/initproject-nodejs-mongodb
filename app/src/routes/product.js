const express = require('express');
const router = express.Router();

const productService = require('../controllers/product');
router.get('/hello', productService.test);

module.exports = router;
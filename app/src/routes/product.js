import express from 'express';

import productService from '../controllers/product.js';

const router = express.Router();

router.get('/hello', productService);

export default router;

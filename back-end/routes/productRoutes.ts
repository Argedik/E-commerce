import { Router } from 'express';
import { Product } from '../models/product';

const router = Router();

// Get all Products
router.get('/', async (req, res) => {
	const products = await Product.findAll();
	res.json(products);
});

// Get one Product
router.get('/:id', async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	res.json(product);
});

// Create a new Product
router.post('/', async (req, res) => {
	const newProduct = await Product.create(req.body);
	res.json(newProduct);
});

// Update a Product
router.put('/:id', async (req, res) => {
	await Product.update(req.body, {
		where: { id: req.params.id },
	});
	res.json({ success: 'Product updated' });
});

// Delete a Product
router.delete('/:id', async (req, res) => {
	await Product.destroy({
		where: { id: req.params.id },
	});
	res.json({ success: 'Product deleted' });
});

export default router;

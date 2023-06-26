import { Router } from 'express';
import { User } from '../models/user';

const router = Router();

// Get all Users
router.get('/', async (req, res) => {
	const users = await User.findAll();
	res.json(users);
});

// Get one User
router.get('/:id', async (req, res) => {
	const user = await User.findByPk(req.params.id);
	res.json(user);
});

// Create a new User
router.post('/', async (req, res) => {
	const newUser = await User.create(req.body);
	res.json(newUser);
});

// Update a User
router.put('/:id', async (req, res) => {
	await User.update(req.body, {
		where: { id: req.params.id },
	});
	res.json({ success: 'User updated' });
});

// Delete a User
router.delete('/:id', async (req, res) => {
	await User.destroy({
		where: { id: req.params.id },
	});
	res.json({ success: 'User deleted' });
});

export default router;

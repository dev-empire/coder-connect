const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');

/**
 * Get all users endpoint
 * @returns An array of all the users
 */
router.get('/users', async (req, res) => {
	const result = await User.find({});
	res.status(200).json(result);
});

/**
 * Get single user by ID
 * @augments id
 */
router.get('/:id', auth, (req, res) => {
	User.findById(req.body.id)
		.select('-password')
		.then((user) => res.json(user));
});

/**
 * Create user endpoint
 * @augments name
 * @augments email
 * @augments password
 *
 * @returns A json with user's data
 */
router.post('/users', async (req, res) => {
	const { name, email, password } = req.body;

	/* check if all fields are filled*/

	if (!name || !email || !password) {
		res.status(400).json({ msg: 'Please Enter All Fields' });
	}

	/* VALIDATE USER'S REGISTRATION */

	const user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).json({ msg: 'User Already Exits' });

	const newUser = new User({
		name,
		email,
		password,
	});
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			newUser.save().then((user) => {
				jwt.sign({ id: user.id }, process.env.JWT_SECRET, (err, token) => {
					if (err) throw err;
					res.json({
						token,
						name: user.name,
						email: user.email,
					});
				});
			});
		});
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
	User.find()
		.sort()
		.then((users) => res.json(users));
});

router.post('/', async (req, res) => {
	const { email, password } = req.body;

	/* check if all fields are filled*/

	if (!email || !password) {
		res.status(400).json({ msg: 'Please Enter All Fields' });
	}

	/* VALIDATE USER'S REGISTRATION */

	User.findOne({ email }).then((user) => {
		if (!user) return res.status(400).json({ msg: 'User  Does Not Exits' });

		// COMPARE  / VALIDATE PASSWORD

		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

			jwt.sign({ id: user.id }, process.env.JWT_SECRET, (err, token) => {
				if (err) throw err;
				res.json({
					token,
					name: user.name,
					email: user.email,
					phone: user.phone,
					age: user.age,
					password: user.password,
				});
			});
		});
	});
});

router.get('/user', auth, (req, res) => {
	User.findById(req.body.id)
		.select('-password')
		.then((user) => res.status(200).json(user));
});

module.exports = router;

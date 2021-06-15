const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { hashPassword } = require('../utils/hashPassword');
const {
	sendRefreshToken,
	createRefreshToken,
} = require('../utils/jwtFunctions');
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
router.get('/:id', async (req, res) => {
	const user = await User.findById(req.params.id).select('-password');
	res.status(200).json({ user });
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
	const user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).json({ msg: 'User Already Exits' });

	const { name, email, password } = req.body;

	/* check if all fields are filled*/

	// Name field
	if (name.length < 3) {
		res.status(400).json({ msg: 'Please Enter All Fields' });
	}

	// Email field
	if (!email.includes('@') || email.length < 6) {
		res.status(400).json({ msg: 'Provide a valid email' });
	}

	// Password field
	if (password.length < 4) {
		res.status(400).json({ msg: 'Password must greater than 5' });
	}

	const hashedPassword = await hashPassword(password);

	/* VALIDATE USER'S REGISTRATION */

	const newUser = new User({
		name,
		email,
		password: hashedPassword,
	});

	await newUser.save().then((user) => {
		jwt.sign(
			{ id: user._id },
			process.env.JWT_SECRET,
			{ expiresIn: '3600' },
			(err, token) => {
				if (err) throw err;
				res.json({
					token,
					name: user.name,
					email: user.email,
				});
				req.cookies('connect', token, {
					httpOnly: true,
					maxAge: 1000 * 60 * 60,
				});
			}
		);
	});
});

router.post('/user/login', async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	try {
		if (!user) {
			throw new Error('could not find user');
		}

		const valid = await compare(password, user.password);

		if (!valid) {
			throw new Error('bad password');
		}
		const token = createRefreshToken(user);
		console.log(token);
		sendRefreshToken(res, token);

		return res.json({
			status: 'success',
			statusCode: 200,
			user,
		});
	} catch (error) {
		throw new Error(error);
	}
});

router.get('/user/auth', auth, async (req, res, next) => {
	const token = req.headers['x-auth-token'];
	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			return res.json({
				status: 'success',
				statusCode: 200,
				user: decoded,
			});
		} catch (e) {
			next(e);
		}
	}
});
module.exports = router;

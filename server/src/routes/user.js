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
const { validateFields } = require('../utils/validationUtil');

/**
 * Get all users endpoint
 * @returns An array of all the users
 */
router.get('/users', async (req, res) => {
	const result = await User.find({}).select('-password');
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
	if (user)
		return res.status(400).json({
			success: false,
			statusCode: 400,
			info: 'User already exists',
		});

	const { name, email, password } = req.body;

	const err = validateFields(email, name, password);
	if (err) res.status(400).json({ err });
	const hashedPassword = await hashPassword(password);

	/* VALIDATE USER'S REGISTRATION */

	// const newUser = new User({
	// 	name,
	// 	email,
	// 	password: hashedPassword,
	// });

	const input = {
		name,
		email,
		password: hashedPassword,
	};

	const n = await User.create(input);
	console.log(n);
	// const token = createRefreshToken(newUser);
	// console.log(token);
	// sendRefreshToken(res, token);
	return res.json({ n });
});

router.post('/user/login', async (req, res, next) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	try {
		if (!user) {
			res.status(400).json({
				status: 'failed',
				statusCode: 400,
				info: 'Could not find user',
			});
		}

		const valid = await compare(password, user.password);

		if (!valid) {
			res.status(400).json({
				status: 'failed',
				statusCode: 400,
				info: 'Incorrect password',
			});
		}
		const token = createRefreshToken(user);
		console.log(token);
		sendRefreshToken(res, token);

		return res.json({
			status: 'success',
			statusCode: 200,
			user,
		});
	} catch (err) {
		next(err);
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
		} catch (err) {
			next(err);
		}
	}
});
module.exports = router;

const jwt = require('jsonwebtoken');

const sendRefreshToken = (res, token) => {
	res.cookie('connect', token, {
		httpOnly: true,
		path: 'accessToken',
	});
};

const createRefreshToken = (user) => {
	return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
		expiresIn: '7d',
	});
};

module.exports = {
	createRefreshToken,
	sendRefreshToken,
};

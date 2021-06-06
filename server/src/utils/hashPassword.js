const bcrypt = require('bcryptjs');

const hashPassword = (str) =>
	bcrypt.genSalt(10, (salt) => {
		bcrypt.hash(str, salt, (err, hash) => {
			if (err) throw err;
			return hash;
		});
	});

module.exports = {
	hashPassword,
};

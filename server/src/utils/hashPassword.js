const bcrypt = require('bcryptjs');

const hashPassword = (str) => bcrypt.hash(str, 12);

module.exports = {
	hashPassword,
};

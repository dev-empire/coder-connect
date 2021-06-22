const validateFields = (email, name, password) => {
	// Name field
	if (name.length < 3) {
		const err = {
			field: 'name',
			statusCode: 400,
			info: 'name must at least be 3',
		};
		return err;
	}

	// Email field
	if (!email.includes('@') || email.length < 6) {
		const err = {
			field: 'email',
			statusCode: 400,
			info: 'invalid email',
		};
		return err;
	}

	// Password field
	if (password.length < 4) {
		const err = {
			field: 'password',
			statusCode: 400,
			info: 'password must be at least 4',
		};
		return err;
	}
};

module.exports = {
	validateFields,
};

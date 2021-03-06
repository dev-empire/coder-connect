const mongoose = require('mongoose');

const connetToDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		}),
			console.log('Mongoose connected!...');
	} catch (error) {
		console.error(error);
	}
};

module.exports = connetToDB;

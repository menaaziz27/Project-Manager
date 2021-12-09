const mongoose = require('mongoose');

exports.connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);

		console.log(`MongoDB connected on ${conn.connection.host}`);
	} catch (e) {
		console.log(`Error: ${e.message}`);
	}
};

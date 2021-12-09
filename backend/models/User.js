const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: String,
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		projects: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Project',
			},
		],
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;

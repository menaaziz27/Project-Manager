const mongoose = require('mongoose');
const { taskSchema } = require('./Task');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
	{
		title: String,
		description: String,
		tasks: [taskSchema],
		owner: {
			type: mongoose.Types.ObjectId,
			reef: 'User',
		},
	},
	{
		timestamps: true,
	}
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

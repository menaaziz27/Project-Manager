const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
	{
		title: String,
		description: String,
		tasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }],
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

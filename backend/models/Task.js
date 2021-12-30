const mongoose = require('mongoose');
const { STATUS } = require('../utils/constants');
const Schema = mongoose.Schema;
const Project = require('./Project');

const taskSchema = new Schema(
	{
		content: String,
		status: {
			type: String,
			enum: [STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE],
			default: STATUS.TODO,
		},
		project: {
			type: mongoose.Types.ObjectId,
			ref: 'Project',
		},
	},
	{
		timestamps: true,
	}
);

taskSchema.pre('remove', async function (next) {
	const task = this;

	await Project.findByIdAndUpdate({ _id: task.project }, { $pull: { tasks: task._id } });
	next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

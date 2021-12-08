const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const taskSchema = new Schema(
	{
		content: String,
		status: {
			type: String,
			enum: [STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE],
			default: STATUS.TODO,
		},
	},
	{
		timestamps: true,
	}
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

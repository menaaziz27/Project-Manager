const mongoose = require('mongoose');
const { STATUS } = require('../utils/constants');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
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

// export default Task;
// export { taskSchema };
// exports.taskSchema;
module.exports = { Task, taskSchema };

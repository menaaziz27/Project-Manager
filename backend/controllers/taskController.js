const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const { Task } = require('../models/Task');

exports.getTasks = asyncHandler(async (req, res, next) => {
	const { projectId } = req.params;

	const tasks = await Task.find({ project: projectId });

	res.status(200).json(tasks);
});

exports.createTask = asyncHandler(async (req, res, next) => {
	const { content } = req.body;
	const { projectId } = req.params;

	let project = await Project.findById(projectId);
	if (!project) {
		res.status(401);
		throw new Error('Cannot add a task to un existing project.');
	}
	let task = await new Task({ content });
	task.content = content;
	task.project = project._id;
	project.tasks.push(task);
	await project.save();
	await task.save();

	res.status(200).json({ task, project });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
	const { taskId } = req.params;
	let updatedTask = await Task.findOneAndUpdate({ _id: taskId }, { content: req.body.content }, { new: true });

	res.status(200).json(updatedTask);
});
// exports.updateTask = asyncHandler(async (req, res, next) => {
// 	const { projectId, taskId } = req.params;
// 	let project = await Project.findOneAndUpdate(
// 		{ _id: projectId, 'tasks._id': taskId },
// 		{
// 			$set: { 'tasks[$].content': req.body.content, 'tasks[$].status': req.body.status },
// 		}
// 	);
// 	if (!project) {
// 		res.status(401);
// 		throw new Error('Cannot add a task to un existing project.');
// 	}

// 	res.status(200).json({ project });
// });

exports.deleteTask = asyncHandler(async (req, res, next) => {
	const { taskId } = req.params;
	let deletedTask = await Task.findOneAndRemove(taskId, { new: true });
	console.log(deletedTask);
	if (!deletedTask) {
		res.status(401);
		throw new Error('Cannot delete a task that not exist.');
	}

	res.status(200).json({ message: 'deleted!' });
});

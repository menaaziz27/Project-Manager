const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const { Task } = require('../models/Task');

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
	project.tasks.push(task);
	await project.save();
	await task.save();

	res.status(200).json({ task, project });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
	const { projectId, taskId } = req.params;
	let project = await Project.findOneAndUpdate(
		{ _id: projectId, 'tasks._id': taskId },
		{
			$set: { 'tasks[$].content': req.body.content, 'tasks[$].status': req.body.status },
		}
	);
	if (!project) {
		res.status(401);
		throw new Error('Cannot add a task to un existing project.');
	}

	res.status(200).json({ project });
});

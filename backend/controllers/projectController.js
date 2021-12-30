const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

exports.createProject = asyncHandler(async (req, res, next) => {
	const { title, description } = req.body;

	const project = await Project.create({ title, description, owner: req.user._id });

	req.user.projects.push(project);

	await req.user.save();

	res.status(201).json(project);
});

exports.getProjects = asyncHandler(async (req, res, next) => {
	const projects = await Project.find({});

	res.status(201).json(projects);
});

exports.getMyProjects = asyncHandler(async (req, res, next) => {
	const projects = await Project.find({ owner: req.user });

	res.status(201).json(projects);
});

exports.getProject = asyncHandler(async (req, res, next) => {
	const project = await Project.findById(req.params.id).populate('tasks');

	if (!project) {
		res.status(401);
		throw new Error('No project found!');
	}

	res.status(200).json(project);
});

exports.editProject = asyncHandler(async (req, res, next) => {
	const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });

	res.status(200).json(updatedProject);
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
	const deletedProject = await Project.findByIdAndDelete(req.params.id, { new: true });

	res.status(200).json({ message: 'deleted', project: deletedProject });
});

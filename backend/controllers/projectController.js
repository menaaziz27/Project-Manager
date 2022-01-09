const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

exports.createProject = asyncHandler(async (req, res) => {
	const { title, description } = req.body;

	const project = await Project.create({ title, description, owner: req.user._id });

	req.user.projects.push(project);

	await req.user.save();

	res.status(201).json(project);
});

exports.getProjects = asyncHandler(async (req, res) => {
	const query = req?.query;
	let projects;
	if (!query) {
		projects = await Project.find({});
	} else {
		console.log(query);
	}

	res.status(201).json(projects);
});

exports.getMyProjects = asyncHandler(async (req, res) => {
	const query = req.query.q
		? {
				$or: [
					{
						title: { $regex: `${req.query.q}`, $options: 'i' },
					},
					{
						description: { $regex: `${req.query.q}`, $options: 'i' },
					},
				],
				$and: [{ owner: req.user }],
		  }
		: {};
	const projects = await Project.find({ ...query });

	res.status(201).json(projects);
});

exports.getProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id).populate('tasks');

	if (!project) {
		res.status(401);
		throw new Error('No project found!');
	}

	res.status(200).json(project);
});

exports.editProject = asyncHandler(async (req, res) => {
	const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });

	res.status(200).json(updatedProject);
});

exports.deleteProject = asyncHandler(async (req, res) => {
	const deletedProject = await Project.findByIdAndRemove(req.params.id, { new: true });

	res.status(200).json({ message: 'deleted', project: deletedProject });
});

exports.searchProjects = asyncHandler(async (req, res) => {
	const term = req.query.q.trim();

	const foundedProjects = await Project.find({
		$or: [
			{
				title: { $regex: `${term}`, $options: 'i' },
			},
			{
				description: { $regex: `${term}`, $options: 'i' },
			},
		],
	});

	res.status(200).json(foundedProjects);
});

const express = require('express');
const { Router } = express;
const router = Router();

const {
	createProject,
	getProjects,
	getProject,
	editProject,
	deleteProject,
} = require('../controllers/projectController');

router.route('/api/projects').post(createProject).get(getProjects);
router.route('/api/projects/:id').get(getProject).put(editProject).delete(deleteProject);

module.exports = router;

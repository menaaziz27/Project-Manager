const express = require('express');
const { Router } = express;
const router = Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const {
	createProject,
	getProjects,
	getProject,
	editProject,
	deleteProject,
	getMyProjects,
	searchProjects,
} = require('../controllers/projectController');

router
	.route('/projects')
	.post(passport.authenticate('jwt', { session: false }), createProject)
	.get(getProjects);

router.route('/projects/me').get(passport.authenticate('jwt', { session: false }), getMyProjects);

router
	.route('/projects/:id')
	.get(getProject)
	.put(passport.authenticate('jwt', { session: false }), editProject)
	.delete(passport.authenticate('jwt', { session: false }), deleteProject);

router.route('/search').get(searchProjects);
module.exports = router;

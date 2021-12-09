const express = require('express');
const { Router } = express;

const router = Router();
const { createTask, updateTask } = require('../controllers/taskController');

// router.route('/api/tasks/:id').post(createTask);
// tasks
router.route('/api/projects/:projectId/tasks').post(createTask);
router.route('/api/projects/:projectId/tasks/:taskId').put(updateTask);

module.exports = router;

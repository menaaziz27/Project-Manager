const express = require('express');
const { Router } = express;

const router = Router();
const { createTask, updateTask, getTasks, deleteTask } = require('../controllers/taskController');

// router.route('/api/tasks/:id').post(createTask);
// tasks
router.route('/projects/:projectId/tasks').get(getTasks).post(createTask);
router.route('/projects/:projectId/tasks/:taskId');
router.route('/tasks/:taskId').delete(deleteTask).put(updateTask);

module.exports = router;

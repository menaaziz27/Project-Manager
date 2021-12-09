const express = require('express');
const { Router } = express;

const router = Router();
const { createTask } = require('../controllers/taskController');

router.route('/api/tasks/:id').post(createTask);

module.exports = router;

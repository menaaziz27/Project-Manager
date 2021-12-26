const express = require('express');
const { register, login, logout } = require('../controllers/authController');

const { Router } = express;
const passport = require('passport');
const passportConfig = require('../config/passport');
const router = Router();

router.route('/auth/register').post(register);
router.route('/auth/login').post(passport.authenticate('local', { session: false }), login);
router.route('/auth/logout').get(passport.authenticate('jwt', { session: false }), logout);
module.exports = router;

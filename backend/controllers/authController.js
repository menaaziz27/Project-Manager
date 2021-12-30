const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signToken = _id => {
	return jwt.sign({ _id }, 'mysecretkey', { expiresIn: '1d' });
};

exports.register = asyncHandler(async (req, res, next) => {
	const { username, email, password } = req.body;

	let hashedPassword = await bcrypt.hash(password, 8);

	const user = new User({ username, email, password: hashedPassword });

	await user.save();

	res.status(201).json(user);
});

exports.login = asyncHandler(async (req, res, next) => {
	if (req.isAuthenticated()) {
		const { _id, email } = req.user;
		const token = signToken(_id);
		res.cookie('access_token', token, { httpOnly: true, sameSite: true, maxAge: new Date().getTime() + 31536000000 });
		res.status(200).json({ user: { email, _id, token } });
	}
});

exports.logout = asyncHandler(async (req, res, next) => {
	res.clearCookie('access_token');
	res.status(200).json({ message: 'user is logged out' });
});

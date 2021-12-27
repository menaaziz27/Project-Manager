const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');

const cookieExtractor = req => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies['access_token'];
	}
	return token;
};

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: cookieExtractor,
			secretOrKey: 'mysecretkey',
		},
		(payload, done) => {
			User.findById({ _id: payload._id }, (err, user) => {
				if (err) {
					return done(err, false);
				}
				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			});
		}
	)
);

passport.use(
	new localStrategy({ usernameField: 'email' }, (email, password, done) => {
		User.findOne({ email: email })
			.then(user => {
				if (!user) {
					return done({
						message: 'that email is not registered',
					});
				}

				if (user) {
					// match his pw
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if (err) {
							return done(err, false, 'Something went wrong');
						}
						if (isMatch) {
							return done(null, user);
						}
						// if not matches
						return done({ message: 'password incorrect' });
					});
				}
			})
			.catch(err => console.log(err));
	})
);

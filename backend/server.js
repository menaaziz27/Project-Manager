const express = require('express');
const passport = require('passport');
const expressSession = require('express-session');
const app = express();

app.use(express.json());
app.use(
	expressSession({
		secret: 'this secret is secret',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
	res.send('Hello');
});

app.listen(5000, () => {
	console.log('server is running on port 5000');
});

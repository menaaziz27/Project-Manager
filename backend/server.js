const express = require('express');
const passport = require('passport');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv');
const { connectDB } = require('./utils/db');
const expressSession = require('express-session');
const projectRoutes = require('./routes/project');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const cookieParser = require('cookie-parser');
const cors = require('cors');
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);

// app.use(
// 	expressSession({
// 		secret: 'this secret is secret',
// 		resave: true,
// 		saveUninitialized: true,
// 	})
// );

app.use(passport.initialize());
// app.use(passport.session());

app.use('/api', authRoutes);
app.use('/api', projectRoutes);
app.use('/api', taskRoutes);
app.use('/api', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
	console.log('server is running on port 5000');
});

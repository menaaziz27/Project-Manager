import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { projectReudcer } from './projectsReducer';
import { tasksReducer } from './tasksReducer';

export default combineReducers({
	authData: auth,
	tasks: tasksReducer,
	project: projectReudcer,
});

import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { projectReudcer } from './projectsReducer';

export default combineReducers({
	authData: auth,
	projectsData: projectReudcer,
	// tasks: tasksReducer,
});

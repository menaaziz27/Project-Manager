import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FETCH_PROJECTS } from '../constants/actionTypes';

export const projectReudcer = (projects = [], action) => {
	switch (action.type) {
		case FETCH_PROJECTS:
			return action?.payload;
		case CREATE_PROJECT:
			return [...projects, action?.payload];
		case UPDATE_PROJECT:
			return projects.map(project => (project._id === action.payload._id ? action.payload : project));
		case DELETE_PROJECT:
			return projects.filter(project => project._id !== action.payload._id);
		default:
			return projects;
	}
};

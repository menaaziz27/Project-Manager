import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from '../constants/actionTypes';

export const projectReudcer = (projects = {}, action) => {
	switch (action.type) {
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

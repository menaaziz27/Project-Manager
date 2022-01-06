import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, FETCH_PROJECTS } from '../constants/actionTypes';

export const projectReudcer = (state = { projects: [], term: '' }, action) => {
	switch (action.type) {
		case FETCH_PROJECTS:
			return { ...state, projects: action?.payload };
		case CREATE_PROJECT:
			return { ...state, projects: [...state.projects, action?.payload] };
		case UPDATE_PROJECT:
			let updatedProjects = state.projects.map(project =>
				project._id === action.payload._id ? action.payload : project
			);
			return { ...state, projects: updatedProjects };
		case DELETE_PROJECT:
			let newProjects = state.projects.filter(project => project._id !== action.payload._id);
			return { ...state, projects: newProjects };
		default:
			return state;
	}
};

import * as api from '../api';
import { CREATE_PROJECT, DELETE_PROJECT, FETCH_PROJECTS, SEARCH_PROJECT } from '../constants/actionTypes';

export const fetchProjects = () => async dispatch => {
	try {
		const { data } = await api.getProjects();

		dispatch({ type: FETCH_PROJECTS, payload: data });
	} catch (e) {
		console.log(e);
	}
};
export const createProject = project => async dispatch => {
	try {
		const { data } = await api.createProject(project);

		dispatch({ type: CREATE_PROJECT, payload: data });
	} catch (e) {
		console.log(e);
	}
};

export const deleteProject = id => async dispatch => {
	try {
		const { data } = await api.deleteProject(id);

		dispatch({ type: DELETE_PROJECT, payload: data.project });
	} catch (e) {
		console.log(e);
	}
};

export const searchProject = term => async dispatch => {
	try {
		const { data } = await api.searchForProject(term);
		console.log(data);
		// dispatch({type: SEARCH_PROJECT, payload: data})
	} catch (e) {
		console.log(e);
	}
};

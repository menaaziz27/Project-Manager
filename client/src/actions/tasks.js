import * as api from '../api';
import { CREATE_TASK, UPDATE_TASK, DELETE_TASK, FETCH_TASKS } from '../constants/actionTypes';

export const getTasks = projectId => async dispatch => {
	try {
		const { data } = await api.fetchTasks(projectId);

		console.log(data);
		dispatch({ type: FETCH_TASKS, payload: data });
	} catch (e) {
		console.log(e);
	}
};
export const createTaskAction = (projectId, content) => async dispatch => {
	try {
		const { data } = await api.createTask(projectId, content);

		console.log(data);
		// dispatch({ type: CREATE_TASK, payload: data });
	} catch (e) {
		console.log(e);
	}
};

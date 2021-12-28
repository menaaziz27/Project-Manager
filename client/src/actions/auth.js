import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from '../constants/actionTypes';
import * as api from '../api';

export const register = formData => async dispatch => {
	try {
		dispatch({ type: AUTH_REQUEST });
		await api.register(formData);
		dispatch({ type: AUTH_SUCCESS });
	} catch (e) {
		dispatch({
			type: AUTH_FAIL,
			payload: e.response && e.response.data.message ? e.response.data.message : e.message,
		});
	}
};

export const login = (formData, navigate) => async dispatch => {
	try {
		dispatch({ type: AUTH_REQUEST });
		const { data } = await api.login(formData);

		dispatch({ type: AUTH_SUCCESS, payload: data });

		localStorage.setItem('userInfo', JSON.stringify(data));

		navigate('/');
	} catch (e) {
		dispatch({
			type: AUTH_FAIL,
			payload: e.response && e.response.data.message ? e.response.data.message : e.message,
		});
	}
};

export const logout = () => async dispatch => {
	try {
		await api.logout();
		dispatch({ type: LOGOUT });
		localStorage.removeItem('userInfo');
	} catch (e) {
		console.log(e);
	}
};

import {
	LOGOUT,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../constants/actionTypes';
import * as api from '../api';

export const register = formData => async dispatch => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });
		console.log('here');
		const { data } = await api.register(formData);

		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: e.response && e.response.data.message ? e.response.data.message : e.message,
		});
	}
};

export const login = formData => async dispatch => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		const { data } = await api.login(formData);

		dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });

		console.log(data);

		localStorage.setItem('userInfo', JSON.stringify(data.user));
	} catch (e) {
		dispatch({
			type: USER_REGISTER_FAIL,
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

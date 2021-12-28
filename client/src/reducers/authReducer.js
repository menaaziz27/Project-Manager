import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from '../constants/actionTypes';

export const auth = (state = {}, action) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return { loading: true };
		case AUTH_SUCCESS:
			return { loading: false, user: action?.payload?.user };
		case AUTH_FAIL:
			return { loading: false, error: action.payload };
		case LOGOUT:
			return { ...state, user: null };
		default:
			return state;
	}
};

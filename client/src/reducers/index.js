import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './authReducer';

export default combineReducers({
	userRegister: userRegisterReducer,
	userData: userLoginReducer,
});

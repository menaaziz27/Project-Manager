import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const userDataFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	authData: userDataFromStorage,
};

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

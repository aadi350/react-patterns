import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import CartReducer from './reducers/CartReducer';

export default createStore(
	combineReducers({ CartReducer }),
	{},
	composeWithDevTools(applyMiddleware(thunk))
);

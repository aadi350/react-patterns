import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myReducer from './reducers/myReducer';
import thunk from 'redux-thunk';

export default createStore(
	combineReducers({ myReducer }),
	{},
	composeWithDevTools(applyMiddleware(thunk))
);
// middleware import

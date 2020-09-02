import React from 'react';
import { connect } from 'react-redux';
import {
	myAction,
	myAsyncAction,
	myAsyncRequestAction,
} from '../actions/myActions';

const App = props => {
	return (
		<div>
			{props.appReducerName.variable}
			<button onClick={() => props.setVar('Param')}>
				Change State Variable
			</button>
			<button onClick={() => props.setVarAsync('Param')}>
				Change State Variable Async
			</button>
			<hr />
			<button onClick={() => props.getNetworkData()}>
				Start Async Network Request
			</button>
			<div>{props.appReducerName.data}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		appReducerName: state.myReducer,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setVar: param => {
			dispatch(myAction(param));
		},
		setVarAsync: param => {
			dispatch(myAsyncAction(param));
		},
		getNetworkData: () => {
			dispatch(myAsyncRequestAction());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

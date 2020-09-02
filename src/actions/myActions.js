//Axios is used for API interactions
import axios from 'axios';
//basic Action format
//param is passed from the front-end
//type is a MUST
//payload is convention, any other parameters can be used here
export const myAction = param => {
	return {
		type: 'ACTION_TYPE',
		payload: param,
	};
};

export const myAsyncAction = param => {
	return dispatch => {
		//reach out to server
		setTimeout(() => {
			dispatch({
				type: 'ASYNC_ACTION_TYPE',
				payload: param,
			});
		}, 2000);
	};
};

//For Asynchronous Action Calls, an Async Request Action-CREATOR is used to
//First: dispatch the AsyncRequest (which e.g. sets a loading variable to True)
//Second: Executes and waits on the API call response
//Last: dispatches the Async Request has been receieved action, connected to a
//  reducer function which now resets the loading variable, and knows how to
//  handle the returned data
//  OR:
//      throw an error
export const myAsyncRequestAction = () => {
	return dispatch => {
		dispatch(myAsyncRequest(null));
		return axios.get('https://api.github.com/orgs/axios').then(res => {
			dispatch(myAsyncRequestReceived(res));
		});
	};
};

export const myAsyncRequest = param => {
	return {
		type: 'ASYNC_REQUEST',
		payload: param,
	};
};

export const myAsyncRequestReceived = data => {
	return {
		type: 'ASYNC_REQUEST_RECEIVED',
		payload: JSON.stringify(data),
	};
};

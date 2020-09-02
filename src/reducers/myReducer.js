This is a Reducer 
// Reducers connect a global application state to 
// things(actions) performed ON that state 

// Actions(see myActions.js) 'call'(wrong technical description, but easier to conceptualise)
// the Reducer function
    
// An action MUST pass a type, which is used by the reducer to conditionally
// determine the right functions/things to do when that action is done/run/called

const myReducer = (
	state = {
		variable: 'Initial state variable',
		loading: false,
		data: 'Initial Data',
	},
	action
) => {
	switch (action.type) {
		case 'ACTION_TYPE':
            console.log('[myReducer] ACTION_TYPE');
            //state must be updated immutably
			state = {
				...state,
				variable: action.payload,
            };
            //and always be returned at the end
			return state;
		case 'ASYNC_ACTION_TYPE':
			console.log('[myReducer] ASYNC_ACTION_TYPE');
			state = {
				...state,
				variable: action.payload,
			};
            return state;
        //Async actions are handled differently (see myActions)
        //Three reducer cases are usually used
        //  Request: where (e.g.) a 'loading' variable can be set to true
        //      to display a spinner or something, and your front-end
        //      component would listen for this loading variable
        //  Request Received: where that loading variable is now set to false
        //      and the application state (data to store request response) is updated
        //  Request Failed (not implemented here): loading variable is set to false
        //      but the application state (data to store request response) is not
        //      changed
		case 'ASYNC_REQUEST':
			console.log('[myReducer] ASYNC_REQUEST');
			state = {
				...state,
				loading: true,
			};
			return state;
		case 'ASYNC_REQUEST_RECEIVED':
			console.log('[myReducer] ASYNC_REQUEST_RECEIVED');
			console.log(action.payload);
			state = {
				...state,
				loading: false,
				data: action.payload,
			};
			return state;
		default:
			console.log('WRONG ACTION TYPE');
			return state;
	}
};

export default myReducer;

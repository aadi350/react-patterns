import * as actions from '../actions/ActionTypes';

const CartReducer = (
	state = {
		cartItems: [],
		loading: false,
	},
	action
) => {
	switch (action.type) {
		case actions.ADD_TO_CART:
			console.log('[CartReducer] ADD_TO_CART');

			let cartItemsNew = state.cartItems;
			console.log(cartItemsNew);
			cartItemsNew.push(action.payload);
			state = {
				...state,
				cartItems: cartItemsNew,
			};
			break;
		default:
			break;
	}

	return state;
};

export default CartReducer;

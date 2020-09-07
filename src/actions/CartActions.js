import * as actions from './ActionTypes';

export const AddToCart = productId => {
	return {
		type: actions.ADD_TO_CART,
		payload: productId,
	};
};

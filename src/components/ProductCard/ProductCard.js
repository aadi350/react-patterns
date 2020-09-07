import React from 'react';
import './ProductCard.scss';
import { connect } from 'react-redux';
import { AddToCart } from '../../actions/CartActions';
import { MdAddShoppingCart } from 'react-icons/md';

const ProductCard = (
	props,
	{
		productId = 'id',
		productImage = 'Image',
		productTitle = 'Title',
		productPrice = '$0.00',
	}
) => {
	return (
		<div id={productId} className='CardFrame'>
			<div className='CardImageWrapper'>{productImage}</div>
			<div className='CardDetailsWrapper'>
				<div className='CardTextWrapper'>
					<div className='CardTextTitle'>{productTitle}</div>
					<div className='CardTextPrice'>{productPrice}</div>
				</div>
				<div className='CardButtons'>
					<MdAddShoppingCart
						onClick={e => {
							props.addToCart(productId);
						}}
						className='CardButton'
					/>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addToCart: productId => {
			dispatch(AddToCart(productId));
		},
	};
};

export default connect(null, mapDispatchToProps)(ProductCard);

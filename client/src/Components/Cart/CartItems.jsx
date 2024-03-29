import React, { useEffect, useState } from 'react';
import "./CartItems.css"
const CartItem = ({title, img, amount, price, id, itemCount, setItemCount}) => {

	// Add-to-cart function
	const AddToCart = () => {
		setItemCount(itemCount++ )
	}
	const RemoveFromCart = () => {
		setItemCount(itemCount--)
	}

	
	

	return (
		<div className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				
			</div>
			<div>
				{/* increase amount */}
				<button onClick={AddToCart} className='add-to-cart'>Add to cart</button>
				{/* remove button */}
				<button onClick={RemoveFromCart} className='remove-btn' >
					Remove from Cart
				</button>
				{/* <button className='amount-btn'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
						<path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
					</svg>
				</button> */}
				{/* amount */}
				{/* <p className='amount'>{amount}</p> */}
				{/* decrease amount */}
				{/* <button
					className='amount-btn'
					// onClick={() => {
					// 	if (amount === 1) {
					// 		return remove();
					// 	} else {
					// 		return toggle('dec');
					// 	}
					// }}
				>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
						<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
					</svg>
				</button> */}
			</div>
		</div>
	);
};


export default CartItem;
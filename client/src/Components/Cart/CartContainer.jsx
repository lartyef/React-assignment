import React from 'react';
import CartItem from './CartItems';
import items from "./Items"
import "./CartItems.css"
import { useState, useEffect } from 'react';




const CartContainer = ({itemCount, setItemCount}) => {
	// if (items.length === 0) {
	// 	return (
	// 		<section className='cart'>
	// 			{/* cart header */}
	// 			<header>
	// 				<h2>your cart</h2>
	// 				<h4 className='empty-cart'>is currently empty</h4>
	// 			</header>
	// 		</section>
	// 	);
	// }


	const [data, setData] = useState(null);

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        console.log(jsonData.products); 
        setData(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

return (
    <section className='cart'>
        {/* cart header */}
        <header>
            <h2>your cart</h2>
        </header>
        {/* cart items */}
        <article>
            {data && data.products.map((product) => (
                <div key={product.id}>
                    <CartItem {...product} itemCount={itemCount} setItemCount={setItemCount} />
                    <div style={{ width: "50%", height: "40%" }}>
                    <img width={100} height={150} src={product.thumbnail} alt="image" />
                    </div>
                </div>
                
            ))}

        </article>
        {/* cart footer */}
        <footer>
            <hr />
            {/* <div className='cart-total'>
                <h4>
                    total <span>${total}</span>
                </h4>
            </div> */}
            {/* <button
                className='btn clear-btn'
                onClick={() => dispatch({ type: CLEAR_CART })}
            >
                clear cart
            </button> */}
        </footer>
    </section>
);

};


export default CartContainer;
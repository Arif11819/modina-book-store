import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div className='cart'>
            <h1> Selected Books</h1>
            {
                cart.map(ct => <p className='cart-name'>{ct.name}</p>)
            }
            <button className='choose-btn'>
                <p className='btn-text'>CHOOSE 1 FOR ME</p>
            </button>

        </div >
    );
};

export default Cart;
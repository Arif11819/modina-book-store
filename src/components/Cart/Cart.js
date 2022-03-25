import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Selected Books</h1>
            <p> item: {cart.length}</p>
        </div>
    );
};

export default Cart;
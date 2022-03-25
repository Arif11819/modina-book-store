import React from 'react';
import './Product.css'

const Product = (props) => {
    const { picture, name, price } = props.product;
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className='product-info'>
                <h2>Name: {name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;
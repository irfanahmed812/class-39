import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    // console.log(product);

    const { img, name, price, brand, category, ratting, color } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Category: {category}</p>
                <p>Color: {color}</p>
                <p>Brand: {brand}</p>
                <p>Price: <span className='fs-4'>{price}$</span></p>
                <p><small>Ratting: <span className='ms-1'><FontAwesomeIcon className='text-warning' icon={faStar} /> <FontAwesomeIcon className='text-warning' icon={faStar} /> <FontAwesomeIcon className='text-warning' icon={faStar} /> <FontAwesomeIcon className='text-warning' icon={faStar} /> <FontAwesomeIcon className='text-warning' icon={faStar} /></span> <span className='ms-1'>{ratting}k+</span></small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='ms-2'>Add To Cart</span></button>
        </div>
    );
};

export default Product;
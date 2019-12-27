import React from 'react';
import {connect} from 'react-redux';

import { clearItemFomCart } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFomCart }) => {
    
    const { name, imageUrl, price, quantity } = cartItem;

    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItemFomCart(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    clearItemFomCart: item => dispatch(clearItemFomCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

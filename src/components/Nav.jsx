import React from 'react';
import '../css/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Nav = (props) => {
    return (
        <div className="nav">
            <h1>Catalog</h1>
            <div className="cart-widget">
                <div className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                <div className="length">{props.cartItems.length}</div>
            </div>
        </div>
    )
}

export default Nav;
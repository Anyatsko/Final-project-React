

import React from "react";
import {useNavigate} from "react-router-dom"
import './EmptyCart.css'

const EmptyCart = ({message = 'Cart is empty'}) => {
    const navigate = useNavigate();
    return (
      <div className='emptyCart'>
        <p>{message}</p>
        <button onClick={() => navigate.push('/', {replace: true})}>
           <i className='fas fa-long-arrow-alt-left'></i> Shop Now
        </button>
      </div>
    );
  };
  
  export default EmptyCart;
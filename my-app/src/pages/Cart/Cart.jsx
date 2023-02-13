import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import './Cart.css';
import EmptyCart from "../../components/Cart/EmpryCart/EmtyCart";
import Logo from "../../components/common/Logo/Logo";
import Menu from "../../components/common/Menu/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal,
  } from '../../redux/Cart/cart.selector'

  const Cart = ({ cartCount, cartList, cartTotal }) => {
    return (
      <>
        <div className='cart-header'>
          <Logo />
        </div>
        {cartCount === 0 ? (
          <EmptyCart />
        ) : (
          <div className='orders'>
            <h1 className='orders-heading'>Your Orders</h1>
            <div className='orders-menu'>
              <Menu list={cartList} />
            </div>
            <h3 className='orders-total'>Your Total ${cartTotal}</h3>
          </div>
        )}
      
      </>
    );
  };
  
  const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal,
  });
  
  export default connect(mapStateToProps)(Cart);
  
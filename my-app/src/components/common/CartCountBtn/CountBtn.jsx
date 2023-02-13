import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/Cart/cart.selector';
import './CountBtn.css';

const ButtonCartCount = ({ cartCount }) => {
  const history = useNavigate();
  return (
    <div className='cartCountBtn' onClick={() => history.push('/cart')}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);


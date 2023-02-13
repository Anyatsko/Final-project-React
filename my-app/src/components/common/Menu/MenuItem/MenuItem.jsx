import React from 'react'
import { connect } from 'react-redux';
import './MenuItem.css'
import ButtonAddREmove from '../../ButtonAddRemove/ButtonAddRemove'
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount, selectCartItems } from '../../../../redux/Cart/cart.selector'
import { cartAddItem, cartRemoveItem } from '../../../../redux/Cart/cart.action';



const MenuItem = ({item, cartCount, cartList, cartAddItem, cartRemoveItem}) => {
const {id, name, info, price, img} = item

const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

    return (
        <div className="menu-tem">
            <img src={img} alt="item"/>
            <div className="item-head_desrc">
                 <p className="item-head_name">{name}</p> 
                 <p className="item-head_info"><small>{info}</small></p> 
                 </div>
            
            <div className="menu-item_descr">
                <span className="menu-price">${price}</span>
                <ButtonAddREmove quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}/>
            </div>

            
        </div>
        

    )
}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
  });

  const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (item) => dispatch(cartAddItem(item)),
    cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
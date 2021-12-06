import React from 'react';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
} from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    {/* <CartItemsContainer>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
       </CartItemsContainer> */}
    <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
  </CartDropdownContainer>
);

export default CartDropdown;

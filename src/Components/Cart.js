import React, { Component } from 'react'
import { ProductConsumer } from './context';
import CartItem from './CartItem';

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cart} = value;
          if(cart.length > 0){
            return(
              cart.map(val => <CartItem product={val}></CartItem>)
            )
          }
          else {
            return (
              <h1>emty</h1>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}
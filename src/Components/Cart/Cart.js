import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import CartItem from './CartItem';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center m-5">Your cart</h1>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            const { plus, minus, remove} = value;
            if (cart.length > 0) {
              return (
                <div className="container bg-light">
                  {cart.map(val => <CartItem key={val.id} product={val} minus={minus} plus={plus} remove={remove}></CartItem>)}
                </div>
              )
            }
            else {
              return (
                <h1 className="text-center">emty</h1>
              )
            }
          }}
        </ProductConsumer>
      </div>
    )
  }
}
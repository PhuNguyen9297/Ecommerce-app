import React, { Component } from 'react'
import { ProductConsumer } from '../context';

export default class Checkout extends Component {
  render() {
    return (
        <ProductConsumer>
            {value =>{
                const { cart} = value.cart;
                return(
                    <h1></h1>
                )
            }}
        </ProductConsumer>
    )
  }
}

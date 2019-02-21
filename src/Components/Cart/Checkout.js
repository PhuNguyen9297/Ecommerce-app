import React, { Component } from 'react'
import { ProductConsumer } from '../context';

export default class Checkout extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart, emtyCart } = value;
          return (
            <div>
              <button className="btn-danger btn mb-4" onClick={emtyCart}>EMPTY CART</button>
              <div className="text-right">
                <p className="font-weight-bold">DISCOUNT: $0</p>
                <p className="font-weight-bold">TOTAL: ${cart.reduce((sum, prod) =>
                  sum += prod.price * prod.count, 0).toFixed(2)}</p>
                <div className="d-flex justify-content-end">
                  <form className="form-inline">
                    <label for="coupon">If you have a coupon code, please enter it here</label>
                    <input type="text" id="coupon" className="m-1 form-control"></input>
                    <button type="submit" className="btn btn-primary">APPLY</button>
                  </form>
                </div>
                <button className="btn btn-danger my-3">CHECKOUT</button>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

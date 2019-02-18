import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from './context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <h1 className="text-center text-justify col-sm-6 col-5 mx-auto mb-5">Our Product</h1>
          <div className="row">
            <ProductConsumer>
              {(value) => value.products.map(val => <Product key={val.id} product={val}/>)
              }
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
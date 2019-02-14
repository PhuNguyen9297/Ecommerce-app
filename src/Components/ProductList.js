import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center py-5">Our Product</h1>
        <Product />
      </React.Fragment>
    )
  }
}

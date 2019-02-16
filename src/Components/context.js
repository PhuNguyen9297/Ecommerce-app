import React, { Component } from 'react'
import {data} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state={
    products: data
  };
  handleDetail(){
    console.log("hello detail");
  };
  addToCart(){
    console.log("hello Cart");
  };

  render() {
    return (
      <ProductContext.Provider value={{
        products:this.state.products,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider};
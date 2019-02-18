import React, { Component } from 'react'
import {data} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state={
    products: [],
    productDetail: {}
  };
  componentDidMount(){
    this.setProduct();
  }
  setProduct(){
    let tempProd = [];
    data.forEach(val => {
      tempProd = [...tempProd, {...val}];
    })
    this.setState({
      products:tempProd
    })
  }
  getItem = (id) => this.state.products.find(val => val.id == id);

  handleDetail = (id ) => {
    let detail = this.getItem(id);
    this.setState({
      productDetail: detail
    })
  };
  addToCart(){
    console.log("hello Cart");
  };
  render() {
    return (
      <ProductContext.Provider value={{
        products: this.state.products,
        productDetail: this.state.productDetail,
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
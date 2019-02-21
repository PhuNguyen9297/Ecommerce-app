import React, { Component } from 'react'
import { data } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetail: {},
    cart: [],
    modalState: false,
    modalProduct: {}
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct() {
    let tempProd = [];
    data.forEach(val => {
      tempProd = [...tempProd, { ...val }];
    })
    this.setState({
      products: tempProd
    })
  }
  getItem = (id) => this.state.products.find(val => val.id === id);

  handleDetail = (id) => {
    let detail = this.getItem(id);
    this.setState({
      productDetail: detail
    })
  };
  addToCart = (id) => {
    let tempProd = [...this.state.products];
    for (let i = 0; i < tempProd.length; i++) {
      if (tempProd[i].id === id) {
        tempProd[i].inCart = true;
        tempProd[i].count = 1;
        this.setState({
          products: tempProd,
          cart: [...this.state.cart, tempProd[i]]
        });
      }
    }
  };
  openModal = (id) => {
    let tempProd = this.getItem(id);
    this.setState({
      modalProduct: tempProd,
      modalState: true
    })
  }

  closeModal = () => {
    this.setState({
      modalState: false
    })
  }

  plus = (id) => {
    let tempProd = [...this.state.cart];
    for (let i = 0; i < tempProd.length; i++) {
      if (tempProd[i].id === id) {
        tempProd[i].count += 1;
        this.setState({
          cart: tempProd
        })
      }
    }
  }
  minus = (id) => {
    let tempProd = [...this.state.cart];
    for (let i = 0; i < tempProd.length; i++) {
      if (tempProd[i].id === id) {
        if(tempProd[i].count>1){
          tempProd[i].count-=1;
        }
        this.setState({
          cart: tempProd
        })
      }
    }
  }
  remove = (id) =>{
    let tempProd = [...this.state.cart];
    for (let i = 0; i < tempProd.length; i++) {
      if(tempProd[i].id === id){
        tempProd.splice(i,1);
        this.setState({
          cart: tempProd
        })
      }
    }
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        closeModal: this.closeModal,
        openModal: this.openModal,
        plus: this.plus,
        minus: this.minus,
        remove: this.remove
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
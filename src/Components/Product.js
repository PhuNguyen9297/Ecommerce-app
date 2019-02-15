import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';

export default class Product extends Component {
  render() {
    const { id, img, name, price, inCart } = this.props.product;
    return (
      <div className="col-9 col-sm-6 col-md-4 mx-auto mb-5">
        <div className="card" onClick={() => console.log("add to card")}>
          <div className="img-container">
            <Link to="/detail">
              <img className="card-img-top p-5" src={img} alt={name}></img>
            </Link>
            <button disabled={inCart ? true : false} className="btn-cart" onClick={()=>console.log("abc")}>
              {inCart ? <p className="text-center mb-0">In Cart</p> : <i className="fas fa-cart-plus p-2"></i>}
            </button>
          </div>
          <div className="card-footer px-3">s
            <div className="row">
              <p className="col-7 col-lg-9 mb-0">{name}</p>
              <p className="col-5 col-lg-3 text-right">$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

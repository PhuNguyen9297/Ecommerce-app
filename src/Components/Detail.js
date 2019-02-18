import React, { Component } from 'react'
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, detail, img, name, price, inCart } = value.productDetail;
          return (
            <div className="container my-3">
              <div className="row">
                <img src={img} alt={name} className="col-9 col-md-4" height="400px" />
                <div className="col-3 col-md-4">
                  <h5>{name}</h5>
                  <p>{detail}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn-light">
                      <p className="m-0"><i class="fab fa-twitter mr-1 text-primary"></i>Twitter</p>
                    </button>
                    <button className="btn-light">
                      <p className="m-0"><i class="fab fa-facebook-f mr-1 text-primary"></i>Share</p>
                    </button>
                    <button className="btn-light">
                      <p className="m-0"><i class="fab fa-google-plus-g mr-1 text-danger"></i>Google</p>
                    </button>
                    <button className="btn-light">
                      <p className="m-0"><i class="fab fa-pinterest mr-1 text-danger"></i>Pinterest</p>
                    </button>
                  </div>
                  <div className="border bg-white my-3 review-box">
                    <p className="m-2">Rating</p>
                      <p><i class="fab fa-2x fa-rocketchat text-success mx-2"></i>Review</p>
                  </div>
                </div>
                <div className="col-3 col-md-3">
                <div className="bg-white">
                  <p className="text-center">$ {price}</p>
                </div>
                <div className="bg-white">
                  <p>Quantity</p>
                  <form className="form-inline">
                    <input type="number" placeholder="1">
                    </input>
                  </form>
                </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

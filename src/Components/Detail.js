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
            <div className="container my-5">
              <div className="row">
                <img src={img} alt={name} className="col-8 col-lg-5 mx-auto" height="400px" />
                <div className="col-8 col-lg-4 mx-auto">
                  <h5>{name}</h5>
                  <p>{detail}</p>
                  <p>Price: ${price}</p>
                  <div className="d-flex justify-content-around">
                    <Link to="/">
                      <button className="buy-now-btn btn">
                        <i class="fas fa-cash-register mr-2"></i>
                        BUY NOW
                    </button>
                    </Link>
                    <button className="add-to-cart-btn btn">
                      Add to cart
                  </button>
                  </div>
                  <div className="d-flex justify-content-around mt-5">
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
                <div className="col-8 col-lg-3 mx-auto ">
                  <p className="border m-0"><i class="fas fa-truck right-icon"></i>Transport policy</p>
                  <p className="border m-0"><i class="fab fa-cc-paypal right-icon"></i>Easy payment</p>
                  <p className="border m-0"><i class="fas fa-fist-raised right-icon"></i>Prestigious seller</p>
                  <p className="border m-0"><i class="fas fa-phone-volume right-icon"></i>Contact us</p>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

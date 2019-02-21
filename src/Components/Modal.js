import React, { Component } from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalState, closeModal } = value;
                    const { img, name, price } = value.modalProduct;
                    if (modalState === false) {
                        return null;
                    }
                    else {
                        return (
                            <div className="modal-container">
                                <div className="container bg-light col-9 col-md-6">
                                    <div className="border-bottom">
                                        <p className="text-center py-3 font-weight-bold">Success! You have added this item to your cart.</p>
                                    </div>
                                    <div className="d-flex justify-content-between m-4">
                                        <img src={img} alt={name} width="130px" height="130px"></img>
                                        <span className="ml-3 align-top mr-5">{name}</span>
                                        <p>Price<br></br> ${price}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mx-3 my-4">
                                        <Link to="/">
                                            <button type="button" className="btn btn-warning" onClick={closeModal}>Countinue shopping</button>
                                        </Link>
                                        <Link to="/cart">
                                            <button className="btn btn-success" onClick={closeModal}>Checkout</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

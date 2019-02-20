import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { id, img, name, price } = this.props.product;
        return (
            <div className="container d-flex justify-content-between p-2">
                <div className="row">
                    <img src={img} alt={name} width="100px" height="100px" />
                    <p className="ml-2">{name}</p>
                </div>
                <div>
                    <input type="number" value="1"></input>
                    <button className="btn btn-secondary"><i class="fas fa-minus"></i></button>
                    <button className="btn btn-secondary"><i class="fas fa-plus"></i></button>
                </div>
                <p>{price}</p>
                <i class="fas fa-times-circle text-danger fa-2x"></i>
            </div>
        )
    }
}

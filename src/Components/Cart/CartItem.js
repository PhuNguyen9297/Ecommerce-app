import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { id, img, name, price, count } = this.props.product;
        const minus = this.props.minus;
        const plus = this.props.plus;
        const remove = this.props.remove;
        return (
            <div className="row mb-2 p-2 border-bottom">
                <div className="row col-6">
                    <div className="col-4">
                        <img src={img} alt={name} className="" width="100px" height="100px" />
                    </div>
                    <div className="col-8">
                        <p className="">{name}</p>
                    </div>
                </div>
                <div className="col-3 text-right">
                    <input type="number" className="input-number" min="1" value={count}></input>
                    <button className="count-btn btn-secondary" onClick={() => minus(id)}><i class="fas fa-minus"></i></button>
                    <button className="count-btn btn-secondary" onClick={() => plus(id)}><i class="fas fa-plus"></i></button>
                </div>
                <p className="col-2 text-center">{price}</p>
                <i className="fas fa-times fa-2x text-danger col-1 text-right" onClick={() => remove(id)}></i>
            </div>
        )
    }
}

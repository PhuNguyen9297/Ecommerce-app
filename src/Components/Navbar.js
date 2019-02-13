import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">icon</div>
          <div className="col-2">Product</div>
          <div className="col-2">My Cart</div>
        </div>
      </div>
    )
  }
}

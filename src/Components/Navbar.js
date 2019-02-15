import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-4 py-1 navbar-custom">
        <Link to="/">
          <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/shoeprints-32.png" 
            alt="icon" className="navbar-brand" height="50px" weight="50px"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                <span className="nav-text">
                  Product  
                </span>
              </Link>
            </li>
          </ul>
          <form className="form-inline ml-auto mr-4">
            <input type="search" className="form-control" placeholder="Search..."></input>
            <button type="submit" className="btn "><i className="fa fa-search"></i></button>
          </form>
          <Link to="/cart" className="nav-link">
            <button className="btn-custom">
              <i className="fas fa-cart-plus mr-2"></i>
              My Cart
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}

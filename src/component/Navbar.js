import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render() {
      return (
          <div>
              <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                 <span className="fa fa-home navbar-brand"></span>
                </Link>
                <ul className="navbar-nav align-items-center">
                     <li className="nav-item ml-5">
                      <Link to="/" className="nav-link">Products</Link>
                     </li>
                </ul>
                 <Link to="/cart" className="ml-auto">
                 <button>
                   <i className="fas fa-cart-plus" />
                 </button>
                 </Link>
              </nav>
          </div>
      )
    }
}
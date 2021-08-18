import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <div className="container-fluid">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-5">
              <Link to='/' className='nav-link fs-4 fw-bolder'>
                product
              </Link>
            </li>
          </ul>
          <Link to='/cart' className='ml-auto'>
            <button className='btn btn-outline-warning fs-5'>
              <span className='me-2'>
                <i className="fas fa-cart-plus"/>
              </span>
              my cart
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}

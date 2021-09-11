import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <div className="container-fluid">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-5">
              <Link to='/' className='nav-link fs-4 fw-bolder'>
                product
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to='/log-in' className='ml-auto mx-4'>
              <button className='btn btn-warning fs-5'>
                <span className='me-2'>
                  <i className="fas fa-cart-plus"/>
                </span>
                Log in
              </button>
            </Link>
            <Link to='/register' className='ml-auto'>
              <button className='btn btn-outline-light fs-5'>
                <span className='me-2'>
                  <i className="fas fa-cart-plus"/>
                </span>
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
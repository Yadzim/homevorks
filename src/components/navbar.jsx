import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logo, search } from '../utilis/imgs';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg px-5 pt-4 bg-transparent position-absolute">
          <div className="container-fluid">
            <Link to='/' className='navbar-brand'>
              <img src={logo} alt="logo" />
            </Link>
            <div className="collapse navbar-collapse ms-5">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link" href="#">Sell</Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link" href="#">Marketplace</Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link">Community</Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link">Develop</Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link">Resources</Link>
                </li>
              </ul>
              <form className="d-flex align-items-center">
                <Link to='/login' className="nav-link">Log in</Link>
                <Link to='/start' className="btn btn-vilot me-3" type="submit">Get Started</Link>
                <img src={search} alt="" className="search ms-3"/>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

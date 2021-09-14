import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Sellconteiner } from '../styles/style';
import { featuredImg,vector } from '../utilis/imgs';

export default class Sell extends Component {
  render() {
    return (
      <Sellconteiner>
        <div className="titleplase">
          <h1>Building exactly the eCommerce website you want.</h1>
          <p>WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
            Get started quickly and make your way.</p>
          <div className="d-flex align-items-center mt-4">
            <Link to='/start' className="btn rounded-pill btn-vilot me-3">Start a New Store</Link>
            <div>or  <Link to='/not-fount' className="link">  Customize & Extend ›</Link></div>
          </div>
        </div>
        <img src={featuredImg} alt="img" width="820" height="820"/>
        <img src={vector} alt="" className="vector" />
      </Sellconteiner>
    )
  }
}

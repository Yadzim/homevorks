import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { featuredImg, bg, vector } from '../utilis/imgs';

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

const Sellconteiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 200px 0 0 220px;
  background-image: url(${bg});
  h1{
    font-size: 85px;
    line-height: 95px;
    margin-bottom: 30px;
  }
  p{
    width: 716px;
    line-height: 25px;
    color:rgba(39, 45, 78, .6);
  }
  img{
    z-index: 10;
  }
  .vector{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .btn{
    padding: 18px 62px;
  }
`;

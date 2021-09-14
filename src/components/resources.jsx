import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devVector } from '../utilis/imgs';

export default class Resources extends Component {
  render() {
    return (
      <ResourcesS>
        <p>WooCommerce - the <b>most customizable eCommerce platform</b> for building <b>your online business.</b></p>
        <Link to="/start" className="btn rounded-pill"> GET STARTED </Link>
        <img src={devVector} alt="" />
      </ResourcesS>
    )
  }
}

const ResourcesS = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 78px 0 78px 470px;
  background: #5F37EF;
  margin-top: -185px;
  p{
    width: 855px;
    font-size: 32px;
    line-height: 52px;
    color: #FFFFFF;
  }
  img{
     position: absolute;
     right: 144px;
     bottom: -21px;
   }
  .btn{
    border: 1px solid #fff;
    color: #fff;
    padding: 26px 46px;
    line-height: 21px;
    transition: .2s linear;
    &:hover{
      background: #fff;
      color: #5F37EF;
    }
  }
`;

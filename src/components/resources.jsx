import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ResourcesS } from '../styles/style';
import { devVector } from '../utilis/imgs';

export default class Resources extends Component {
  render() {
    return (
      <ResourcesS id="resource">
        <p>WooCommerce - the <b>most customizable eCommerce platform</b> for building <b>your online business.</b></p>
        <Link to="/start" className="btn rounded-pill"> GET STARTED </Link>
        <img src={devVector} alt="" />
      </ResourcesS>
    )
  }
}



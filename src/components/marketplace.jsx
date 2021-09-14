import React, { Component } from 'react';
import { MarketplaceS } from '../styles/style';
import { cartImg1, cartImg11, cartImg2, cartImg3 } from '../utilis/imgs';

export default class Marketplace extends Component {
  render() {
    return (
      <MarketplaceS id="marketplace">
        <h1 className="maxTitle">Your eCommerce made simple</h1>
        <div className="card-group">
          <div class="card">
            <img src={cartImg1} class="card-img-top" alt="..."/>
            <img src={cartImg11} class="absolute" alt="..."/>
            <div class="card-body">
              <h5 class="minTitle">All You Need to Start</h5>
              <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
              <a href="#" class="link">Ecommerce for Wordpress ›</a>
            </div>
          </div>
          <div class="card">
            <img src={cartImg2} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="minTitle">Customize and Extend</h5>
              <p>From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
              <a href="#" class="link">Browse Extensions ›</a>
            </div>
          </div>
          <div class="card">
            <img src={cartImg3} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="minTitle">Active Community</h5>
              <p>WooCommerce is one of the fastest-growing eCommerce communities. </p>
              <a href="#" class="link">Check our Forums ›</a>
            </div>
          </div>
        </div>
      </MarketplaceS>
    )
  }
}



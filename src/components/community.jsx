import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CommunityS } from '../styles/style';
import { com1, com2, devBg, devGroup } from '../utilis/imgs';

export default class Community extends Component {
  render() {
    return (
      <>
        <CommunityS id="community">
          <div class="card">
              <img src={com1} class="img-fluid rounded-start" alt="..."/>
              <div class="card-body">
                <div>
                <h5 class="minTitle">Develop</h5>
                <h5 class="minTitle"> Without Limits</h5>
                <p class="card-text">WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch,
                extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                <Link to='/not-found' class="btn rounded-pill">Read the  Documentation</Link>
                </div>
              </div>
          </div>
          <div class="card">
              <div class="card-body">
                <div>
                <h5 class="minTitle">Know our </h5>
                <h5 class="minTitle"> Global Community</h5>
                <p class="card-text">WooCommerce is one of the fastest-growing eCommerce communities.
                We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it.
                There are 80+ meetups worldwide!</p>
                <Link to='/not-found' class="btn rounded-pill">Read the  Documentation</Link>
                </div>
              </div>
              <img src={com2} class="img-fluid rounded-end" alt="..."/>
          </div>
        </CommunityS>
        <div id="develop">
          <img src={devBg} alt="" />
          <img src={devGroup} alt="" className="developGroup"/>
        </div>
      </>
    )
  }
}


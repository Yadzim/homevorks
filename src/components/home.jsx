import React, { Component } from 'react';

import Sell from './sell';
import Marketplace from './marketplace';
import Community from './community';
import Resources from './resources';
import Footer from './footer';


export default class Home extends Component {
  render() {
    return (
      <>
        <Sell/>
        <Marketplace/>
        <Community/>
        <Resources/>
        <Footer/>
      </>
    )
  }
}

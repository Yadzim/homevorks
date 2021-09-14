import React, { Component } from 'react';
import { FooterS } from '../styles/style';
import { icon1, icon2, icon3, logo1, icons1, icons2, icons3, icons4, imgTop } from '../utilis/imgs';

export default class Footer extends Component {
  render() {
    return (
      <FooterS id="footer">
        <div className="top">
          <div className="item">
            <div>
              <img src={icon1} alt="" />
              <p>30 day <b>money back guarantee</b></p>
            </div>
            <div>
              <img src={icon2} alt="" />
              <p><b>Support</b> teams across the world</p>
            </div>
            <div>
              <img src={icon3} alt="" />
              <p><b>Safe & Secure</b> online payment</p>
            </div>
            <div></div>
            <div>
              <img src={logo1} alt="" />
            </div>
          </div>
          <hr />
          <footer>
            <ul>
              <h5>Who we Are</h5>
              <li>About</li>
              <li>Team</li>
              <li>Work With Us</li>
            </ul>
            <ul>
              <h5>Woocommerce</h5>
              <li>Features</li>
              <li>Payments</li>
              <li>Marketing</li>
              <li>Shipping</li>
              <li>Extension Store</li>
              <li>eCommerce blog</li>
              <li>Development blog</li>
              <li>Ideas board</li>
              <li>Mobile App</li>
              <li>Community</li>
              <li>Style Guide</li>
              <li>Email Newsletter</li>
            </ul>
            <ul>
              <h5>Other products</h5>
              <li>Storefront</li>
              <li>WooSlider</li>
              <li>WooSlider</li>
              <li>Sensei</li>
              <li>Sensei Extensions</li>
            </ul>
            <ul>
              <h5>Support</h5>
              <li>Documentation</li>
              <li>Customizations</li>
              <li>Support Policy</li>
              <li>Contact</li>
              <li>COVID-19 Resources</li>
              <li>Privacy Notice for</li>
              <li>California Users</li>
            </ul>
          </footer>
        </div>
        <div className="deep">
          <div className="imgs">
            <img src={icons1} alt="" />
            <img src={icons2} alt="" />
            <img src={icons3} alt="" />
            <img src={icons4} alt="" />
          </div>
          <p>COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</p>
          <img src={imgTop} alt="" />
        </div>
      </FooterS>
    )
  }
}

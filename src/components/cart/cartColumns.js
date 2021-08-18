import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bolder">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bolder">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bolder">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bolder">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bolder">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bolder">total</p>
          </div>
        </div>
      </div>
    )
  }
}

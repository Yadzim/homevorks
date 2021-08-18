import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
            <Link to="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=> clearCart()}>
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title fst-italic fw-bolder">subtotal: </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title fst-italic fw-bolder">tax: </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title fst-italic fw-bolder">total: </span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="rov">
                <div className="col-10 mx-auto text-center text-slanted text-primary my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2 fst-italic">
                    mode by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-primary">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize fw-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <button className="btn btn-outline-primary fs-5">
                        back to products
                      </button>
                    </Link>
                    {/* <Link to="/cart"> */}
                      <button className="btn btn-outline-warning fs-5 mx-5" disabled={inCart ? true : false} onClick={
                        () => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                        {inCart ? "inCart" : "add to cart"}
                      </button>
                    {/* </Link> */}

                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct;

          if(!modalOpen){
            return null;
          } else{
            return ( <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>Item added to the cart</h5>
                    <img src={img} alt="product" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">prce: $ {price}</h5>
                    <Link to="/" className="d-block">
                      <button className="btn btn-outline-primary fs-5 m-3" onClick={() => closeModal()}>
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button className="btn btn-outline-warning fs-5" cart onClick={() => closeModal()}>
                        go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
            )}
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.3);
  display: flex;
  align-items: center;
  justify-content: canter;
  #modal{
    background-color: #eeeeee;
  }
`;

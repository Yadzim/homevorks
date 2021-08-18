import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className = 'col-9 mx-auto col-md-6 col-lg-3 my-3'>
       <div className="card">
         <ProductConsumer>
           {(value) => (
             <div className="img-container p-5" onClick={ () =>  value.handleDetail(id)}>
             <Link to="/details">
               <img src={img} alt="prodact" className="card-img-top"/>
             </Link>
             <button className='btn btn-primary' disabled={inCart ? true : false} onClick={() => {value.addToCart(id); value.openModal(id)}}>
               {inCart ? (<p className='text-capitalize mb-0' disabled>in cart</p>) : (<i className='fas fa-cart-plus'/>)}
             </button>
            </div>
           )}
         </ProductConsumer>
         <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-primary fst-italic mb-0">
            $ {price}
          </h5>
         </div>
       </div>
      </ProductWrapper>
    )
  }
}

// Product.propTypes = {
//   product:PropTypes.shape({
//     id:PropTypesnumber.number,
//     img:PropTypesnumber.string,
//     title:PropTypesnumber.etring,
//     price:PropTypesnumber.number,
//     inCart:PropTypesnumber.bool
//   })
// }

const ProductWrapper = styled.div`
  .card{
    transition: all .5s linear;
  }
  .card-footer{
    border-top: transparent;
    transition: all .5s linear;
  }
  &:hover{
    .card{
      border: 0.04rem solid rgba(0,0,0,.2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,.2);
    }
  }
  .img-container{
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.1);
  }
  .btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    border: none;
    font-size: 1.4rem;
    border-radius: .5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .5s linear;
    &:hover{
      color: black;
    }
  }
  .img-container:hover .btn{
    transform: translate(0,0);
  }
`;

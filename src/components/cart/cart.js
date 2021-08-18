import React, { Component } from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptyCart';
import {ProductConsumer} from '../../context';
import CartLIst from './cartLIst';
import CartTotals from './cartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0){
              return (
                <>
                  <Title name="your" title="cart"/>
                  <CartColumns/>
                  <CartLIst value={value}/>
                  <CartTotals value={value}/>
                </>
              )} else{
              return (
                <EmptyCart/>
              )}
          }}
        </ProductConsumer>
      </section>
    )
  }
}

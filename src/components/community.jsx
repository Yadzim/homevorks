import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { comBg, com1, com2, comVector, devBg, devGroup } from '../utilis/imgs';

export default class Community extends Component {
  render() {
    return (
      <>
        <CommunityS>
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
        <div className="develop">
          <img src={devBg} alt="" />
          <img src={devGroup} alt="" className="developGroup"/>
          {/* bu rasmlarni hammasini yigishni ilojini topa olmadim shuning uchun rasmni quyib quydim */}
        </div>
      </>
    )
  }
}

const CommunityS = styled.div`
  padding: 0 345px;
  background-image: url(${comBg});
  background-repeat: no-repeat;
  .card{
    display: grid;
    grid-template-columns: 490px 480px;
    gap: 50px;
    background: transparent;
    .card-body{
      display: flex;
      /* justify-content: center; */
      align-items: center;
      .btn{
        background: #70c212;
        padding: 18px 26px;
        color: #fff;
        &:hover{
          background: #66b30e;
        }
      }
      h5{
        line-height: 46px;
        color: #fff;
      }
      p{
        width: 480px;
        color: #fff;
        margin: 13px 0 39px 0;
      }
    }
    img{
      width: 490px;
      &:nth-child(1){
        margin-top: -40px;
      }
    }
    &:nth-child(1){
      margin-left: -50px;
    }
    &:nth-child(2){
      margin-left: 250px;
    }
  }

`;

import styled from "styled-components";
import { bg, comBg } from "../utilis/imgs";

const Sellconteiner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 200px 0 0 220px;
  background-image: url(${bg});
  h1{
    font-size: 85px;
    line-height: 95px;
    margin-bottom: 30px;
  }
  p{
    width: 716px;
    line-height: 25px;
    color:rgba(39, 45, 78, .6);
  }
  img{
    z-index: 10;
  }
  .vector{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .btn{
    padding: 18px 62px;
  }
`;

const MarketplaceS = styled.div`
  height: 1100px;
  padding: 0 220px;
  img{
    width: 530px;
  }
  .absolute{
    width: 262px;
    height: 354px;
    position: absolute;
    top: 58px;
    left: -106px;
  }
  h1{
    position: relative;
    width: 457px;
    margin-bottom: 56px;
    margin-top: -56px;
  }
  .card{
    .card-body{
      width: 530px;
      padding: 0 50px;
      p{
        line-height: 30px;
        color:rgba(39, 45, 78, .6);
      }
    }
    &:nth-child(2){
      margin-top: 70px;
    }
    &:nth-child(3){
      margin-top: 140px;
    }
  }
`;

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

const ResourcesS = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 78px 0 78px 470px;
  background: #5F37EF;
  margin-top: -185px;
  p{
    width: 855px;
    font-size: 32px;
    line-height: 52px;
    color: #FFFFFF;
  }
  img{
     position: absolute;
     right: 144px;
     bottom: -21px;
   }
  .btn{
    border: 1px solid #fff;
    color: #fff;
    padding: 26px 46px;
    line-height: 21px;
    transition: .2s linear;
    &:hover{
      background: #fff;
      color: #5F37EF;
    }
  }
`;

const FooterS = styled.div`
  .top{
    background: #7854f7;
    .item{
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 118px;
      padding: 45px 340px;
      div{
        display: flex;
        align-items: center;
        p{
          margin: 0;
          margin-left: 15px;
        }
      }
    }
    hr{
      width: 1480px;
      border: 1px solid #9A7DFF;
      margin: 34px auto;
    }
    footer{
      display: flex;
      justify-content: space-between;
      padding: 0 435px;
      padding-bottom: 64px;
      color: #fff;
      h5{
        font-weight: bold;
        font-size: 14px;
        line-height: 52px;
        margin: 0;
      }
      li{
        font-size: 12px;
        line-height: 22px;
        list-style: none;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .deep{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 220px;
    p{
      margin: 0;
    }
    .imgs{
      img{
        margin-right: 54px;
        &:nth-child(4){
          margin: 0;
        }
      }
    }
  }

`;

export {Sellconteiner, MarketplaceS, CommunityS, ResourcesS, FooterS};
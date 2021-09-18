import styled from "styled-components";

const AboutAsS = styled.div`
  height: 966px;
  position: relative;
  background-color: #f8f8f8;
  padding-top: 75px;
  .absolute{
    position: absolute;
    color: #fff !important;
    &:nth-child(1){
      top: -250px;
      right: 9px;
    }
    &:nth-child(2){
      top: 3px;
      left: 5px;
    }
    &:nth-child(3){
      bottom: -35px;
      left: 209px;
    }
    &:nth-child(4){
      bottom: 11px;
      right: 1px;
    }
    &:nth-child(5){
      bottom: 147px;
      right: 0;
    }
  }
  h1{
    font-family: Urbanist;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #3E4043;
    margin-bottom: 50px;
    position: relative;
  }
  .grid{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    p{
      width: 460px;
      font-family: Inter;
      font-size: 16px;
      line-height: 190%;
      text-align: justify;
      margin-right: 80px;
    }
    .imgs{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img{
        margin: 15px 0;
      }
    }
  }
`;

export {AboutAsS};
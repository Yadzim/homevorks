import React, { Component } from 'react'
import styled from 'styled-components';

export default class NotFound extends Component {
  render() {
    return (
      <div className="d-flex flex-column text-center my-5">
        <ErrorH>404</ErrorH>
        <ErrorP>not found page</ErrorP>
        <button className="btn btn-primary mx-auto my-4" onClick={() => this.props.history.replace("/")}>go home</button>
      </div>
    )
  }
}

const ErrorH = styled.div`
  font-size: 80px;
  font-weight: bold;
`;
const ErrorP = styled.div`
  font-size: 30px;
`;

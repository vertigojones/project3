import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyles = styled.div`
  width: 100%;
  padding: 8px;
  background: black;
  color: white;
  text-align: center;

  h1 {
    font-family: "Sedgwick Ave Display", cursive;
    font-size: 54px;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyles>
        <h1>Drummers' Checklist</h1>
        <Link to="/">All Drummers</Link>
      </HeaderStyles>
    );
  }
}

export default Header;

import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterStyles>
        <h4>©2018 by Owen Liversidge @ General Assembly</h4>
      </FooterStyles>
    );
  }
}

const FooterStyles = styled.div`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  text-align: center;
`;

export default Footer;

import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterStyles = styled.div`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  text-align: center;
`

class Footer extends Component {
  render () {
    return (
      <FooterStyles>
        <h4>©2018 by Owen Liversidge @ General Assembly</h4>
      </FooterStyles>
    )
  }
}

export default Footer
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: black;
  color: white;
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
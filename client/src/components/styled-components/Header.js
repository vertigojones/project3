import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: black;
  color: white;
`

class Header extends Component {
  render () {
    return (
      <HeaderStyles>
        <h1>Drummers' Checklist</h1>
        <ul>
          <li>
            <Link to="/">All Drummers</Link>
          </li>
        </ul>
      </HeaderStyles>
    )
  }
}

export default Header
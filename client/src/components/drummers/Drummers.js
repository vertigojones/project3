import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NewDrummerForm from "./NewDrummerForm";
import styled from "styled-components";

class Drummers extends Component {
  state = {
    drummers: [],
    showNewForm: false
  };

  componentWillMount() {
    this.getAllDrummers();
  }

  getAllDrummers = async () => {
    const res = await axios.get("/api/drummer");
    this.setState({ drummers: res.data });
  };

  toggleShowNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };

  render() {
    return (
      <ContentWrapper>
        <div>
          <HeaderWrapper>
            <h1>Drummers' Checklist</h1>
          </HeaderWrapper>
          {this.state.drummers.map(drummer => (
            <Link
              key={drummer._id}
              to={`/${drummer._id}`}
              style={{ textDecoration: "none" }}
            >
              <h3>Name: {drummer.name}</h3>
            </Link>
          ))}
          <button onClick={this.toggleShowNewForm}>Create New Drummer</button>

          {this.state.showNewForm ? (
            <NewDrummerForm getAllDrummers={this.getAllDrummers} />
          ) : null}
        </div>
      </ContentWrapper>
    );
  }
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: "Cousine", monospace;
  font-size: 24px;
  text-decoration: none;

  h3 {
    text-shadow: 2px 2px lightgrey;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    width: 90vw;
  }
`;

const HeaderWrapper = styled.div`
  font-family: "Sedgwick Ave Display", cursive;
  font-size: 64px;
  text-shadow: 5px 5px lightgrey;
  display: block;

  @media (max-width: 400px) {
    font-size: 38px;
  }
`;

export default Drummers;

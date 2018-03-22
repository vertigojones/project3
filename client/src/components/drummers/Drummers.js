import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NewDrummerForm from "./NewDrummerForm";
import styled from "styled-components";

const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  font-family: "Cousine", monospace;
  font-size: 24px;
  text-shadow: 2px 2px white;
  background-image: url("https://i.imgur.com/Intt7gp.jpg?1");
  background-position: absolute;
  background-size: cover;
  width: 100vw; 
`;

const HeaderWrapper = styled.div`
  font-family: "Sedgwick Ave Display", cursive;
  font-size: 64px;
  text-shadow: 5px 5px white;
  text-align: center;
`;

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
            <h1>Welcome to The Beatmakers!</h1>
          </HeaderWrapper>
          {this.state.drummers.map(drummer => (
            <Link key={drummer._id} to={`/${drummer._id}`}>
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

export default Drummers;

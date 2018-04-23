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
          <TextWrapper>
            <p>
              Drummers' Checklist is an online tool for drummers to keep track
              of their upcoming shows, plus the equipment they need. This is a
              one-stop page for all your drumming needs! Just list all your
              upcoming shows into the gig calendar, then enter the percussion
              setups you have to offer. Also, Drummers' Checklist can function
              as a profile page for potential clients to check over your details
              - they can also select which setup they want for their show if
              they decide to hire you! To join, simply create a new profile,
              then start adding your equipment setups and shows. Feel free to
              share your details with your drumming friends. Happy drumming!
            </p>
          </TextWrapper>
          <hr />
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

  hr {
    width: 80%;
  }

  h3 {
    text-shadow: 2px 2px lightgrey;
  }

  @media (max-width: 650px) {
    font-size: 18px;
    width: 90vw;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  font-family: "Gaegu", cursive;
  font-size: 24px;
  font-weight: bold;
  width: 80%;
`;

const HeaderWrapper = styled.div`
  font-family: "Sedgwick Ave Display", cursive;
  font-size: 64px;
  color: white;
  text-shadow: 5px 5px black;
  display: block;
  margin: 10px;
  border: 5px solid white;
  border-radius: 15px;
  background-image: url("https://i.imgur.com/Intt7gp.jpg?2");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;

  h1 {
    padding: 15px;
  }

  @media (max-width: 650px) {
    font-size: 32px;
  }
`;

export default Drummers;

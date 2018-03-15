import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NewDrummerForm from "./NewDrummerForm";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-image: url("https://i.pinimg.com/originals/04/ba/1a/04ba1a443c6d41fe381c9cd681a934ca.jpg");
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
          <h2>Welcome to The Beatmakers</h2>
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

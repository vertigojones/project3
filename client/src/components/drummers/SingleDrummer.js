import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import styled from "styled-components";

import UpdateDrummer from "./UpdateDrummer";
import Gigs from "../gigs/Gigs";
import Header from "../styled-components/Header";
import Footer from "../styled-components/Footer";

const ProfileStyles = styled.div`
  height: 60vw;
  width: 34%;
  order: 1;
  text-align: center;
  button {
    padding: 3px;
    margin: 3px; 
    cursor: pointer;
  }
`;

const ImageStyles = styled.div`
  img {
    height: 250px;
    margin: 0 auto;
    border-radius: 15px;
    padding: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

class SingleDrummer extends Component {
  state = {
    drummer: {},
    gigs: [],
    updateDrummer: false,
    redirect: false
  };

  toggleShowUpdate = () => {
    this.setState({ updateDrummer: !this.state.updateDrummer });
  };

  async componentWillMount() {
    const drummerId = this.props.match.params.id;
    const res = await axios.get(`/api/drummer/${drummerId}`);
    const drummer = res.data;
    this.setState({ drummer });
    console.log(this.state.drummer);
  }

  remove = () => {
    const drummerId = this.props.match.params.id;
    this.setState({ redirect: true });
    axios
      .delete(`/api/drummer/${drummerId}`)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Header />
        <ProfileStyles>
          <div>
            <div className="profile-container">
              <h2>{this.state.drummer.name}</h2>
              <button onClick={this.remove}>
                Remove {this.state.drummer.name}
              </button>
              <ImageStyles>
                <img src={this.state.drummer.image} alt="Drummer Profile" />
              </ImageStyles>
              <h4>Gender: {this.state.drummer.gender}</h4>
              <h4>Age: {this.state.drummer.age}</h4>
              <h4>Location: {this.state.drummer.location}</h4>
              <h4>Instruments: {this.state.drummer.instruments}</h4>
              <h4>Styles: {this.state.drummer.styles}</h4>
              {/* <h4>Gigs: {[this.state.drummer.gigs]}</h4> */}
              <button onClick={this.toggleShowUpdate}>
                Update {this.state.drummer.name}
              </button>
              {this.state.updateDrummer ? (
                <UpdateDrummer drummer={this.state.drummer} />
              ) : null}
            </div>
          </div>
        </ProfileStyles>
        <Footer />
      </div>
    );
  }
}

export default SingleDrummer;

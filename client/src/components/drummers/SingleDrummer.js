import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import styled from "styled-components";

import UpdateDrummer from "./UpdateDrummer";
import Gigs from "../gigs/Gigs";
import Header from "../styled-components/Header";
import Footer from "../styled-components/Footer";

const PageWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  
  button {
    padding: 5px;
    margin: 10px 0px;
    border-radius: 5px;
    cursor: pointer;
  }

  h2 {
    font-family: "Swanky and Moo Moo", cursive;
    font-size: 38px;
    font-weight: bold;
  }

  h4 {
    font-family: "Cousine", monospace;
  }
`;

const ProfileStyles = styled.div`
  flex-basis: 100px;
  height: 100vw;
  width: 34%;
  flex: 1;
  order: 1;
  text-align: center;
  margin: 5px;
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

const GigStyles = styled.div`
  flex-basis: 100px;
  height: 100vw;
  width: 33%;
  flex: 1;
  order: 2;
  text-align: center;
  margin: 5px;
`;

const EquipmentStyles = styled.div`
  flex-basis: 100px;
  height: 100vw;
  width: 33%;
  flex: 1;
  order: 3;
  text-align: center;
  margin: 5px;
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
    this.getSingleDrummer();
  }

  getSingleDrummer = async () => {
    const drummerId = this.props.match.params.id;
    const res = await axios.get(`/api/drummer/${drummerId}`);
    const drummer = res.data;
    this.setState({ drummer });
    console.log(this.state.drummer);
  };
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
      <PageWrapper>
        <Header />
        <ContentWrapper>
          <div className="profile-wrapper">
            <ProfileStyles>
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
                <button onClick={this.toggleShowUpdate}>
                  Update {this.state.drummer.name}
                </button>
                {this.state.updateDrummer ? (
                  <UpdateDrummer drummer={this.state.drummer} />
                ) : null}
              </div>
            </ProfileStyles>
          </div>

          <div className="gig-wrapper">
            <GigStyles>
              <h2>Gigs</h2>
            </GigStyles>
          </div>

          <div className="equipment-wrapper">
            <EquipmentStyles>
              <h2>Equipment</h2>
            </EquipmentStyles>
          </div>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    );
  }
}

export default SingleDrummer;

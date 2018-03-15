import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import styled from "styled-components";

import UpdateDrummer from "./UpdateDrummer";
import GigList from "../gigs/GigList";
import EquipmentList from "../equipment/EquipmentList";
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

  @media (max-width: 400px){
  main {
    flex-direction: column;
  }

}

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
  /* height: 100vw; */
  width: 34%;
  flex: 1;
  order: 1;
  text-align: center;
  margin: 10px;
`;

const ImageStyles = styled.div`
  img {
    width: 75%;
    margin: auto;
    border-radius: 15px;
    padding: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const GigStyles = styled.div`
  flex-basis: 100px;
  /* height: 100vw; */
  width: 33%;
  flex: 1;
  order: 2;
  text-align: center;
  margin: 10px;
`;

const EquipmentStyles = styled.div`
  flex-basis: 100px;
  /* height: 100vw; */
  width: 33%;
  flex: 1;
  order: 3;
  text-align: center;
  margin: 10px;
`;

class SingleDrummer extends Component {
  state = {
    drummer: {},
    gigList: [],
    equipmentList: [],
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
    this.setState({ gigList: res.data.gigs });
    this.setState({ equipmentList: res.data.gigs });
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
          <ProfileStyles>
            <div className="profile-wrapper">
              <div className="profile-container">
                <h2>{this.state.drummer.name}</h2>
                <ImageStyles>
                  <img src={this.state.drummer.image} alt="Drummer Profile" />
                </ImageStyles>
                <button onClick={this.remove}>
                  Remove {this.state.drummer.name}
                </button>
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
                <hr />
              </div>
            </div>
          </ProfileStyles>
          <GigStyles>
            <div className="gig-wrapper">
              <h2>Gig Calendar</h2>
              <GigList gigList={this.state.gigList} />
            </div>
          </GigStyles>
          <EquipmentStyles>
            <div className="equipment-wrapper">
              <h2>Equipment</h2>
              <EquipmentList equipmentList={this.state.equipmentList} />
            </div>
          </EquipmentStyles>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    );
  }
}

export default SingleDrummer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ProfileStyles = styled.div``;

const ImageStyles = styled.div`
  img {
    height: 250px;
    margin: 0 auto;
    border-radius: 15px;
  }
`;

class SingleDrummer extends Component {
  state = {
    drummer: {},
    gigs: []
  };

  async componentWillMount() {
    const drummerId = this.props.match.params.id;
    const res = await axios.get(`/api/drummer/${drummerId}`);
    const drummer = res.data;
    this.setState({ drummer });
    console.log(this.state.drummer);
  }

  render() {
    return (
      <ProfileStyles>
        <div>
          <Link to="/">All Drummers</Link>
          <div className="profile-container">
            <h2>{this.state.drummer.name}</h2>
            <ImageStyles>
              <img src={this.state.drummer.image} alt="Drummer Profile" />
            </ImageStyles>
            <h4>Gender: {this.state.drummer.gender}</h4>
            <h4>Age: {this.state.drummer.age}</h4>
            <h4>Location: {this.state.drummer.location}</h4>
            <h4>Instruments: {this.state.drummer.instruments}</h4>
            <h4>Styles: {this.state.drummer.styles}</h4>
          </div>
          <Link to="/:id/update">Update {this.state.drummer.name}</Link>
        </div>
      </ProfileStyles>
    );
  }
}

export default SingleDrummer;

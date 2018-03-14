import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import styled from "styled-components";
import UpdateDrummer from "./UpdateDrummer";
import Gigs from "../gigs/Gigs"

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
      <ProfileStyles>
        <div>
          <Link to="/">All Drummers</Link>
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
          </div>
          <button onClick={this.toggleShowUpdate}>
            Update {this.state.drummer.name}
          </button>
        </div>
        {this.state.updateDrummer ? (
          <UpdateDrummer drummer={this.state.drummer} />
        ) : null}
      </ProfileStyles>
    );
  }
}

export default SingleDrummer;

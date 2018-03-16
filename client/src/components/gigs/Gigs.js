import React, { Component } from "react";
import styled from "styled-components";
import EquipmentName from "./EquipmentName";
import axios from "axios";
//import NewGigForm from "./NewGigForm";

const ImageWrapper = styled.div`
  img {
    width: 60%;
    margin: auto;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

class Gigs extends Component {
  state = {
    showNewForm: false
  };

  toggleShowNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };

  createNewGig = () => {
    const drummerId = this.props.drummerId;
    axios.post(`/api/drummer/${drummerId}/gigs`).then(res => {
      this.setState({ gigs: res.data.gigs });
    });
  };

  deleteGig = gig => {
    const drummerId = this.props.drummerId;
    const gigId = this.props.gigs._id;
    console.log(gigId);
    axios.delete(`/api/drummer/${drummerId}/gigs/${gigId}`).then(res => {
      this.setState({ gigs: res.data.gigs });
    });
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.toggleShowNewForm}>Create New Gig</button>
          {this.state.showNewForm ? (
            <NewGigForm ={this.getAllDrummers} />
          ) : null} */}
          <button>Create New Gig</button>
          <hr />
        <ImageWrapper>
          <img src={this.props.gigs.image} alt="Venue" />
        </ImageWrapper>
        <button onClick={this.deleteGig}>Remove {this.props.gigs.venue}</button>
        <h4>Date: {this.props.gigs.date}</h4>
        <h4>Time: {this.props.gigs.time}</h4>
        <h4>Venue: {this.props.gigs.venue}</h4>
        <h4>Location: {this.props.gigs.location}</h4>
        <h4>Artist: {this.props.gigs.artist}</h4>
        <div>
          {this.props.gigs.equipment.map((equipment, i) => {
            return <EquipmentName key={i} equipment={equipment} />;
          })}
        </div>
        <button onClick={this.toggleShowUpdate}>
          Update {this.props.gigs.venue}
        </button>
        <hr />
      </div>
    );
  }
}

export default Gigs;

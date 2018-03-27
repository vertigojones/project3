import React, { Component } from "react";
import styled from "styled-components";
import EquipmentName from "./EquipmentName";
import UpdateGig from "./UpdateGig";
import axios from "axios";

class Gigs extends Component {
  state = {
    updateCurrentGig: false
  };

  toggleShowUpdate = () => {
    this.setState({ updateCurrentGig: !this.state.updateCurrentGig });
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
    axios
      .delete(`/api/drummer/${drummerId}/gigs/${gigId}`)
      .then(res => {
        this.setState({ gigs: res.data.gigs });
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.props.getSingleDrummer();
      });
  };

  render() {
    return (
      <div>
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
        <h4>Notes: {this.props.gigs.notes}</h4>
        <button onClick={this.toggleShowUpdate}>
          Update {this.props.gigs.venue}
        </button>
        {this.state.updateCurrentGig ? (
          <UpdateGig
            gigs={this.props.gigs}
            gigId={this.props.gigId}
            drummerId={this.props.drummerId}
            toggleShowUpdate={this.toggleShowUpdate}
            getSingleDrummer={this.props.getSingleDrummer}
          />
        ) : null}
        <hr />
      </div>
    );
  }
}

const ImageWrapper = styled.div`
  img {
    width: 60%;
    margin: 15px;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default Gigs;

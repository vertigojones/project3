import React, { Component } from "react";
import styled from "styled-components";
//import axios from "axios";
import EquipmentName from "./EquipmentName";

const ImageWrapper = styled.div`
  img {
    width: 50%;
    margin: auto;
    border-radius: 15px;
    padding: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

class Gigs extends Component {
  render() {
    return (
      <div>
        <ImageWrapper>
          <img src={this.props.gigs.image} alt="Venue" />
        </ImageWrapper>
        <button onClick={this.remove}>Remove {this.props.gigs.venue}</button>
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

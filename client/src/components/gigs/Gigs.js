import React, { Component } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  img {
    height: 200px;
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
        <h4>Date: {this.props.gigs.date}</h4>
        <h4>Time: {this.props.gigs.time}</h4>
        <h4>Venue: {this.props.gigs.venue}</h4>
        <h4>Location: {this.props.gigs.location}</h4>
        <h4>Artist: {this.props.gigs.artist}</h4>
        <h4>Setup: {this.props.gigs.set}</h4>
      </div>
    );
  }
}

export default Gigs;

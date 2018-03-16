import React, { Component } from "react";
import styled from "styled-components";

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

class Equipment extends Component {
  render() {
    return (
      <div>
        <button>Create New Equipment</button>
        <hr />
        <ImageWrapper>
          <img src={this.props.equipment.image} alt="Equipment" />
        </ImageWrapper>
        <button onClick={this.remove}>Remove {this.props.equipment.set}</button>
        <h4>Equipment: {this.props.equipment.set}</h4>
        <h4>Cymbals needed: {this.props.equipment.cymbals}</h4>
        <h4>Drums needed: {this.props.equipment.drums}</h4>
        <h4>Hardware needed: {this.props.equipment.hardware}</h4>
        <h4>Miscelaneous: {this.props.equipment.other}</h4>
        <button onClick={this.toggleShowUpdate}>
          Update {this.props.equipment.set}
        </button>
        <hr />
      </div>
    );
  }
}

export default Equipment;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div>
        <Link to="/">All Drummers</Link>
        <h1>Laying down these beats is {this.state.drummer.name}</h1>
        <div className="image-container">
        {this.state.drummer.image}
        </div>
        <h3>Gender: {this.state.drummer.gender}</h3>
        <h3>Age: {this.state.drummer.age}</h3>
        <h3>Location: {this.state.drummer.location}</h3>
        <h3>Instruments: {this.state.drummer.instruments}</h3>
        <h3>Styles: {this.state.drummer.styles}</h3>
      </div>
    );
  }
}

export default SingleDrummer;

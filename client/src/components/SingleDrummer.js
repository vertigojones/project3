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
        <h1>This page belongs to {this.state.drummer.name}</h1>
      </div>
    );
  }
}

export default SingleDrummer;

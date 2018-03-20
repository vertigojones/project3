import React, { Component } from "react";
import axios from "axios";

class NewGigForm extends Component {
  state = {
    image: "",
    date: "",
    time: "",
    venue: "",
    location: "",
    artist: "",
    equipment: "",
    notes: ""
  };

  handleChange = event => {
    const gig = event.target.name;
    const newState = { ...this.state };
    newState[gig] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      image: this.state.image,
      date: this.state.date,
      time: this.state.time,
      venue: this.state.venue,
      location: this.state.location,
      artist: this.state.artist,
      equipment: this.state.equipment,
      notes: this.state.notes
    };
    await axios.post(`/api/drummer/${drummerId}`, payload);
    await this.props.getAllGigs();
  };

  render() {
    return <div>hello</div>;
  }
}

export default NewGigForm;

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
    await axios.post(`/api/drummer/${this.props.drummerId}/gigs`, payload);
    await this.props.getAllGigs();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="image">Image URL: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="image"
            value={this.state.image}
          />
        </div>
        <div>
          <label htmlFor="name">Date: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="date"
            value={this.state.date}
          />
        </div>
        <div>
          <label htmlFor="gender">Time: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="time"
            value={this.state.time}
          />
        </div>
        <div>
          <label htmlFor="age">Venue: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="venue"
            value={this.state.venue}
          />
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            value={this.state.location}
          />
        </div>
        <div>
          <label htmlFor="instruments">Artist: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="artist"
            value={this.state.artist}
          />
        </div>
        <div>
          <label htmlFor="styles">Equipment: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="equipment"
            value={this.state.equipment}
          />
        </div>
        <div>
          <label htmlFor="styles">Notes: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="notes"
            value={this.state.notes}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewGigForm;

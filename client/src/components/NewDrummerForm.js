import React, { Component } from "react";
import axios from "axios";

class NewDrummerForm extends Component {
  state = {
    image: "",
    name: "",
    gender: "",
    age: "",
    location: "",
    instruments: "",
    styles: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      image: this.state.image,
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      location: this.state.location,
      instruments: this.state.instruments,
      styles: this.state.styles,
      gigs: this.state.gigs
    };
    await axios.post("/api/drummer", payload);
    await this.props.getAllDrummers();
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
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="gender"
            value={this.state.gender}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="age"
            value={this.state.age}
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
          <label htmlFor="instruments">Instruments: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="instruments"
            value={this.state.instruments}
          />
        </div>
        <div>
          <label htmlFor="styles">Styles: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="styles"
            value={this.state.styles}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewDrummerForm;

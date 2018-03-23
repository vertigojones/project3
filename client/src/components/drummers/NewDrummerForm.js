import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

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
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="image"
              type="text"
              name="image"
              value={this.state.image}
              required
            />
            <label htmlFor="image">Image URL</label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              required
            />
            <label htmlFor="name">Name</label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="gender"
              type="text"
              name="gender"
              value={this.state.gender}
              required
            />
            <label htmlFor="gender">Gender</label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="age"
              type="text"
              name="age"
              value={this.state.age}
              required
            />
            <label htmlFor="age">Age</label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="location"
              type="text"
              name="location"
              value={this.state.location}
              required
            />
            <label htmlFor="location">Location</label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="instruments"
              type="text"
              name="instruments"
              value={this.state.instruments}
              required
            />
            <label htmlFor="instruments">Instruments</label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="styles"
              type="text"
              name="styles"
              value={this.state.styles}
              required
            />
            <label htmlFor="styles">Styles</label>
            <div className="after" />
          </fieldset>
          <button>Submit</button>
        </form>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div`
  font-family: "Cousine", monospace;
  font-size: 20px;
  form {
    width: 300px;
    margin: 20px auto;
  }

  fieldset {
    position: relative;
    border: none;
  }

  label {
    position: absolute;
    top: 18px;
    color: rgba(0, 0, 0, 0.3);
    transform-origin: left;
    transition: all 0.3s ease;
  }

  input:focus ~ label {
    color: red;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: 0;
    transform: scale(0.6, 0.6);
  }

  input {
    font-size: 20px;
    width: 100%;
    border: none;
    margin-top: 10px;
  }

  input:focus {
    outline: none;
  }

  .after {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, red 50%, transparent 50%);
    background-color: rgba(0, 0, 0, 0.3);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: all 0.6s ease;
  }

  input:focus ~ .after {
    background-position: 0 0;
  }
`;

export default NewDrummerForm;

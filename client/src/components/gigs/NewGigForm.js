import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

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
  };

  render() {
    return (
      <StyleWrapper>
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
                id="date"
                type="text"
                name="date"
                value={this.state.date}
                required
              />
              <label htmlFor="date">Date</label>
              <div className="after" />
            </fieldset>    
            <fieldset>
              <input
                onChange={this.handleChange}
                id="time"
                type="text"
                name="time"
                value={this.state.time}
                required
              />
              <label htmlFor="time">Time</label>
              <div className="after" />
            </fieldset>    
            <fieldset>
              <input
                onChange={this.handleChange}
                id="venue"
                type="text"
                name="venue"
                value={this.state.venue}
                required
              />
              <label htmlFor="venue">Venue</label>
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
                id="artist"
                type="text"
                name="artist"
                value={this.state.artist}
                required
              />
              <label htmlFor="artist">Artist</label>
              <div className="after" />
            </fieldset>    
            <fieldset>
              <input
                onChange={this.handleChange}
                id="equipment"
                type="text"
                name="equipment"
                value={this.state.equipment}
                required
              />
              <label htmlFor="equipment">Equipment</label>
              <div className="after" />
            </fieldset>    
            <fieldset>
              <input
                onChange={this.handleChange}
                id="notes"
                type="text"
                name="notes"
                value={this.state.notes}
                required
              />
              <label htmlFor="notes">Notes</label>
              <div className="after" />
            </fieldset>    
          <button>Submit</button>
        </form>
      </StyleWrapper>
    );
  }
}

const StyleWrapper = styled.div`
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

  button {
    position: relative;
    width: 50%;
    font-size: 20px;
    font-family: system-ui, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    margin-top: 20px;
    padding: 2px 10px;
    color: rgba(0, 0, 0, 0.4);
    background: white;
    border: none;
    background: linear-gradient(to right, red 50%, transparent 50%);
    background-color: rgba(0, 0, 0, 0.3);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: all 0.6s ease;
  }

  button:before {
    position: absolute;
    content: "Submit";
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    display: block;
    background-color: white;
  }

  button:active,
  button:focus,
  button:hover {
    outline: none;
    background-position: 0 0;
    color: red;
  }
`;

export default NewGigForm;

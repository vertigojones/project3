import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class UpdateGig extends Component {
  state = {
    gig: {}
  };

  handleChange = event => {
    const gig = { ...this.state.gig };
    gig[event.target.name] = event.target.value;
    this.setState({ gig });
  };

  componentDidMount() {
    const gig = this.props;
    this.setState({ gig: gig });
  }

  editGig = event => {
    event.preventDefault();
    const gigId = this.props.gigs._id;
    console.log(gigId)
    const payload = this.state.gig;
    axios
      .put(`/api/drummer/${this.props.drummerId}/gigs/${gigId}`, payload)
      .then(res => {
        this.setState({ gig: res.data });
        console.log("Beats away!", res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.props.getSingleDrummer();
        this.props.toggleShowUpdate();
      });
  };
  
  render() {
    return (
      <FormStyles>
        <div>
          <form onSubmit={this.editGig}>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="image"
                type="text"
                name="image"
                value={this.state.gig.image}
                placeholder={this.props.gigs.image}
              />
              <label htmlFor="image" />
              <div className="after" />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="date"
                type="text"
                name="date"
                value={this.state.gig.date}
                placeholder={this.props.gigs.date}
              />
              <label htmlFor="date" />
              <div className="after" />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="time"
                type="text"
                name="time"
                value={this.state.gig.time}
                placeholder={this.props.gigs.time}
              />
              <label htmlFor="time" />
              <div className="after" />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="venue"
                type="text"
                name="venue"
                value={this.state.gig.venue}
                placeholder={this.props.gigs.venue}
              />
              <label htmlFor="venue" />
              <div className="after" />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="location"
                type="text"
                name="location"
                value={this.state.gig.location}
                placeholder={this.props.gigs.location}
              />
              <label htmlFor="location" />
              <div className="after" />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="artist"
                type="text"
                name="artist"
                value={this.state.gig.artist}
                placeholder={this.props.gigs.artist}
              />
              <label htmlFor="artist" />
              <div className="after" />
            </fieldset>
            <fieldset>
              <input
                onChange={this.handleChange}
                id="notes"
                type="text"
                name="notes"
                value={this.state.gig.notes}
                placeholder={this.props.gigs.notes}
              />
              <label htmlFor="notes" />
              <div className="after" />
            </fieldset>
            <div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </FormStyles>
    );
  }
}

const FormStyles = styled.div`
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

export default UpdateGig;

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class UpdateDrummer extends Component {
  state = {
    drummer: {},
    updatedDrummer: {}
  };

  handleChange = event => {
    const drummer = { ...this.state.drummer };
    drummer[event.target.name] = event.target.value;
    this.setState({ drummer });
  };

  componentDidMount() {
    const drummer = this.props;
    this.setState({ drummer: drummer });
  }

  editDrummer = event => {
    event.preventDefault();
    const drummerId = this.props.drummer._id;
    const payload = this.state.drummer;
    axios
      .put(`/api/drummer/${drummerId}`, payload)
      .then(res => {
        this.setState({ drummer: res.data });
        console.log("Beats away!", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <FormStyles>
        <div>
          <form onSubmit={this.editDrummer}>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="image"
              type="text"
              name="image"
              value={this.state.drummer.image}
              placeholder={this.props.drummer.image}
              required
            />
            <label htmlFor="image"></label>
            <div className="after" />
          </fieldset>         
          <fieldset>
            <input
              onChange={this.handleChange}
              id="name"
              type="text"
              name="name"
              value={this.state.drummer.name}
              placeholder={this.props.drummer.name}
              required
            />
            <label htmlFor="name"></label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="gender"
              type="text"
              name="gender"
              value={this.state.drummer.gender}
              placeholder={this.props.drummer.gender}
              required
            />
            <label htmlFor="gender"></label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="age"
              type="text"
              name="age"
              value={this.state.drummer.age}
              placeholder={this.props.drummer.age}
              required
            />
            <label htmlFor="age"></label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="location"
              type="text"
              name="location"
              value={this.state.drummer.location}
              placeholder={this.props.drummer.location}
              required
            />
            <label htmlFor="location"></label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="instruments"
              type="text"
              name="instruments"
              value={this.state.drummer.instruments}
              placeholder={this.props.drummer.instruments}
              required
            />
            <label htmlFor="instruments"></label>
            <div className="after" />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="styles"
              type="text"
              name="styles"
              value={this.state.drummer.styles}
              placeholder={this.props.drummer.styles}
              required
            />
            <label htmlFor="styles"></label>
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

export default UpdateDrummer;

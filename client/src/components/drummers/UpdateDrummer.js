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
            <div>
              <label htmlFor="name">Image URL: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="image"
                value={this.state.drummer.image}
                placeholder={this.props.drummer.image}
              />
            </div>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.drummer.name}
                placeholder={this.props.drummer.name}
              />
            </div>
            <div>
              <label htmlFor="name">Gender: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="gender"
                value={this.state.drummer.gender}
                placeholder={this.props.drummer.gender}
              />
            </div>
            <div>
              <label htmlFor="name">Age: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="age"
                value={this.state.drummer.age}
                placeholder={this.props.drummer.age}
              />
            </div>
            <div>
              <label htmlFor="name">Location: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="location"
                value={this.state.drummer.location}
                placeholder={this.props.drummer.location}
              />
            </div>
            <div>
              <label htmlFor="name">Instruments: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="instruments"
                value={this.state.drummer.instruments}
                placeholder={this.props.drummer.instruments}
              />
            </div>
            <div>
              <label htmlFor="name">Styles: </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="styles"
                value={this.state.drummer.styles}
                placeholder={this.props.drummer.styles}
              />
            </div>
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
`;

export default UpdateDrummer;

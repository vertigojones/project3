import React, { Component } from "react";
import axios from "axios";

class UpdateDrummer extends Component {
  state = {
    drummer: {}
  };

  handleChange = event => {
    const drummer = { ...this.state.drummer };
    drummer[event.target.name] = event.target.value;
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({ drummer });
  };

  componentDidMount() {
    const drummer = this.props;
    this.setState({ drummer: drummer });
    console.log(this.props);
  }

  editDrummer = event => {
    event.preventDefault();
    const drummerId = this.props.drummer._id;
    console.log(drummerId);
    const payload = this.state.drummer;
    console.log(payload);
    axios
      .put(`/api/drummer/${drummerId}`, payload)
      .then(res => {
        console.log("Success!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.editDrummer}>
          <div>
            <label htmlFor="name">Image URL: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="image"
              value={this.state.drummer.image}
              placeholder={this.state.drummer.image}
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.drummer.name}
            />
          </div>
          <div>
            <label htmlFor="name">Gender: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="gender"
              value={this.state.drummer.gender}
            />
          </div>
          <div>
            <label htmlFor="name">Age: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="age"
              value={this.state.drummer.age}
            />
          </div>
          <div>
            <label htmlFor="name">Location: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="location"
              value={this.state.drummer.location}
            />
          </div>
          <div>
            <label htmlFor="name">Instruments: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="instruments"
              value={this.state.drummer.instruments}
            />
          </div>
          <div>
            <label htmlFor="name">Styles: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="styles"
              value={this.state.drummer.styles}
            />
          </div>
          <div>
            <button>Update</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateDrummer;

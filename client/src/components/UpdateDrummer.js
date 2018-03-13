import React, { Component } from "react";

class UpdateDrummer extends Component {
  state = {
    updatedDrummer: {}
  };

  componentWillMount() {
    const updatedDrummer = {
      ...this.state.updatedDrummer
    };

    updatedDrummer.image = this.props.id.image;
    updatedDrummer.name = this.props.id.name;
    updatedDrummer.gender = this.props.id.gender;
    updatedDrummer.age = this.props.id.age;
    updatedDrummer.location = this.props.id.location;
    updatedDrummer.instruments = this.props.id.instruments;
    updatedDrummer.styles = this.props.id.styles;

    this.setState({ updatedDrummer });
  }

  handleUpdatedDrummer = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const updatedDrummer = {
      ...this.state.updatedDrummer
    };

    updatedDrummer[attributeName] = attributeValue;

    this.setState({ updatedDrummer });
  };

  editDrummer = event => {
    event.preventDefault();
    this.props.updateDrummer(this.state.updatedDrummer);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.editDrummer}>
          <div>
            <label htmlFor="name">Image URL: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="image"
              value={this.state.updatedDrummer.image}
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="name"
              value={this.state.updatedDrummer.name}
            />
          </div>
          <div>
            <label htmlFor="name">Gender: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="gender"
              value={this.state.updatedDrummer.gender}
            />
          </div>
          <div>
            <label htmlFor="name">Age: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="age"
              value={this.state.updatedDrummer.age}
            />
          </div>
          <div>
            <label htmlFor="name">Location: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="location"
              value={this.state.updatedDrummer.location}
            />
          </div>
          <div>
            <label htmlFor="name">Instruments: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="instruments"
              value={this.state.updatedDrummer.instruments}
            />
          </div>
          <div>
            <label htmlFor="name">Styles: </label>
            <input
              onChange={this.handleUpdatedDrummer}
              type="text"
              name="styles"
              value={this.state.updatedDrummer.styles}
            />
          </div>
          <div>
            <button type="submit" value="Update Drummer" />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateDrummer;

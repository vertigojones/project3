import React, { Component } from "react";
import Gigs from "./Gigs";
//import NewGigForm from "./NewGigForm";

class GigList extends Component {
  state = {
    showNewForm: false
  };

  toggleShowNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShowNewForm}>Create New Gig</button>
        {/* {this.state.showNewForm ? <NewGigForm getAllGigs={this.props.getAllGigs} gigList={this.props.gigList} /> : null} */}
        <hr />
        {this.props.gigList.map((gigs, i) => {
          return (
            <Gigs
              key={i}
              gigs={gigs}
              gigId={this._id}
              drummerId={this.props.drummerId}
            />
          );
        })}
      </div>
    );
  }
}

export default GigList;

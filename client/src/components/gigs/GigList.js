import React, { Component } from "react";
import Gigs from "./Gigs";

class GigList extends Component {
  render() {
    return (
      <div>
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

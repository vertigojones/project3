import React, { Component } from "react";
import Gigs from "./Gigs";

class GigList extends Component {
  render() {
    return (
      <div>
        {this.props.gigList.map((gigs, i) => {
          return <Gigs key={i} gigs={gigs} />;
        })}
      </div>
    );
  }
}

export default GigList;

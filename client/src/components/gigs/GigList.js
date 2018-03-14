import React, { Component } from "react";
import Gigs from "./Gigs";

class GigList extends Component {
  render() {
    return (
      <div>
        {this.props.gigList.map((gig, i) => {
          return <Gigs key={i} gig={gig} />;
        })}
      </div>
    );
  }
}

export default GigList;

import React, { Component } from "react";
import EquipmentIndex from "./EquipmentIndex";

class EquipmentList extends Component {
  render() {
    return (
      <div>
        {this.props.equipmentList.map((gigs, i) => {
          return <EquipmentIndex key={i} gigs={gigs} />;
        })}
      </div>
    );
  }
}

export default EquipmentList;
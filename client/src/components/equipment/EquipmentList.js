import React, { Component } from "react";
import Equipment from "./Equipment";

class EquipmentList extends Component {
  render() {
    return (
      <div>
        {this.props.gigList.map((equipment, i) => {
          return <Equipment key={i} equipment={equipment} />;
        })}
      </div>
    );
  }
}

export default EquipmentList;

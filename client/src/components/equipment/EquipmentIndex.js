import React, { Component } from 'react';
import Equipment from "./Equipment"

class EquipmentIndex extends Component {
    render() {
        return (
            <div>
                {this.props.gigs.equipment.map((equipment, i) => {
            return <Equipment key={i} equipment={equipment} />;
          })}
            </div>
        );
    }
}

export default EquipmentIndex;
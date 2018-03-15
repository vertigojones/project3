import React, { Component } from 'react';

class EquipmentName extends Component {
    render() {
        return (
            <div>
                <h4>Equipment needed: {this.props.equipment.set}</h4>
            </div>
        );
    }
}

export default EquipmentName;
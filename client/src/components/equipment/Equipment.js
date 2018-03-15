import React, { Component } from 'react';

class Equipment extends Component {
    render() {
        return (
            <div>
                <h4>Equipment: {this.props.equipment.set}</h4>
            </div>
        );
    }
}

export default Equipment;
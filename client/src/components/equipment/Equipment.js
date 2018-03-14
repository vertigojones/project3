import React, { Component } from 'react';

class Equipment extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.gigs.equipment.set}</h4>
            </div>
        );
    }
}

export default Equipment;
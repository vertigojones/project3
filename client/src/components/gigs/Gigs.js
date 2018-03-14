import React, { Component } from 'react';

class Gigs extends Component {
    render() {
        return (
            <div>
                <img src={this.props.gigs.image} alt="Venue" />
                <h4>Date: {this.props.gigs.date}</h4>
                <h4>Time: {this.props.gigs.time}</h4>
                <h4>Venue: {this.props.gigs.venue}</h4>
                <h4>Location: {this.props.gigs.location}</h4>
                <h4>Artist: {this.props.gigs.artist}</h4>
            </div>
        );
    }
}

export default Gigs;
import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }


 render() {

 const { events } = this.props;

 return (
  <div>
    <p>Number of Events: <input type="text" value={this.state.numberOfEvents}/></p>
  </div>
 )

 }

};

export default NumberOfEvents;
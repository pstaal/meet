import React, { Component } from 'react';

class NumberOfEvents extends Component {

 render() {

 const { events } = this.props;

 return (
  <div>
    <p>Number of Events: <input type="text" value={32}/></p>
  </div>
 )

 }

};

export default NumberOfEvents;
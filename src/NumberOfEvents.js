import React, { Component } from 'react';

class NumberOfEvents extends Component {



 render() {

 const { numberOfEvents, handleChange } = this.props;

 return (
  <div>
    <p>Number of Events: <input type="text" value={numberOfEvents} onChange={(e)=> handleChange(e.target.value)} /></p>
  </div>
 )

 }

};

export default NumberOfEvents;
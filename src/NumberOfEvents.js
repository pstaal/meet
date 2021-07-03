import React, { Component } from 'react';

class NumberOfEvents extends Component {

 render() {

  const { events } = this.props;

 return (
  <div>
    <input type="text" value={events.length}/>
  </div>
 )

 }

};

export default NumberOfEvents;
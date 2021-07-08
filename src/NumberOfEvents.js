import React, { Component } from 'react';

class NumberOfEvents extends Component {


changeHandler = (e) => {
  if (e.target.value === '') {
    let countValue = 0;
    this.props.updateEvents(undefined, 0)
  } else {
    this.props.updateEvents(undefined, e.target.value)
  }
 };



 render() {

 const { numberOfEvents } = this.props;


 return (
  <div>
    <p>Number of Events: <input type="text" value={numberOfEvents} onChange={(e)=> this.changeHandler(e)} /></p>
  </div>
 )

 }

};

export default NumberOfEvents;
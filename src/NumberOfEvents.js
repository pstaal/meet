import React, { Component } from 'react';

class NumberOfEvents extends Component {

state = {
  eventValue: 32
};


changeHandler = (e) => {
  if (e.target.value === '') {
    let countValue = 0;
    this.props.updateEvents(undefined, countValue)
  } else {
    this.props.updateEvents(undefined, e.target.value)
  }
  this.setState({eventValue: e.target.value});

 };



 render() {

 const { numberOfEvents } = this.props;


 return (
  <div>
    <p>Number of Events: <input type="text" className="numOfEvents" value={this.state.eventValue} onChange={(e)=> this.changeHandler(e)} /></p>
  </div>
 )

 }

};

export default NumberOfEvents;
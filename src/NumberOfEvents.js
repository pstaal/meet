import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

state = {
  eventValue: 32,
  errorText: ''
};


changeHandler = (e) => {
  if (e.target.value === '') {
    let countValue = 0;
    this.props.updateEvents(undefined, countValue);
    this.setState({eventValue: e.target.value})
  } else if (Number(e.target.value) > 32 || Number(e.target.value) < 0 ) {
    this.setState({eventValue: e.target.value, errorText: 'Please choose a number between 0 and 32'})
  }
  else {
    this.props.updateEvents(undefined, e.target.value);
    this.setState({eventValue: e.target.value, errorText: ''});
  }
 };



 render() {

 return (
  <div>
    <p>Number of Events: <input type="text" className="numOfEvents" value={this.state.eventValue} onChange={(e)=> this.changeHandler(e)} /></p>
    <ErrorAlert text={this.state.errorText} />
  </div>
 )

 }

};

export default NumberOfEvents;
// src/Event.js

import React, { Component } from "react";

class Event extends Component {

  state = {
   expand: false
  }

  onClickHandler = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const { event } = this.props;
    const { expand } = this.state;

    return (
      <>
       { !expand ?
       <div> 
        <h1 className="event_title">{event.summary}</h1>
          <div className="event_description">
            {event.start.dateTime} ({event.start.timeZone}) <br />@{event.summary} | {event.location}
            </div>
        <button onClick={this.onClickHandler}>Show details</button>
      </div>
        :
      <div>
      <h1 className="event_title">{event.summary}</h1>
        <div className="event_description">
       {event.start.dateTime} ({event.start.timeZone}) <br />@{event.summary} | {event.location}
       </div>
        <h2>About Event:</h2>
        <button onClick={this.onClickHandler}>Hide details</button>
      </div>
      }
    </>
      
    )
  }
}
export default Event;
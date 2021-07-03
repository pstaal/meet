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
    const { events } = this.props;
    const { expand } = this.state;

    let renderedDiv;
    if (!expand) {
     renderedDiv = events.map(event => <div key={event.id} className="event_title">
     <h1>{event.summary}</h1>
     <div className="event_description">
       {event.start.dateTime} ({event.start.timeZone}) <br />@{event.summary} | {event.location}
     </div>
     <button onClick={this.onClickHandler}>Show details</button>
   </div>)
    }

    else if (expand) {
      renderedDiv = events.map(event => <div key={event.id} className="event_title">
     <h1>{event.summary}</h1>
     <div className="event_description">
       {event.start.dateTime} ({event.start.timeZone}) <br />@{event.summary} | {event.location}
     </div>
     <h2>About Event:</h2>
     <button onClick={this.onClickHandler}>Hide details</button>
   </div>)

    }
    return (
      <>
      {renderedDiv}  
      </>
    )
  }
}
export default Event;
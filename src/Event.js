// src/Event.js

import React, { Component } from "react";

class Event extends Component {

  render() {
    const { events } = this.props;
    return (
      <>
      {events.map(event => <div key={event.id} className="event_title">
        <h1>{event.summary}</h1>
        <div className="event_description">
          {event.start.dateTime} ({event.start.timeZone}) <br />@{event.summary} | {event.location}
        </div>
        <button>Show details</button>
      </div>)}   
      </>
    )
  }
}
export default Event;
// src/Event.js

import React, { Component } from "react";

class Event extends Component {

  render() {
    const { events } = this.props;
    return (
      <div>
      {events.map(event => <div key={event.id} className="event_title">{event.summary}</div>)}   
      </div>
    )
  }
}
export default Event;
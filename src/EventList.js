import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  const { events } = this.props;

  render() {
    return (
      <ul className="EventList">
        {events.map(event =>
        <li>
          <Event event={event} />
        </li>
      )}
      </ul>
    );
  }
}

export default EventList;
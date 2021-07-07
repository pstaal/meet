// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  updateEvents = (location, eventCount) => {
    if (!eventCount && location) {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        locationEvents.length = this.state.numberOfEvents;
      this.setState({
        events: locationEvents
      });
    });
    }
    else if (eventCount && !location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
          locationEvents.length = eventCount;
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount
        });
      });

    }

  }
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      events.length = this.state.numberOfEvents;
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

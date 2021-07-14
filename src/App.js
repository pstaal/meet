// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { ErrorAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all'
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        let newEventArray = locationEvents.slice(0, this.state.numberOfEvents);
        console.log(location)
      this.setState({
        events: newEventArray,
        currentLocation: location
      });
    });
    }
    else if (location === undefined) {
      getEvents().then((events) => {
        const locationEvents = (this.state.currentLocation === 'all') ?
          events :
          events.filter((event) => event.location === this.state.currentLocation);
          let cutOff = Math.min(locationEvents.length, Number(eventCount));
          let newEventArray = locationEvents.slice(0, cutOff)
        this.setState({
          events: newEventArray,
          numberOfEvents: Number(eventCount)
        });
      });

    }

  }
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      let cutOff = Math.min(events.length, this.state.numberOfEvents)
      events = events.slice(0,cutOff);
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (navigator.onLine) {
    return (
        <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        </div>
    )}

    else if (!navigator.onLine) {
        return (
        <div className="App">
        <ErrorAlert text={'Please be aware that this list has been loaded from cache!'} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} /> 
        </div>
        )}
      
    
  }
}

export default App;

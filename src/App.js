// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ErrorAlert } from './Alert';
import './nprogress.css';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
    if (this.mounted) {
    this.setState({ events, locations: extractLocations(events) });
          }
        });
      }
    }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" /> 
    return (
        <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />      
         <h4>Events in each city</h4>
         <div className="data-vis.wrapper">
         <EventGenre events={this.state.events} />
         <ResponsiveContainer height={400} >
         <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
          <Legend verticalAlign="bottom" height={36}/>
        </ScatterChart>
        </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
        </div>
    )
  }
};


export default App;

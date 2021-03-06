import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ErrorAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined,
    text: navigator.onLine ? 'Online' : 'Offline'
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

  async componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      getEvents().then((events) => {
        console.log(events, 'called from inside offline')
      if (this.mounted) {
      
      this.setState({ events, locations: extractLocations(events), showWelcomeScreen: false });
          
      }
      
    });
     return;   

    }
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    console.log(code, 'inside');
    console.log(isTokenValid, 'inside');
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
        <ErrorAlert text={this.state.text === 'Offline' ? 'Please be aware that the list is taken from cache' : ''} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />  
        </div>
    )

  }
      
    
  
}

export default App;
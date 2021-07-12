import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/numberOfEvents.feature');


defineFeature(feature, test => {

  test('When user hasn’t specified a number, 2 (32 in live production) is the default number', ({ given, when, then }) => {
    let EventListWrapper;
    given('the user is on the events page', () => {
      EventListWrapper = mount(<EventList events={mockData}/>);
    });

    when('the user has not selected a number of events to show', () => {

    });

    then('the page will show 2 (32 in live production) events by default', () => {
      expect(EventListWrapper.find('.event')).toHaveLength(2);
    });
  });

  

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user is on the events page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user selects the number of events to display', () => {
    const eventObject = { target: {value: 1}};
    AppWrapper.find('.numOfEvents').simulate('change', eventObject);
    });

    then('the page will show the number of events that the user selected', () => {
      expect(AppWrapper.state('events').length).toBe(AppWrapper.state('numberOfEvents'));
    });

  });







});
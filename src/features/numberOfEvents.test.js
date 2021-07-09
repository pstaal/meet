import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/numberOfEvents.feature');


defineFeature(feature, test => {

  test('When user hasn’t specified a number, 2 (32 in live production) is the default number', ({ given, when, then }) => {
    given('the user is on the events page', () => {

    });

    when('the user has not selected a number of events to show', () => {

    });

    then('the page will show 2 (32 in live production) events by default', () => {

    });
  });

  

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the user is on the events page', () => {

    });

    when('the user selects the number of events to display', () => {

    });

    then('the page will show the number of events that the user selected', () => {

    });

  });







});
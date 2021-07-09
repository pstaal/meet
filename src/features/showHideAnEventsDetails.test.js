import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
     
    });

    when('user looks at all the events', () => {
      AppWrapper = mount(<App />);
    });

    then('the events should be collapsed by default', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the user is on a particular collapsed event', () => {
      EventWrapper = mount(<Event event={mockData[0]}/>);
    });

    when('user clicks on a link to expand the event', () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('the event will expand to show all the details', () => {
      expect(EventWrapper.find('.event__Details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the user is on a particular expanded event', () => {
      EventWrapper = mount(<Event event={mockData[0]}/>);
    });

    when('user clicks on a link to collapse the event', () => {
      EventWrapper.find('.details-btn').simulate('click');
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('the event will collapse to hide all the details', () => {
      expect(EventWrapper.find('.event__Details')).toHaveLength(0);
    });
  });


});

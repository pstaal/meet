import React from 'react';
import { shallow } from 'enzyme';
import { mockEventData } from '../mock-data-events';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={mockEventData}/>);
  });

  test('render the right amount of titles', () => {
    expect(EventWrapper.find('.event_title')).toHaveLength(mockEventData.length);
  });

  test('render the right amount of descriptions', () => {
    expect(EventWrapper.find('.event_description')).toHaveLength(mockEventData.length);
  });
  
  test('render titles with the right content', () => {
    for (let i = 0; i < mockEventData.length; i += 1) {
      expect(EventWrapper.find('h1').at(i).text()).toBe(mockEventData[i].summary);
    }
  });

  test('render descriptions with dates', () => {
    for (let i = 0; i < mockEventData.length; i += 1) {
      expect(EventWrapper.find('.event_description').at(i).text()).toContain(mockEventData[i].start.dateTime);
    }
  });

  test('render descriptions with times', () => {
    for (let i = 0; i < mockEventData.length; i += 1) {
      expect(EventWrapper.find('.event_description').at(i).text()).toContain(mockEventData[i].start.timeZone);
    }
  });

  test('render descriptions with summary', () => {
    for (let i = 0; i < mockEventData.length; i += 1) {
      expect(EventWrapper.find('.event_description').at(i).text()).toContain(mockEventData[i].summary);
    }
  });

  test('render descriptions with summary', () => {
    for (let i = 0; i < mockEventData.length; i += 1) {
      expect(EventWrapper.find('.event_description').at(i).text()).toContain(mockEventData[i].location);
    }
  });

});
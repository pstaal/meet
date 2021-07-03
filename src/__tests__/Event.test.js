import React from 'react';
import { shallow } from 'enzyme';
import { mockEventData } from '../mock-data-events';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockEventData}/>);
  });
  
  test('render title with the right content', () => {
      expect(EventWrapper.find('h1').text()).toBe(mockEventData.summary);
  });

  test('render description with dates', () => {
      expect(EventWrapper.find('.event_description').text()).toContain(mockEventData.start.dateTime);
  });

  test('render descriptions with time', () => {
      expect(EventWrapper.find('.event_description').text()).toContain(mockEventData.start.timeZone);
  });

  test('render description with summary', () => {
      expect(EventWrapper.find('.event_description').text()).toContain(mockEventData.summary);
  });

  test('render descriptions with summary', () => {
      expect(EventWrapper.find('.event_description').text()).toContain(mockEventData.location);
  });

  test('check if there is a button', () => {
    expect(EventWrapper.find('button')).toHaveLength(1);
  });

  test('h2 element should not be present by default', () => {
    expect(EventWrapper.find('h2').exists()).toBeFalsy();
  });

  test('h2 element should be present after clicking button', () => {
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.find('h2').exists()).toBeTruthy();
  });

  test('h2 element should disappear after clicking button twice', () => {
    EventWrapper.setState({
      expand: true });
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.find('h2').exists()).toBeFalsy();
  });

  test('render proper text in h2 after clicking button', () => {
      EventWrapper.find('button').simulate('click');
      expect(EventWrapper.find('h2').text()).toBe('About Event:');
  });

  test("clicking the button should change expand state", () => {
    EventWrapper.setState({
      expand: true });
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state("expand")).toBe(false);
  });


});
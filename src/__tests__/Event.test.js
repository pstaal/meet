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

});
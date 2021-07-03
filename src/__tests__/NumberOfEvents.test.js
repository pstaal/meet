import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents event={mockData}/>);
  });

  test('check if there is an input field', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

}); 

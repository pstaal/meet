import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData}/>);
  });

  test('check if there is an input field', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

  test('check if the value of the input field is 32', () => {
    expect(NumberOfEventsWrapper.find('input').props().value).toBe(32);
  });

}); 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import Header from './Header';



it('header test', () => {
    // ARRANGE
const component = shallow(<Header/>);
   
expect(component.find('div')).toHaveProperty('length',1);
  });
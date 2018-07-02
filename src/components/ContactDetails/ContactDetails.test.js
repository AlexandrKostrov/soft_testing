import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount  } from 'enzyme';
import ContactDetail from './ContactDetails';



it('header test strange behavior', () => {
    const buyFn = jest.fn();
const component = <ContactDetail avatar={"aaa"} fullName={"Antoxa"}
id={3} acticleCont={{}} redisplayState={buyFn}/>;

const tree = mount (component);
tree.find('button').simulate('click');
expect(buyFn).toHaveBeenCalled();
  });
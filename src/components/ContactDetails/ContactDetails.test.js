import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount  } from 'enzyme';
import ContactDetail from './ContactDetails';



it('header test strange behavior', () => {
    const buyFn = jest.fn();
    const mouseFn = jest.fn();
const component = <ContactDetail avatar={"aaa"} fullName={"Antoxa"}
id={3} acticleCont={{}}  />;

const tree = mount (component);
//tree.find('button').simulate('click');
tree.find('span.name').simulate('mouseEnter');
expect(mouseFn).toHaveBeenCalled()
//expect(buyFn).toHaveBeenCalled();
  });
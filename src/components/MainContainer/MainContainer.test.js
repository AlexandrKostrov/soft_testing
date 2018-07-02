import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount,render  } from 'enzyme';
import MainContainer from './MainContainer';



it('MainContainer Test', () => {
    const buyFn = jest.fn();
const component = <MainContainer user={[]} visibility={{x:0,y:0}} butAction={buyFn} getUser={()=>{}}/>;

const tree = mount (component);

//tree.find('button.load-more').at(1).simulate('click');
//expect(tree.find('main')).toHaveLength(3);
expect(tree.find('button')).toHaveLength(4);
  });
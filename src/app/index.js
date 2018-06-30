import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import {prevState} from '../components/reducers/contacts';
import App from './App';

export default compose(
    connect(
      ({ contacts }) => ({
        contacts,
       
      } ),
      {
        prevState,
      }
    ),
 
  )(App);
  
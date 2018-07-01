import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import {prevState} from '../components/reducers/user';
import App from './App';

export default compose(
    connect(
      ({ user }) => ({
        user,
       
      } ),
      {
        prevState,
      }
    ),
 
  )(App);
  
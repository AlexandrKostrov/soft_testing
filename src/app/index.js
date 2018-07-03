import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import {prevState} from '../components/reducers/user';
import {visibilSwitch} from '../components/reducers/visibility';
import App from './App';

export default compose(
    connect(
      ({ user, visibility }) => ({
        user, visibility
       
      } ),
      {
        prevState,
        visibilSwitch,
      }
    ),
 
  )(App);
  
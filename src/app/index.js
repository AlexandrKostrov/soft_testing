import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import App from './App';

export default compose(
    connect(
      ({ contacts }) => ({
        contacts,
       
      } ),
      {
       
      }
    ),
 
  )(App);
  
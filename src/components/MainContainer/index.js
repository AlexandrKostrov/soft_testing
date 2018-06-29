import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import {loadContact, sortByDate, sortByName} from '../reducers/contacts'
import MainContainer from './MainContainer';

export default compose(
    connect(
      ({ contacts }) => ({
        contacts,
       
      } ),
      {
        loadContact,
        sortByDate,
        sortByName,
      }
    ),
 
  )(MainContainer);
  
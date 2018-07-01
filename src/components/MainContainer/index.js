import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
// import {loadContact, sortByDate, sortByName,matchCatch,prevState,} from '../reducers/contacts'
import {getUser,sortByServName,sortById,loadContact,matchCatch,prevState} from '../reducers/user';
import MainContainer from './MainContainer';

export default compose(
    connect(
      ({ user }) => ({
        user,
       
      } ),
      {
        sortByServName,
        sortById,
        getUser,
        loadContact,
        matchCatch,
        prevState
      }
    ),
 
  )(MainContainer);
  
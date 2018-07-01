import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
// import {loadContact, sortByDate, sortByName,matchCatch,prevState,} from '../reducers/contacts'
import {getUser,sortByServName,sortById,loadContact,matchCatch,prevState} from '../reducers/user';
import {scrollControl,visibilSwitch} from '../reducers/visibility';
import MainContainer from './MainContainer';

export default compose(
    connect(
      ({ user,visibility }) => ({
        user,visibility
       
      } ),
      {
        sortByServName,
        sortById,
        getUser,
        loadContact,
        matchCatch,
        prevState,
        scrollControl,
        visibilSwitch
      }
    ),
 
  )(MainContainer);
  
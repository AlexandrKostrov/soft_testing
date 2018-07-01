import { combineReducers } from 'redux';
import contacts from './contacts';
import user from './user';
import visibility from './visibility';

export default combineReducers({
    contacts,
    user,
    visibility
});
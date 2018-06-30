import contacts from '../../stubs/contacts';
import uuid from 'uuid/v4';
import {dateSort, nameSort} from '../../functions/sortingFunctions/contactsSort'

let currentState = contacts.slice(0,3);
export default function stateReducer(state = contacts.slice(0,3), action) {
     
    switch (action.type) {
     case 'LOAD_MORE' : {
       const length = state.length;
       const addedContacts = contacts.slice(length,length + 3);
       const newState = [...state, ... addedContacts.filter(elem=>{
        return state.indexOf(elem) === -1 ;
       })];
       currentState = [...newState];
       return newState;
        }
     case 'DATE_SORT' : {
       const sortedState = [...state.sort(dateSort)];
       return sortedState;
        }
     case 'NAME_SORT' : {
       const sortedState = [...state.sort(nameSort)];
       return sortedState;
        }
     case 'MATCH_DATA': {
       const newlyState = [...currentState];
       
       const value = action.payload;
  
        const newStateMatching = newlyState.filter((obj) => {
           if(!value){return newlyState}
           return obj.lastName.indexOf(value) !== -1 ;
          
          }
         );
       return newStateMatching;
     }
    default:
    return state;
}
}

export function loadContact(payload) {
    return {
      type: 'LOAD_MORE',
      payload,
    };
  }

  export function sortByDate(payload) {
    return {
      type: 'DATE_SORT',
      payload,
    };
  }

  export function sortByName(payload) {
    return {
      type: 'NAME_SORT',
      payload,
    };
  }

  export function matchCatch(value) {
    return {
      type: 'MATCH_DATA',
      payload: value,
    };
  }
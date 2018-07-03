import { getUserData } from '../../api';
import {idSortDesc, servNameSort} from '../../functions/sortingFunctions/contactsSort'

const initialState = [];
let allUsers = [];
let currentState = [];

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
        allUsers = action.result;
        currentState = action.result.slice(0,3);
        return currentState;
    }
    case 'LOAD_MORE' : {
         const length = state.length;
         const addedContacts = allUsers.slice(length,length + 3);
         const newState = [...state, ... addedContacts.filter(elem=>{
          return state.indexOf(elem) === -1 ;
         })];
         currentState = [...newState];
         return newState;

         }
    case 'ID_SORT' : {

        return [...state.sort(idSortDesc)];;
         }
    case 'NAME_SORT' : {

        return [...state.sort(servNameSort)];
         }
    case 'PREVIOUS_STATE': {
     
        return  currentState ;
         } 
    case 'MATCH_DATA': {
        const match =new RegExp(action.payload, "i");    
        const newStateMatching = currentState.filter((obj) => {
         if(!action.payload){return currentState}
          return  match.test(obj.name) ;            
        }
          );
     return newStateMatching;
        }    
    
    default:
      return state;
  }
}

 
 export function getUser(payload) {
   return {
     type: 'LOGIN',
     payload,
    promise: getUserData,
   };
 }
 export function loadContact(payload) {
    return {
      type: 'LOAD_MORE',
      payload,
    };
  }
 export function sortById(payload) {
    return {
      type: 'ID_SORT',
      payload,
    };
  }

  export function sortByServName(payload) {
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
  export function prevState(payload) {
    return {
      type: 'PREVIOUS_STATE',
      payload,
    };
  }

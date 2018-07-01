const initialState = {visibility : false,
                      x : 0,
                      y : 0,   
                    };

export default function stateReducer(state = initialState, action) {
     switch (action.type) {
         case 'VISIBILITY_SWITCH' : {
             const visibility = !state.visibility;
             const {x,y} = state;
             const newState = {visibility,x,y};

             return newState;
         }
         case 'SCROLL_CHANGE' : {
            const event = action.payload;
            const x = event.target.scrollTop;
            const y =event.target.scrollLeft;
            const visibility = state.visibility;
            const newState = {visibility,x,y};

            return newState;
         }
         default:
      return state;
     }
}


export function visibilSwitch(payload) {
    return {
      type: 'VISIBILITY_SWITCH',
      payload,
    };
  }

  export function scrollControl(event) {
    return {
      type: 'SCROLL_CHANGE',
      payload: event,
    };
  }
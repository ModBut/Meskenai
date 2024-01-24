import * as c from '../Constants/counterConstants';

export default function counterPeterReducer(state = 0, action) {
   let newState = { ...state };
        switch (action.type) {
            case c.ADD:
                newState.number += action.payload;
                newState.error = '';
                break;
            case c.ERROR:
                newState.error = action.payload;
                break;
            case c.REMOVE:
                newState.number -= action.payload;
                newState.error = '';
                break;
            default:
        }
   return newState;
}
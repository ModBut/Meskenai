import * as c from '../Constants/counterConstants';

export default function counterEmmaReducer(state = 0, action) {
   let newState = { ...state };
        switch (action.type) {
            case c.ADD_1:
                newState.number++;
                newState.error = '';
                break;
            case c.REMOVE_1:
                newState.number--;
                newState.error = '';
                break;
            case c.SET_0:
                newState.number = 0;
                newState.error = '';
                break;
            default:
        }
   return newState;
}
import * as constants from '../Constants/heroes';

export default function heroesReducer(state, action) {

    let newState = structuredClone(state ? state : []);
    let heroe = null;

    switch (action.type) {
        case constants.GET_HEROES_FROM_SERVER:
            newState = action.payload;
            break;
        case constants.CREATE_HEROE:
            newState.unshift({ ...action.payload, temp: true });
            break;
        case constants.CREATE_HEROE_REAL:
            heroe = newState.find(heroe => heroe.id === action.payload.uuid);
            if (heroe) {
                delete heroe.temp;
                heroe.id = action.payload.id;
            }
            break;
        case constants.CREATE_HEROE_UNDO:
            newState = newState.filter(heroe => heroe.id !== action.payload.id);
            break;
        case constants.DELETE_HEROE:
            heroe = newState.find(heroe => heroe.id === action.payload.id);
            if (heroe) {
                heroe.deleted = true;
            }
            break;
        case constants.DELETE_HEROE_REAL:
            newState = newState.filter(heroe => heroe.id !== action.payload.id);
            break;
        case constants.DELETE_HEROE_UNDO:
            heroe = newState.find(heroe => heroe.id === action.payload.id);
            if (heroe) {
                delete heroe.deleted;
            }
            break;
        case constants.EDIT_HEROE:
            heroe = newState.find(heroe => heroe.id === action.payload.id);
            if (heroe) {
                for (let key in action.payload) {
                    heroe[key] = action.payload[key];
                }
                heroe.temp = true;
            }
            break;
        case constants.EDIT_HEROE_REAL:
            heroe = newState.find(heroe => heroe.id === action.payload.id);
            if (heroe) {
                delete heroe.temp;
                delete heroe.old;
            }
            break;
        case constants.EDIT_HEROE_UNDO:
            heroe = newState.find(heroe => heroe.id === action.payload.id);
            if (heroe) {
                for (let key in action.payload.old) {
                    heroe[key] = action.payload.old[key];
                }
                delete heroe.temp;
                delete heroe.old;
            }
            break;
        default:
    }

    return newState;
}
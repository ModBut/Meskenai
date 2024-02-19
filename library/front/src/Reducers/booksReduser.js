import * as constants from '../Constants/books';

export default function booksReducer(state, action) {

    let newState = structuredClone(state ? state : []);
    let book = null;

    switch (action.type) {
        case constants.GET_BOOKS_FROM_SERVER:
            newState = action.payload;
            break;
        case constants.CREATE_BOOK:
            newState.unshift({ ...action.payload, temp: true });
            break;
        case constants.CREATE_BOOK_REAL:
            book = newState.find(book => book.id === action.payload.uuid);
            if (book) {
                delete book.temp;
                book.id = action.payload.id;
            }
            break;
        case constants.CREATE_BOOK_UNDO:
            newState = newState.filter(book => book.id !== action.payload.id);
            break;
        case constants.DELETE_BOOK:
            book = newState.find(book => book.id === action.payload.id);
            if (book) {
                book.deleted = true;
            }
            break;
        case constants.DELETE_BOOK_REAL:
            newState = newState.filter(book => book.id !== action.payload.id);
            break;
        case constants.DELETE_BOOK_UNDO:
            book = newState.find(book => book.id === action.payload.id);
            if (book) {
                delete book.deleted;
            }
            break;
        case constants.EDIT_BOOK:
            book = newState.find(book => book.id === action.payload.id);
            if (book) {
                for (let key in action.payload) {
                    book[key] = action.payload[key];
                }
                book.temp = true;
            }
            break;
        case constants.EDIT_BOOK_REAL:
            book = newState.find(book => book.id === action.payload.id);
            if (book) {
                delete book.temp;
                delete book.old;
            }
            break;
        case constants.EDIT_BOOK_UNDO:
            book = newState.find(book => book.id === action.payload.id);
            if (book) {
                for (let key in action.payload.old) {
                    book[key] = action.payload.old[key];
                }
                delete book.temp;
                delete book.old;
            }
            break;
        default:
    }



    return newState;
}
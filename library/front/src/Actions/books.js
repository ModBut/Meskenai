import * as constants from '../Constants/books';

export function getBooks(book) {
    return {
        type: constants.GET_BOOKS_FROM_SERVER,
        payload: book
    }
}

export function createBookAsTemp(book) {
    return {
        type: constants.CREATE_BOOK,
        payload: book
    }
}

export function createBookAsReal(response) {
    return {
        type: constants.CREATE_BOOK_REAL,
        payload: response
    }
}

export function createBookAsUndo(book) {
    return {
        type: constants.CREATE_BOOK_UNDO,
        payload: book
    }
}

export function deleteBookAsTemp(book) {
    return {
        type: constants.DELETE_BOOK,
        payload: book
    }
}

export function deleteBookAsReal(response) {
    return {
        type: constants.DELETE_BOOK_REAL,
        payload: response
    }
}

export function deleteBookAsUndo(book) {
    return {
        type: constants.CREATE_BOOK_UNDO,
        payload: book
    }
}

export function editBookAsTemp(book) {
    return {
        type: constants.EDIT_BOOK,
        payload: book
    }
}

export function editBookAsReal(response) {
    return {
        type: constants.EDIT_BOOK_REAL,
        payload: response
    }
}

export function editBookAsUndo(book) {
    return {
        type: constants.EDIT_BOOK_UNDO,
        payload: book
    }
}

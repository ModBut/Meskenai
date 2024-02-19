import * as constants from '../Constants/authors';


export function getAuthors(author) {
    return {
        type: constants.GET_AUTHORS_FROM_SERVER,
        payload: author
    }
}

export function createAuthorAsTemp(author) {
    return {
        type: constants.CREATE_AUTHOR,
        payload: author
    }
}

export function createAuthorReal(response) {
    return {
        type: constants.CREATE_AUTHOR_REAL,
        payload: response
    }
}

export function createAuthorUndo(author) {
    return {
        type: constants.CREATE_AUTHOR_UNDO,
        payload: author
    }
}

export function deleteAuthorAsTemp(author) {
    return {
        type: constants.DELETE_AUTHOR,
        payload: author
    }
}

export function deleteAuthorAsReal(response) {
    return {
        type: constants.DELETE_AUTHOR_REAL,
        payload: response
    }
}

export function deleteAuthorUndo(author) {
    return {
        type: constants.DELETE_AUTHOR_UNDO,
        payload: author
    }
}

export function editAuthorAsTemp(author) {
    return {
        type: constants.EDIT_AUTHOR,
        payload: author
}
}

export function editAuthorAsReal(response) {
    return {
        type: constants.EDIT_AUTHOR_REAL,
        payload: response
    }
}

export function editAuthorAsUndo(author) {
    return {
        type: constants.EDIT_AUTHOR_UNDO,
        payload: author
    }
}

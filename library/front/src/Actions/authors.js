import * as constants from '../Constants/authors';


export function getAuthors(authors) {
    return {
        type: constants.GET_AUTHORS_FROM_SERVER,
        payload: authors
    }
}

export function storeAuthorAsTemp(authors) {
    return {
        type: constants.CREATE_AUTHOR,
        payload: authors
    }
}

export function storeAuthorReal(response) {
    return {
        type: constants.CREATE_AUTHOR_REAL,
        payload: response
    }
}

export function storeAuthorUndo(authors) {
    return {
        type: constants.CREATE_AUTHOR_UNDO,
        payload: authors
    }
}

export function deleteAuthorAsTemp(authors) {
    return {
        type: constants.DELETE_AUTHOR,
        payload: authors
    }
}

export function deleteAuthorAsReal(response) {
    return {
        type: constants.DELETE_AUTHOR_REAL,
        payload: response
    }
}

export function deleteAuthorUndo(authors) {
    return {
        type: constants.DELETE_AUTHOR_UNDO,
        payload: authors
    }
}

export function updateAuthorAsTemp(authors, oldAuthor) {
    return {
        type: constants.UPDATE_AUTHOR,
        payload: {authors, oldAuthor}
    }
}

export function updateAuthorAsReal(response) {
    return {
        type: constants.CREATE_AUTHOR_REAL,
        payload: response
    }
}

export function updateAuthorAsUndo(authors) {
    return {
        type: constants.CREATE_AUTHOR_UNDO,
        payload: authors
    }
}
import * as constants from '../Constants/heroes';


export function getHeroes(author) {
    return {
        type: constants.GET_HEROES_FROM_SERVER,
        payload: author
    }
}

export function createHeroeAsTemp(author) {
    return {
        type: constants.CREATE_HEROE,
        payload: author
    }
}

export function createHeroeReal(response) {
    return {
        type: constants.CREATE_HEROE_REAL,
        payload: response
    }
}

export function createHeroeUndo(author) {
    return {
        type: constants.CREATE_HEROE_UNDO,
        payload: author
    }
}

export function deleteHeroeAsTemp(author) {
    return {
        type: constants.DELETE_HEROE,
        payload: author
    }
}

export function deleteHeroeAsReal(response) {
    return {
        type: constants.DELETE_HEROE_REAL,
        payload: response
    }
}

export function deleteHeroeUndo(author) {
    return {
        type: constants.DELETE_HEROE_UNDO,
        payload: author
    }
}

export function editHeroeAsTemp(author) {
    return {
        type: constants.EDIT_HEROE,
        payload: author
}
}

export function editHeroeAsReal(response) {
    return {
        type: constants.EDIT_HEROE_REAL,
        payload: response
    }
}

export function editHeroeAsUndo(author) {
    return {
        type: constants.EDIT_HEROE_UNDO,
        payload: author
    }
}
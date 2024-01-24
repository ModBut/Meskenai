import * as c from '../Constants/counterConstants';

export function add1() {
    return {
        type: c.ADD_1
    }
}

export function remove1() {
    return {
        type: c.REMOVE_1
    }
}

export function set0() {
    return {
        type: c.SET_0
    }
}

export function error(text) {
    return {
        type: c.ERROR,
        payload: text
    }
}

export function add(num) {
    return {
        type: c.ADD,
        payload: num
    }
}

export function remove(num) {
    return {
        type: c.REMOVE,
        payload: num
    }
}
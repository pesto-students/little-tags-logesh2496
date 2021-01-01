import { combineReducers } from 'redux';
import initialState from '../data/initialState.js';

const isUserLoggedIn = (state = initialState.isUserLoggedIn, action) => {
    if (action.type === 'USER_LOGGED') {
        return action.value;
    }
    return state;
}
const user = (state = initialState.user, action) => {
    if (action.type === 'USER_LOGIN') {
        return action.value;
    }
    return state;
}
const menu = (state = initialState.menu, action) => {
    if (action.type === 'OPEN_MENU') {
        return { isOpen: action.value }
    }
    return state;
}
const cart = (state = initialState.cart, action) => {
    if (action.type === 'ADD_TO_CART') {
        return action.value;
    }
    return state;
}
const isLoginModal = (state = initialState.isLoginModal, action) => {
    if (action.type === 'OPEN_LOGIN') {
        return action.value;
    }
    return state;
}
// const address = (state, action) => {
//     if (action.type === 'SET_ADDRESS') {
//         return action.value;
//     }
//     return [];
// }
export default combineReducers({
    isUserLoggedIn,
    menu,
    user,
    cart, isLoginModal
});
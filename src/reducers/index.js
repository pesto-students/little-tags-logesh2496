import { combineReducers } from 'redux';
import initialState from '../data/initialState.js';

const isUserLoggedIn = (state = initialState.isUserLoggedIn, action) => {
    if (action.type === 'USER_LOGGED') {
        return action.value;
    }
    return state;
}
const user = (state, action) => {
    if (action.type === 'USER_LOGIN') {
        return action.value;
    }
    return {};
}
const menu = (state, action) => {
    if (action.type === 'OPEN_MENU') {
        return { isOpen: action.value }
    }
    return { isOpen: false };
}
const address = (state, action) => {
    if (action.type === 'SET_ADDRESS') {
        return action.value;
    }
    return [];
}
export default combineReducers({
    isUserLoggedIn,
    menu,
    user,
    address
});
import { combineReducers } from 'redux';
import initialState from '../data/initialState.js';

const isUserLoggedIn = (state = initialState.isUserVisited, action) => {
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
export default combineReducers({
    isUserLoggedIn,
    menu,
    user,
});
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
    } else if (action.type === 'DEFAULT_ADDRESS') {
        return { ...state, defaultAddress: action.value }
    } else if (action.type === 'SET_ADDRESS') {
        return {...state, address: {...state.address, [action.value.fullName]: action.value}};
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
    if (action.type === 'EMPTY_CART') {
        return [];
    } else if (action.type === 'ADD_TO_CART') {
        const filteredCart = state.filter(obj => obj.id === action.value.id);
        if (filteredCart.length) {
            return [...state.filter(obj => obj.id !== action.value.id), action.value]
        }
        return [...state, action.value];
    } else if (action.type === 'REMOVE_FROM_CART') {
        return state.filter(item => item.id !== action.value);
    }
    return state;
}
const isLoginModal = (state = initialState.isLoginModal, action) => {
    if (action.type === 'OPEN_LOGIN') {
        return action.value;
    }
    return state;
}
export default combineReducers({
    isUserLoggedIn,
    menu,
    user,
    cart, isLoginModal
});
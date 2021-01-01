export const setAsUserLoggedIn = () => ({
    type: 'USER_LOGGED',
    value: true
});
export const setAsUserLoggedOut = () => ({
    type: 'USER_LOGGED',
    value: false
});
export const setLogInUserInfo = (value) => ({
    type: 'USER_LOGIN',
    value
});
export const openMenu = (value) => ({
    type: 'OPEN_MENU',
    value
});
export const openLogin = (value) => ({
    type: 'OPEN_LOGIN',
    value
});
export const setAddress = (value) => ({
    type: 'SET_ADDRESS',
    value
});
export const addToCart = (value) => ({
    type: 'ADD_TO_CART',
    value
});
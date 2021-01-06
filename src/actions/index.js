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
export const emptyCart = () => ({
    type: 'EMPTY_CART',
    value: []
});
export const addToCart = (value) => ({
    type: 'ADD_TO_CART',
    value
});
export const removeFromCart = (value) => ({
    type: 'REMOVE_FROM_CART',
    value
});
export const updateDefaultAddress = (value) => ({
    type: 'DEFAULT_ADDRESS',
    value
});
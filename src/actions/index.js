export const setAsUserLoggedIn = () => ({
    type: 'USER_LOGGED',
    value: true
});
export const setAsUserLoggedOut = () => ({
    type: 'USER_LOGGED',
    value: false
});
export const setLogInUserInfo = (data) => ({
    type: 'USER_LOGIN',
    value: data
});
export const openMenu = (value) => ({
    type: 'OPEN_MENU',
    value
});
export const setAddress = (value) => ({
    type: 'SET_ADDRESS',
    value
});
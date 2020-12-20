export const setAsUserVisited = () => ({
    type: 'USER_VISITED',
    value: true
});
export const setLogInUserInfo = (data) => ({
    type: 'USER_LOGIN',
    value: data
});
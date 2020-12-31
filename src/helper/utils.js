const formKeys = ['firstName', 'lastName', 'addressOne', 'addressTwo', 'state', 'pincode', 'emailId', 'mobileNo'];

export const extractFormObj = (formObj) => {
    const userInfo = {};
    formKeys.map(key => userInfo[key] = formObj[key].value);
    return userInfo;
}
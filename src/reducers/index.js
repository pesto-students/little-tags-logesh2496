import { combineReducers } from 'redux';
import initialState from '../data/initialState.js';

const isUserVisited = (state = initialState.isUserVisited, action) => {
    if (action.type === 'USER_VISITED') {
        return true;
    }
    return state;
}
const userData = (state, action) => {
    if (action.type === 'USER_LOGIN') {
        return action.value;
    }
    return {};
}
export default combineReducers({
    isUserVisited,
    userData
});
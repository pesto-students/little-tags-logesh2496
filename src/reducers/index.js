import { combineReducers } from 'redux';
import initialState from '../data/initialState.js';

const isUserVisited = (state = initialState.isUserVisited, action) => {
    if (action.type === 'USER_VISITED') {
        return true;
    }
    return state;
}

export default combineReducers({
    isUserVisited
});
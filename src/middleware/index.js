import { applyMiddleware } from "redux";
import db from "../db";

/**
 * Used to communicate to db whether user is currently surfing in the app
 * Typically called from app.js
 */
const loginMiddleware = (store) => (next) => (action) => {
    if (action.type === 'USER_ONLINE') {
        const { user } = store.getState();
        const { updateDb } = db();
        updateDb(user.id, { prop: 'isOnline', value: true });
        next(action);
    } else {
        next(action);
    }
}
const addressMiddleware = (store) => (next) => (action) => {
    if (action.type === 'SET_ADDRESS') {
        const { user } = store.getState();
        const { updateDb } = db();
        const onComplete = () => {
            //TODO add toast here
            next(action);
        }
        updateDb('so0azuaTw3gGSaUM5jy1fBBG9DU2', { prop: 'address', value: { [action.value.fullName]: action.value } }, onComplete);
    } else {
        next(action);
    }
}
export default applyMiddleware(loginMiddleware, addressMiddleware);
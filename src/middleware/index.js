import { applyMiddleware } from "redux";
import db from "../db";

const { updateDb } = db;
/**
 * Used to communicate to db whether user is currently surfing in the app
 * Typically called from app.js
 */
const loginMiddleware = (store) => (next) => (action) => {
    next(action);
    // if (action.type === 'USER_ONLINE') {
    //     const { user } = store.getState();
    //     updateDb(user.id, { prop: 'isOnline', value: true });
    //     next(action);
    // } else {
    //     next(action);
    // }
}
const addressMiddleware = (store) => (next) => (action) => {
    next(action);
    if (action.type === 'SET_ADDRESS') {
        const { user } = store.getState();
        const onComplete = () => {
            //TODO add toast here
            // next(action);
        }
        updateDb(user.id, { prop: 'address', value: { [action.value.fullName]: action.value } }, onComplete);
    } else {
        // next(action);
    }
}
export default applyMiddleware(loginMiddleware, addressMiddleware);
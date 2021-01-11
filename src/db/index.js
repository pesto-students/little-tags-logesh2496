// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

import "firebase/firestore";

const db = {
    updateDb: async (id, { prop, value }, onComplete) => {
        const usersRef = prop ? firebase.database().ref(`users/${id}/${prop}`) : firebase.database().ref(`users/${id}`);
        usersRef.update(value, onComplete);
    },
    getUserInfo: async (id, onComplete) => {
        const usersRef = firebase.database().ref(`users/${id}`);
        usersRef.once("value").then(snapshot => {
            onComplete({ ...snapshot.val(), id });
        })
    }
}

export default db;
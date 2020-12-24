// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

import "firebase/firestore";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

import db from '.';

export default () => {
    db();
    const usersRef = firebase.database().ref("users");

    return {
        isUserAlreadyLoggedIn: () => !!firebase.auth().currentUser,
        googleAuth: (onComplete) => {
            // Using a popup.
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
                firebase.auth().signInWithPopup(provider).then(result => {
                    // This gives you a Google Access Token.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var { email, displayName, photoURL, phoneNumber, uid } = result.user;
                    //TODO check existing user
                    usersRef.once("value")
                        .then(function (snapshot) {
                            if (snapshot.exists() && snapshot.child(uid).exists()) {
                                const { cart, orders, address } = snapshot.child(uid).val();
                                //TODO push to redux
                            } else {
                                snapshot.update({
                                    [uid]: {
                                        displayName,
                                        email,
                                        photoURL,
                                        phoneNumber,
                                        cart: null,
                                        orders: null,
                                        address: null
                                    }
                                });
                            }
                            onComplete({ id: uid, name: displayName, email, phoneNumber, });
                        });
                }).catch(e => {
                    alert('There is some problem at the server, please try again!');
                    console.log(e);
                });
            });
        },
        facebookAuth: () => {

        }
    }
}
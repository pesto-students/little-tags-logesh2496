// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

import "firebase/firestore";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import app from "./app";


const auth = () => {
    const usersRef = firebase.database().ref("users");

    const onSignIn = (result, onComplete) => {
        // The signed-in user info.
        var { email, displayName, photoURL, phoneNumber, uid } = result.user;
        usersRef.once("value")
            .then(function (snapshot) {
                let userCart = [];
                let userOrders = [];
                let userAddress = [];
                if (snapshot.exists() && snapshot.child(uid).exists()) {
                    const { cart, orders, address } = snapshot.child(uid).val();
                    userCart = cart;
                    userOrders = orders;
                    userAddress = address;
                } else {
                    usersRef.update({
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
                onComplete({ id: uid, displayName, email, phoneNumber, cart: userCart, orders: userOrders, address: userAddress });
            });
    }

    return {
        logout: () => {
            app.auth().signOut();
        },
        googleAuth: (onComplete) => {
            // Using a popup.
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
                app.auth().signInWithPopup(provider).then(result => {
                    onSignIn(result, onComplete);
                }).catch(signInError);
            });
        },
        facebookAuth: (onComplete) => {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday');
            firebase.auth().useDeviceLanguage();
            provider.setCustomParameters({
                'display': 'popup'
            });
            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    onSignIn(result, onComplete);
                })
                .catch(signInError);
        }
    }
};
function signInError(error) {
    var errorCode = error.code;
    // ...
    if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Your account already exists. Please try other sign in options.');
    } else {
        alert('There is some problem at server, please try again later.');
    }
}
export default auth;
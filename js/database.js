// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "[ HER LEGGER DU INN DET DU HAR: ]",
    authDomain: "[ HER LEGGER DU INN DET DU HAR: ]",
    projectId:"[ HER LEGGER DU INN DET DU HAR: ]",
    storageBucket: "[ HER LEGGER DU INN DET DU HAR: ]",
    messagingSenderId: "[ HER LEGGER DU INN DET DU HAR: ]",
    appId: "[ HER LEGGER DU INN DET DU HAR: ]"
});

// Initialize Firebase

const db = firebaseApp.firestore();

function addMovie() {
    // Legger til info i collection som heiter "movies"
    firebase.firestore().collection("movies").doc().set({
        title: "test"
    })
}
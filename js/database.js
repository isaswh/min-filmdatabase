// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZ-GLjkKYDvz9n8SSmkXqO6jbpRxPdXdA",
    authDomain: "filmdatabase-2b1f4.firebaseapp.com",
    projectId: "filmdatabase-2b1f4",
    storageBucket: "filmdatabase-2b1f4.appspot.com",
    messagingSenderId: "760971591681",
    appId: "1:760971591681:web:db914a8a424fe5e2eb0000"
});

// Initialize Firebase

const db = firebaseApp.firestore();

function addMovie() {
    // Legger til info i collection som heiter "movies"
    db.collection("movies").doc().set({
        title: "test",
        year: "2003"
    })
}

function getMovies() {
    let messagesText = "";

    db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            messagesText += "<div class='movie'>" + doc.data().title + "</div>";
        });
        document.getElementById("movies").innerHTML = messagesText;
    });
}
getMovies();
// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAZ-GLjkKYDvz9n8SSmkXqO6jbpRxPdXdA",
  authDomain: "filmdatabase-2b1f4.firebaseapp.com",
  projectId: "filmdatabase-2b1f4",
  storageBucket: "filmdatabase-2b1f4.appspot.com",
  messagingSenderId: "760971591681",
  appId: "1:760971591681:web:db914a8a424fe5e2eb0000"
});

const db = firebaseApp.firestore();

function addMovie() {
    // Legger til info i collection som heiter "movies"
    db.collection("Movies").doc().set({
        title: "test",
        year: "2003"
    })
}

function getMovies() {
    let messagesText = "";

    db.collection("Movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            messagesText += "<div class='movie'><p class='title'>" + doc.data().title + "</p><p class='year'>" + doc.data().year + "</p></div>";
        });
        document.getElementById("movies").innerHTML = messagesText;
    });
}
getMovies();
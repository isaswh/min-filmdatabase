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
        title: document.getElementById("newMovieTitle").value,
        year: document.getElementById("newMovieYear").value,
        genre: document.getElementById("newMovieGenre").value.split(',').map(s => s.trim()) // Split genres by commas and trim spaces
    });
    document.getElementById("newMovieTitle").value = "";
    document.getElementById("newMovieYear").value = "";
    document.getElementById("newMovieGenre").value = "";
}

function getMovies() {
    let moviesHTML = "";

    db.collection("Movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const title = doc.data().title;
            const year = doc.data().year;
            const genres = doc.data().genre.join(', ');

            moviesHTML += `<div class='movie'>
                <p class='title'>${title}</p>
                <p class='year'>${year}</p>
                <p class= 'genre'>${genres}</p>
                <button class='delete-btn' onclick='deleteMovie("${doc.id}")'>Delete</button>
            </div>`;
        });
        document.getElementById("movies").innerHTML = moviesHTML;
    });
}
getMovies();

function deleteMovie(movieId) {
    db.collection("Movies").doc(movieId).delete().then(() => {
        console.log("Movie deleted.");
        getMovies();
    }).catch((error) => {
        console.error("Error deleting movie: ", error);
    });
}
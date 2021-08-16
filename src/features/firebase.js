import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBrY9o1C3Ja7B3N_gMycrsvJ8Lp3Ej2vjQ",
    authDomain: "discord-clone-4e602.firebaseapp.com",
    databaseURL: "https://discord-clone-4e602.firebaseio.com",
    projectId: "discord-clone-4e602",
    storageBucket: "discord-clone-4e602.appspot.com",
    messagingSenderId: "188077224940",
    appId: "1:188077224940:web:620cd826f66498bb4746c9",
    measurementId: "G-NHKDGEMH1K"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
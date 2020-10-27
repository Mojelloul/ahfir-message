import firebase from 'firebase'
const firebaseApp = firebase.initializeApp(
  {  apiKey: "AIzaSyA1gOFuZ8j6xFQzfGste7PKzbShnCFTqfo",
  authDomain: "ahfir-message-869dc.firebaseapp.com",
  databaseURL: "https://ahfir-message-869dc.firebaseio.com",
  projectId: "ahfir-message-869dc",
  storageBucket: "ahfir-message-869dc.appspot.com",
  messagingSenderId: "285568297753",
  appId: "1:285568297753:web:3ebf0b8abec330d2cdf388",
  measurementId: "G-3WGNTBH0ND"}
)
const db = firebaseApp.firestore()
export default db ;
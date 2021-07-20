import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA9tqoNu3DjJxR_Qi9lBgCSkzLwsjcidvs",
    authDomain: "marauders-map-9bc64.firebaseapp.com",
    projectId: "marauders-map-9bc64",
    storageBucket: "marauders-map-9bc64.appspot.com",
    messagingSenderId: "880016901620",
    appId: "1:880016901620:web:e14f28fcba5c041384e5a1"
  };

  firebase.initializeApp(firebaseConfig)


  const auth = firebase.auth()
  const db = firebase.firestore()

  //eslint-disable-next-line
  if(location.hostname === 'localhost'){
    auth.useEmulator('http://localhost:9099')
    db.useEmulator('localhost', 8080)
  }



  export default firebase
  export {db, auth}
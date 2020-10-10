
import firebase from "@firebase/app";
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBzkxpMKBXcMI9DtDRQR1lvxc14a6CwkYs",
  authDomain: "baas-pos.firebaseapp.com",
  databaseURL: "https://baas-pos.firebaseio.com",
  projectId: "baas-pos",
  storageBucket: "baas-pos.appspot.com",
  messagingSenderId: "314713007103",
  appId: "1:314713007103:web:a47953917a6965a8263dca"
};

firebase.initializeApp(config)

export const firestore = firebase.firestore()
// database imports
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAiuGPdmh7yP5c4Y3L9BdjpDZqpbCSeYG8",
  authDomain: "a-touch-of-space.firebaseapp.com",
  projectId: "a-touch-of-space",
  storageBucket: "a-touch-of-space.appspot.com",
  messagingSenderId: "935189746838",
  appId: "1:935189746838:web:c9768ebd72a15307185eb7"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }

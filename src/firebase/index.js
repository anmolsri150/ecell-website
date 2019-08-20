import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyDm82YB6x3SFG9Fx-hv92DfpZVtr6thkpg',
  authDomain: 'ecell-website-4cb30.firebaseapp.com',
  databaseURL: 'https://ecell-website-4cb30.firebaseio.com',
  projectId: 'ecell-website-4cb30',
  storageBucket: 'ecell-website-4cb30.appspot.com',
  messagingSenderId: '1:684765597111:web:a9767e6ccd288fa0'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection
}

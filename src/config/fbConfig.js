import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {firebase_config} from '../../env/env'

// Initialize Firebase
firebase.initializeApp(firebase_config)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"

import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js"

import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"


const firebaseConfig = {
apiKey: "AIzaSyACL8eKJ_fMXQ2WSzrd9LHoxeFzBitnpt0",
authDomain: "brighthorizons-web.firebaseapp.com",
projectId: "brighthorizons-web",
storageBucket: "brighthorizons-web.firebasestorage.app",
messagingSenderId: "136547031684",
appId: "1:136547031684:web:658ac6e8f34de62f3b00d1"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { db, storage, auth }
// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore,doc,setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_Q0bbxomPK1XpUnmw9t1JaOBbk1JPt0Y",
    authDomain: "oldagevoterslist.firebaseapp.com",
    projectId: "oldagevoterslist",
    storageBucket: "oldagevoterslist.appspot.com",
    messagingSenderId: "1026564943014",
    appId: "1:1026564943014:web:b7a86a4736558ebbb79867"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {doc,setDoc,db}




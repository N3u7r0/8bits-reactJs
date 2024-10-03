import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqMFNLpAYblcGrYISoIEW3sJl8Ndg-OCA",
  authDomain: "bits-6ecf6.firebaseapp.com",
  projectId: "bits-6ecf6",
  storageBucket: "bits-6ecf6.appspot.com",
  messagingSenderId: "606871182087",
  //esto tendria q estar en un archivo secreto para q no se vea, buscar como despues.
  appId: "1:606871182087:web:43b12b79391a4a62bf83a2",
};

// Inicializamos el servicio de Firebase
const app = initializeApp(firebaseConfig);

//Inicializamos la base de datos (db es database)
export const  db = getFirestore(app);

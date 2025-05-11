// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase (obtén esto desde la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAoub3jEmbaOfAmqjZxM6iBxZf14gk_CRE",
  authDomain: "auth-f62a2.firebaseapp.com",
  projectId: "auth-f62a2",
  storageBucket: "auth-f62a2.firebasestorage.app",
  messagingSenderId: "504601158040",
  appId: "1:504601158040:web:04caaac823e4c386a48bed",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener una referencia a Firestore
const db = getFirestore(app);

export { db };
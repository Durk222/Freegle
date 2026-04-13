// Importar los módulos necesarios de Firebase SDK (Unificados a la 10.7.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de tu App
const firebaseConfig = {
    apiKey: "AIzaSyB3iqAV8Xccfie5NWaFh0gF_-HKUoj0-ho",
    authDomain: "freegle-806a1.firebaseapp.com",
    projectId: "freegle-806a1",
    storageBucket: "freegle-806a1.firebasestorage.app",
    messagingSenderId: "526289919630",
    appId: "1:526289919630:web:d7b44942f8c247119773df"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para usar en tus otros archivos
export { auth, db, createUserWithEmailAndPassword, setDoc, doc };

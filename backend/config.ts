import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuração do app firebase web
const firebaseConfig = {
    apiKey: "AIzaSyCxu-aZy8KlWVNuSI9gSCDQ0mBN5V2xlw0",
    authDomain: "next-crud-5e8ef.firebaseapp.com",
    projectId: "next-crud-5e8ef"
}

// Inicializando firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const dataBase = getFirestore(app);

export { dataBase }
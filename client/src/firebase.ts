import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}
console.log(API_KEY)
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app; 
import { initializeApp } from 'firebase/app';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQjD7SMf5KrOfdtUAkmfPEe74tQJTf1ow",
    authDomain: "edgar-dev-d20a4.firebaseapp.com",
    projectId: "edgar-dev-d20a4",
    storageBucket: "edgar-dev-d20a4.appspot.com",
    messagingSenderId: "198494108480",
    appId: "1:198494108480:web:03604e6e7c12dd8d66d8a5"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage( app )
export const gsReference = ref(storage, 'gs://edgar-dev-d20a4.appspot.com/cv_edgar.pdf');
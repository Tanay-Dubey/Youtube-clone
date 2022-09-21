import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc5pFwNWzlWH-5btrg1H_iQyAhQcJDkcI",
  authDomain: "clone-61552.firebaseapp.com",
  projectId: "clone-61552",
  storageBucket: "clone-61552.appspot.com",
  messagingSenderId: "765989279096",
  appId: "1:765989279096:web:0d9f4d515c5329b287248d",
  measurementId: "G-3EV7X3ED6R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;

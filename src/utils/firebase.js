import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-63MX7M1wuzAxIB9cgF2byUDiicwBias",
  authDomain: "ticketbox-575ed.firebaseapp.com",
  projectId: "ticketbox-575ed",
  storageBucket: "ticketbox-575ed.appspot.com",
  messagingSenderId: "26340366020",
  appId: "1:26340366020:web:6b277b67cc891fb0259b91",
  measurementId: "G-MWXPVE2WCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export { storage, analytics };

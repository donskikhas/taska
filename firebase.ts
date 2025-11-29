// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// You can get this from the Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Initialize Firebase
// We wrap this in a try-catch to prevent the app from crashing if config is missing during dev
let db: any = null;

try {
  // Check if config is filled (simple check)
  if (firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } else {
    // Config is missing, but that's okay for landing page mode (Telegram only)
    // console.log("Running in Telegram-only mode");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { db };
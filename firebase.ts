import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Firebase configuration for tipa-task-manager project
const firebaseConfig = {
  apiKey: "AIzaSyBgDuPin7aSOBfkmA0ENpiiQZAbbj_Fl4g",
  authDomain: "tipa-task-manager.firebaseapp.com",
  projectId: "tipa-task-manager",
  storageBucket: "tipa-task-manager.firebasestorage.app",
  messagingSenderId: "529094386000",
  appId: "1:529094386000:web:223840a2126ab0b1a88c55",
} as const;

let app;
let db: Firestore | null = null;

try {
  // Avoid re-initializing in dev/hot-reload
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("❌ Firebase initialization failed:", error);
  db = null;
}

export { db };
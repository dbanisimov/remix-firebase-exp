import type { DataLoader } from "@remix-run/core";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  initializeFirestore,
} from "firebase/firestore/lite";

const app = initializeApp({
  apiKey: "AIzaSyBeEX3Pgky75tP5VqVSPL8LAJj0BmuS3kk",
  authDomain: "manatee-app.firebaseapp.com",
  databaseURL: "https://manatee-app.firebaseio.com",
  projectId: "manatee-app",
  storageBucket: "manatee-app.appspot.com",
  messagingSenderId: "517951530164",
  appId: "1:517951530164:web:72b0770ba30e03ced3a3e1",
  measurementId: "G-B1MZV64EK2",
});

// @ts-ignore
// initializeFirestore(app, { host: "localhost:8080", ssl: false });

let loader: DataLoader = async () => {
  // @ts-ignore
  const db = getFirestore(app);
  const ref = doc(db, "collection/doc");
  const snapshot = await getDoc(ref);
  const message = snapshot.data()?.message || "This is NOT from Firestore 😟";
  return {
    message,
  };
};

export = loader;

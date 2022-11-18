/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const firebaseConfig = {
  apiKey: "AIzaSyBTHGpYjFNp8v-yf-gnuSyzXwvfV6FT2Jg",
  authDomain: "friendlychat-22562.firebaseapp.com",
  projectId: "friendlychat-22562",
  storageBucket: "friendlychat-22562.appspot.com",
  messagingSenderId: "185031426649",
  appId: "1:185031426649:web:3fba0c6a2f5f5781ee2748"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAOczQfKCpPdSvq59Do35cX5CoPkAW4rj8",
    authDomain: "kochuveedu-1e448.firebaseapp.com",
    databaseURL: "https://kochuveedu-1e448.firebaseio.com",
    projectId: "kochuveedu-1e448",
    storageBucket: "kochuveedu-1e448.appspot.com",
    messagingSenderId: 567983583151,
    appId: "1:567983583151:web:e41abe9dcb75fb438c095a",
    measurementId: "G-5FPCM4GB60"
});
const messaging = firebase.messaging();
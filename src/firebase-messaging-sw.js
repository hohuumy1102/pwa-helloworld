importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
	apiKey: "AIzaSyCNBmxpcMyvfcq3Whie4gV4HjjF0TnW1wQ",
    authDomain: "ethereal-effort-205904.firebaseapp.com",
    databaseURL: "https://ethereal-effort-205904.firebaseio.com",
    projectId: "ethereal-effort-205904",
    storageBucket: "",
    messagingSenderId: "289428324805" 
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});
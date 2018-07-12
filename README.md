This is Basic PWA Demo

#PWA Hello world 

Create by: myho


#Host with Firebase
Create Firebase project
Create Firebase project in Firebase console and add project to index.html


#Initialize Firebase project

	1. We need install firebase tools
		npm install -g firebase-tools
	2. Generate a firebase.json (REQUIRED)
		firebase init	

#Register Service Worker
	<script>
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(function() {
                console.log('Service Worker Registered');
          });
      }
    </script>

#Cache Static Resources		


#Create an icon
	Create an icon and save in sizes 128x128, 144x144, 152x152, 192x192, 512x512.

#Create manifest.json



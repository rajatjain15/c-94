var firebaseConfig = {
      apiKey: "AIzaSyAIU71cLJU2VHJRf5knvJDPqulN13YKDAo",
      authDomain: "kwitter-ee014.firebaseapp.com",
      databaseURL: "https://kwitter-ee014-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee014",
      storageBucket: "kwitter-ee014.appspot.com",
      messagingSenderId: "491928748342",
      appId: "1:491928748342:web:6d0e7496c9d731ae44b397",
      measurementId: "G-C1VMN4MGX8"
    };
    
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();

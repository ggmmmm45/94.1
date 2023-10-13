// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyBUsXs7U3-7fT9TTHW7ZWmPiGBCVHhCZBA",
  authDomain: "vamosconversarbyjus.firebaseapp.com",
  databaseURL: "https://vamosconversarbyjus-default-rtdb.firebaseio.com",
  projectId: "vamosconversarbyjus",
  storageBucket: "vamosconversarbyjus.appspot.com",
  messagingSenderId: "530435431219",
  appId: "1:530435431219:web:161d584418bb65d3ad3c46"
};

      
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      function addUser()
      {
        userName = document.getElementById("userName").value;
        firebase.database().ref("/").child(userName).update({
          purpose : "adding user"
        });
      }
      

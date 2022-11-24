const firebaseConfig = {
    apiKey: "AIzaSyC94NhjUuBglQGyiJqn9hkZdy1DZjjU0DE",
    authDomain: "project-94-c0942.firebaseapp.com",
    projectId: "project-94-c0942",
    storageBucket: "project-94-c0942.appspot.com",
    messagingSenderId: "829750355763",
    appId: "1:829750355763:web:14e85515f08421e6de4046",
    measurementId: "G-EVTRKCM7VR"
  };
  
  function addRoom()
  {

  }

//Start code
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
//End 

function rediectToRoomName()
{
  localStorage.setItem("username");
localStorage.getItem("username");
var x = localStorage.getItem("username");

}
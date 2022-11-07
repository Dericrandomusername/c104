const firebaseConfig = {
  apiKey: "AIzaSyD-NDOrpKPfYpyl3eAEkV3UQvbjeOZ0sF4",
  authDomain: "chatapp-fd9f9.firebaseapp.com",
  databaseURL: "https://chatapp-fd9f9-default-rtdb.firebaseio.com",
  projectId: "chatapp-fd9f9",
  storageBucket: "chatapp-fd9f9.appspot.com",
  messagingSenderId: "855919143012",
  appId: "1:855919143012:web:1d692deca6c15944595771"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");  
document.getElementById("user_name").innerHTML="welcome "+user_name + "!"
function addroom(){
  Room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", Room_name);
  window.location="chat_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chat_page.html";
}
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

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
  window.location="index.html";
  }
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
  { firebase_message_id = childKey; message_data = childData;} }); }); } getData();

  function send(){
   
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
   }
     function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
   { firebase_message_id = childKey; message_data = childData;
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
name_with_tag="<h4>"+name+"</h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updateLike(this.id)'>likes:" +like+" </button><hr>";
row=name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML+=row;

  } }); }); } getData();

 
function updateLike(name){
  console.log("click on the button"+name);
  button_id=name;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  firebase.database().ref(room_name).child(name).update({
    like:updated_likes
  });
}   
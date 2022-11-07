// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




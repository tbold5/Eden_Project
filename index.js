firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      let user = firebase.auth().currentUser;

      if (user != null) {
          var email_id = user.email;
          document.getElementById('user-greeting').innerHTML = 'Welcome user : ' + email_id
      }
    } else {
      // No user is signed in.
    }
  });

function logout() {
    firebase.auth().signOut().then(function(){
        // Sign-out sucessfull.
    }).catch(function(error) {
        // An error happened.
    });
}
(function(){  

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC9Zlt1R-YXA8cKmZFh_hyF0sa6YOlUIsU",
        authDomain: "edenproject-5e496.firebaseapp.com",
        databaseURL: "https://edenproject-5e496.firebaseio.com",
        projectId: "edenproject-5e496",
        storageBucket: "edenproject-5e496.appspot.com",
        messagingSenderId: "856284101162"
    };
    firebase.initializeApp(config);
    app_firebase = firebase; 
  })();
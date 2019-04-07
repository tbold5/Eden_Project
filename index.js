var userId = '';
firebase.auth().onAuthStateChanged(function(user) {
    userId = user.uid;
});

firebase.auth().onAuthStateChanged(function(user) {
    if (userId) {
      // User is signed in.
      let user = firebase.auth().currentUser;

      if (userId != null) {
          
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
let title = document.getElementById('title')
let titleValue = document.getElementById('title').value
let submitButton = document.getElementById('submitButton')

function submitClick() {
    let firebaseRef = firebase.database().ref();

    firebaseRef.child('title').set('Vancouver')
}
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
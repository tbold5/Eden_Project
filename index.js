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
function getDataFromFB() {
    firebase.auth().onAuthStateChanged(function(user) {
    let userID = localStorage.getItem('userid')
    let dbRef = firebase.database().ref("users/" + userID)
    dbRef.once('value',function(snap) {
        keys = snap.val();
        
    // Linebreaks
    linebreak1 = document.createElement('br');
    linebreak2 = document.createElement('br');
    linebreak3 = document.createElement('br');
    linebreak4 = document.createElement('br');
    // Create elements
    var div = document.createElement('div');
    div.classList.add('list_one')
    var paraTitle = document.createElement('b');
    var paraDescription = document.createElement('p');
    var paraLocation = document.createElement('p');
    var paraDate = document.createElement('p');
    // Inner Styling of Elements
    paraTitle.style="font-family: 'Abel', sans_serif; color: green; text-decoration: underline;"
    paraDescription.style="font-size: 80%;"
    paraLocation.style="font-size: 80%; color: silver;"
    paraDate.style="font-size: 60%; color: silver;"
    paraTitle.innerHTML = keys['title']
    paraDescription.innerHTML = keys['description']
    paraLocation.innerHTML = keys['location']
    paraDate.innerHTML = keys['date']
    // Append elements to html
    document.getElementById('div').appendChild(div);
    div.appendChild(paraTitle);
    div.appendChild(linebreak1)
    div.appendChild(paraDescription);
    div.appendChild(linebreak2)
    div.appendChild(paraLocation);
    div.appendChild(linebreak3)
    div.appendChild(paraDate);
    div.appendChild(linebreak4)
})})}

// function displayList (list){
//     firebase.auth().onAuthStateChanged(function(user) {
//         let userID = localStorage.getItem('userid')
//         let dbRef = firebase.database().ref("users/" + userID)
//         dbRef.once('value',function(snap) {
//             list = snap.val();
//             for (key in list){
//             console.log(key);             //key   
//             console.log(list[key]);       //value
//             }
//         }
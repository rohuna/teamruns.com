



// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  document.getElementById("loginsubmit").style.background = 'rgb(180, 180, 180)';
  document.getElementById("loginsubmit").style.borderColor = 'rgb(180, 180, 180)';

  var errors = document.getElementsByClassName("error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      // close the signup modal & reset form

      window.location.href = './dashboard';

    }).catch(err => {

      var emailError = document.getElementsByClassName("emailError");
      var passwordError = document.getElementsByClassName("passwordError");
      
      console.log(err.message);
      if(err.message == "The password is invalid or the user does not have a password.")
          passwordError[0].style.display = "block";
      if(err.message == "There is no user record corresponding to this identifier. The user may have been deleted.")
        emailError[0].style.display = "block";
      document.getElementById("loginsubmit").style.background = 'rgb(30, 144, 255)';
      document.getElementById("loginsubmit").style.borderColor = 'rgb(30, 144, 255)';
          });

 




});



function googleLogIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  isLoggedIn = false;
  auth.signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);

    db.collection("users").doc(user.uid).get().then(doc => {
      if(doc.exists)
      {
        window.location.href = "./dashboard";
      }
      else{
        auth.currentUser.delete().then(() => {  
          window.location.href = "./signup"
        });
        
      }
    })

   
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


setModalListener();
function setModalListener() {
  // Get the modal
  var modal = document.getElementById("forgotModal");

  // Get the button that opens the modal
  var btn = document.getElementById("forgotLink");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("cclose")[0];



  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function showModal()
{
  var modal = document.getElementById("forgotModal");
  modal.style.display = "block";
}

function forgotSend(e){
  e.preventDefault();
  var emailAddress = document.getElementById("forgotForm")["forgot-email"].value;
  auth.sendPasswordResetEmail(emailAddress, {
    url: 'https://teamruns.com/login',
    handleCodeInApp: false
}).then(function () {

    var submit = document.getElementById("forgotSubmit");
  submit.style.background = "rgb(0,238,8)";
  submit.style.borderColor = "rgb(0,238,8)";
  submit.value = "sent";
    
    
  }).catch(function (err) {
    var error = document.getElementsByClassName("emailError");
      console.log(err.message);
      if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.")
        error[1].style.display = "block";
  });
  return false;

}

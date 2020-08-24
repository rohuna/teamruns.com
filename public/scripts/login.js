



// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();

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
      var errors =  document.getElementsByClassName("error");
      for (var i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
      }
      console.log(err.message);
      if(err.message == "The password is invalid or the user does not have a password.")
          passwordError[0].style.display = "block";
      if(err.message == "There is no user record corresponding to this identifier. The user may have been deleted.")
        emailError[0].style.display = "block";
          });




});

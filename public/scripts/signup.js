var biotemp = "";
var firsttemp = "";
var pfpFileName = "";
var lasttemp = "";
var teamNametemp = "";
//var gradYeartemp = "";

var isAdmin = false;
var secondPage = false;


var curUser;
var authInputs = document.querySelector("#authInputs");
var infoInputs = document.querySelector("#infoInputs");
var setPfpInputs = document.querySelector("#setPfpInputs");
var emailVerifyInputs = document.querySelector("#emailVerifyInputs");
var authButton = document.querySelector("#authButton");
var infoButton = document.querySelector("#infoButton");
var setPfpButton = document.querySelector("#setPfpButton");
var emailVerifyButton = document.querySelector("#emailVerifyButton");
authInputs.addEventListener("submit", function(e){
  e.preventDefault();
  authButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;


  var passwordError = document.getElementsByClassName("passwordError");
  var confirmPasswordError = document.getElementsByClassName("confirmPasswordError");
  var emailError = document.getElementsByClassName("emailError");

  const email = authInputs["signup-email"].value;
  var password = authInputs["signup-password"].value;
  var confirmpassword = authInputs["signup-confirmpassword"].value;

  var isInvalid = false;
  var errors = document.getElementsByClassName("error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
  if(email == "")
  {
    isInvalid = true;
    emailError[0].innerHTML = "Invalid email";
    emailError[0].style.display = "block";
    var emailinput = document.getElementById("signup-email");
    emailinput.focus();
  }

  if(password.length < 8)
  {
    isInvalid = true;
    passwordError[0].style.display = "block";
    var passinput = document.getElementById("signup-password");
    passinput.focus();
  }

  if(password != confirmpassword)
  {
    isInvalid = true;
    confirmPasswordError[0].style.display = "block";
    var passinput = document.getElementById("signup-confirmpassword");
    passinput.focus();
  }

  if(!isInvalid)
  {
    var invalidEmail = false;
      auth
      .createUserWithEmailAndPassword(email, password)
      .catch(err =>{
          if(err.message == "The email address is already in use by another account.")
          {
            invalidEmail = true;
            emailError[0].innerHTML = "The email address is already in use"
            emailError[0].style.display = "block";
          }
          if(err.message == "The email address is badly formatted.")
          {
            invalidEmail = true;
            emailError[0].innerHTML = "Invalid Email"
            emailError[0].style.display = "block";
          }
      })
      .then(cred => {
        if(!(typeof cred == "undefined"))
        {
          

            return db
              .collection("users")
              .doc(cred.user.uid)
              .set({
                isBanned: false,
                isMod: false,
                teamName: "",
                teamCode: "",
                first: "",
                last: "",
                pfp: "./images/blankpfp.png"
              }).then(() => {
                if (!invalidEmail) {
                  usersData.forEach(user => {
                    if (user.id == userID.uid)
                      curUser = user;
                  });

                  authInputs.reset();
                  if (!curUser.data().isAdmin)
                    document.querySelector("#teamNameDiv").style.display = "none";
                  document.querySelector("#authForm").style.display = "none";
                  document.querySelector("#infoForm").style.display = "block";
                }
              });
            
        }
        else {
          authButton.innerHTML = `Next`
          invalidEmail = true;
        }
      })
      
    }
    else {
      authButton.innerHTML = `Next`;
    }



});
infoInputs.addEventListener("submit", function(e){
  e.preventDefault();

  infoButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`


  var teamNameError = document.getElementsByClassName("teamNameError");
  var firstNameError = document.getElementsByClassName("firstNameError");
  var lastNameError = document.getElementsByClassName("lastNameError");
  var typeError = document.getElementsByClassName("typeError");


  var first =  infoInputs["first-name"].value;
  var last = infoInputs["last-name"].value;
  var teamName = infoInputs["signup-teamName"].value;

  var isInvalid = false;
  
  
  
  var errors = document.getElementsByClassName("error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }

  var isAdmin;
  if (document.getElementById("opt1").checked) {
    isAdmin = true;
  }
  else if (document.getElementById("opt2").checked) {
    isAdmin = false;
  }
  else {
    isInvalid = true;
    typeError[0].style.display = "block";
  }

  if(first == "")
  {
    isInvalid = true;
    firstNameError[0].style.display = "block";
    var firstinput = document.getElementById("first-name");
    firstinput.focus();
  }

  if(last == "")
  {
    isInvalid = true;
    lastNameError[0].style.display = "block";
    var lastinput = document.getElementById("last-name");
    lastinput.focus();
  }

  if(teamName == "" && isAdmin)
  {
    isInvalid = true;
    teamNameError[0].style.display = "block";
    var teaminput = document.getElementById("signup-teamName");
    teaminput.focus();
  }

  if(!isInvalid)
  {

      var teamCode = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 3; i++ ) {
          teamCode += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        for ( var i = 0; i < 1; i++ ) {
          teamCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }


      //gradYeartemp = signupForm["signup-gradyear"].value;
      // sign up the user & add firestore data


      var isMale;
      if(document.getElementById("male").checked)
      {
        isMale = true;
      }
      else {
        isMale = false;
      }

      

      if(isAdmin)
      {
        db.collection("users").doc(curUser.id).update({
                teamName: infoInputs["signup-teamName"].value,
                isAdmin: isAdmin,
                teamCode: teamCode,
                first: infoInputs["first-name"].value,
                last: infoInputs["last-name"].value,
                isMale: isMale
              }).then(() => {
                db.collection("teams")
                .add({
                    name: infoInputs["signup-teamName"].value,
                    teamCode: teamCode,
                    adminID: "",
                    members: []
                }).then(() => {
                  document.querySelector("#infoForm").style.display = "none";
                  document.querySelector("#setPfpForm").style.display = "block";

                })


              });
      }
      else {
        db.collection("users").doc(curUser.id).update({
                isAdmin: isAdmin,
                first: infoInputs["first-name"].value,
                last: infoInputs["last-name"].value,
                isMale: isMale
              }).then(() => {
                document.querySelector("#infoForm").style.display = "none";
                document.querySelector("#setPfpForm").style.display = "block";

              });
      }
    }
    else{
      infoButton.innerHTML = `Next`
    }
});
setPfpInputs.addEventListener("submit", function(e){
  e.preventDefault();
  setPfpButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`

  var canvas = $("#preview")[0];
  var dataURL = canvas.toDataURL();
  //$("#new")[0].src = dataURL;
  var block = dataURL.split(";");
  // Get the content type of the image
  var contentType = block[0].split(":")[1];// In this case "image/gif"
  // get the real base64 content of the file
  var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

  // Convert it to a blob to upload

  var blob = b64toBlob(realData, contentType);

  blobUrl = URL.createObjectURL(blob);


  var storageRef = firebase.storage().ref(userID.uid + "/pfp");

  var task = storageRef.put(blob);

  var pfpUrl;
  task.on('state_changed',

    function progress(snapshot) {

    },
    function error(err){

    },
    function complete(){


  storageRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element:
    var canvas = $("#preview")[0];
    if(document.getElementById("target") == null &&  document.getElementById("target").src == "")
      pfpUrl = "./images/blankpfp.png"
    else
      pfpUrl = url;

    db.collection('users').doc(curUser.id).update({
      pfp: pfpUrl
    }).then(function(){
      window.location.href = "./dashboard";


    });



  }).catch(function(error) {

      pfpUrl = "./images/blankpfp.png"


    db.collection('users').doc(curUser.id).update({
      pfp: pfpUrl
    }).then(function(){
      window.location.href = "./dashboard";


  });
  if(error.code ==  'storage/object-not-found'){


  }
  if(error.code ==  'storage/unauthorized'){
    // User doesn't have permission to access the object

  }
  if(error.code ==  'storage/canceled'){
    // User canceled the upload

  }
  if(error.code ==  'storage/unknown'){
      // Unknown error occurred, inspect the server response

  }
  });





});
});


          var emailVerifyButton = document.getElementById("emailVerifyButton");
          emailVerifyButton.addEventListener("click", function(e) {
            e.preventDefault();
            emailVerifyButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`
            firebase.auth().currentUser.reload().then( () => {
              if(firebase.auth().currentUser.emailVerified)
              {

                window.location.href = "./dashboard";
              }
              else {
                emailVerifyButton.innerHTML = `Next`
                var emailVerified = document.getElementsByClassName("emailVerified");
                emailVerified[0].style.display = "block";
              }
            });
          });

var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
opt1.addEventListener("click", () => {
  document.querySelector("#teamNameDiv").style.display = "block";
})
opt2.addEventListener("click", () => {
  document.querySelector("#teamNameDiv").style.display = "none";
})



function googleSignIn()
{
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    authInputs.reset();
    document.querySelector("#authForm").style.display = "none";
    document.querySelector("#infoForm").style.display = "block";
    
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    curUser = {id: user.uid};

    db
      .collection("users")
      .doc(user.uid)
      .set({
        isBanned: false,
        isMod: false,
        teamName: "",
        teamCode: "",
        first: "",
        last: "",
        pfp: "./images/blankpfp.png"
      });
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}



//
//
// var adminForm = document.querySelector("#adminForm");
// adminForm.addEventListener("submit", e => {
//   e.preventDefault();
//   isAdmin = true;
//
//
//   //  document.querySelector("#gradYearDiv").style.display = "none";
//
//   var choosePath = document.querySelector("#choosePath");
//   choosePath.style.display = "none";
//
//     var signinForm = document.querySelector("#signinForm");
//     signinForm.style.display = "block";
// });
//
// var memberForm = document.querySelector("#memberForm");
// var curTeam = "";
// memberForm.addEventListener("submit", e => {
//   e.preventDefault();
//   isAdmin=false;
//   document.getElementById('nextButton').style.backgroundColor = "rgb(150, 150, 150)";
//   document.getElementById('submitButton').style.backgroundColor = "rgb(150, 150, 150)";
//   document.getElementById('nextButton').style.borderColor = "rgb(150, 150, 150)";
//   document.getElementById('submitButton').style.borderColor = "rgb(150, 150, 150)";
//
//   db.collection("teams").get().then(function(querySnapshot) {
//     teamsData = querySnapshot;
//     teamsData = teamsData.docs;
//     teamCode = memberForm["teamcode"].value.trim().toUpperCase();
//     for (var i = 0; i < teamsData.length; i++) {
//       if(teamsData[i].data().teamCode == teamCode)
//       {
//         curTeam = teamsData[i].data();
//       }
//     }
//     if(curTeam == "")
//     {
//       document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//       document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//       document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//       document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//       document.querySelector("#teamCodeError").innerHTML = `<p style = "color:red; height: 0;">Please enter a valid team code</p>`;
//     }
//     else {
//       document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//       document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//       document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//       document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//       document.querySelector("#teamNameDiv").style.display = "none";
//       var choosePath = document.querySelector("#choosePath");
//       choosePath.style.display = "none";
//
//         var signinForm = document.querySelector("#signinForm");
//         signinForm.style.display = "block";
//     }
//   });
//
// });
//
// // signup
// const signupForm = document.querySelector("#signup-form");
// signupForm.addEventListener("submit", e => {
//   document.getElementById('nextButton').style.backgroundColor = "rgb(150, 150, 150)";
//   document.getElementById('submitButton').style.backgroundColor = "rgb(150, 150, 150)";
//   document.getElementById('nextButton').style.borderColor = "rgb(150, 150, 150)";
//   document.getElementById('submitButton').style.borderColor = "rgb(150, 150, 150)";
//   var passwordError = document.getElementsByClassName("passwordError");
//   var confirmPasswordError = document.getElementsByClassName("confirmPasswordError");
//   var emailError = document.getElementsByClassName("emailError");
//   var teamNameError = document.getElementsByClassName("teamNameError");
//   var firstNameError = document.getElementsByClassName("firstNameError");
//   var lastNameError = document.getElementsByClassName("lastNameError");
//
//
//   if(!isAdmin)
//   {
//     const email = signupForm["signup-email"].value;
//
//
//
//
//
//     e.preventDefault();
//
//     // get user info
//
//     var password = signupForm["signup-password"].value;
//     var confirmpassword = signupForm["signup-confirmpassword"].value;
//     var first =  signupForm["first-name"].value;
//     var last = signupForm["last-name"].value;
//     //var gradYear = signupForm["signup-gradyear"].value;
//
//     var isInvalid = false;
//     var errors = document.getElementsByClassName("error");
//     for (var i = 0; i < errors.length; i++) {
//       errors[i].style.display = "none";
//     }
//     if(email == "")
//     {
//       isInvalid = true;
//       emailError[0].innerHTML = "Invalid email";
//       emailError[0].style.display = "block";
//       var emailinput = document.getElementById("signup-email");
//       emailinput.focus();
//     }
//
//     if(password.length < 8)
//     {
//       isInvalid = true;
//       passwordError[0].style.display = "block";
//       var passinput = document.getElementById("signup-password");
//       passinput.focus();
//     }
//
//     if(password != confirmpassword)
//     {
//       isInvalid = true;
//       confirmPasswordError[0].style.display = "block";
//       var passinput = document.getElementById("signup-confirmpassword");
//       passinput.focus();
//     }
//
//     if(first == "")
//     {
//       isInvalid = true;
//       firstNameError[0].style.display = "block";
//       var firstinput = document.getElementById("first-name");
//       firstinput.focus();
//     }
//
//     if(last == "")
//     {
//       isInvalid = true;
//       lastNameError[0].style.display = "block";
//       var lastinput = document.getElementById("last-name");
//       lastinput.focus();
//     }
//
//     if(!isInvalid)
//     {
//
//       if(secondPage)
//       {
//         const formDisplay = document.querySelector("#form-display");
//         formDisplay.style.display = "none";
//         $("#signUpSubmitLoading")[0].style.display = "block";
//         $("#pfpcontainer")[0].style.display = "none";
//         $("#pfpdiv")[0].style.display = "none";
//       }
//
//       firsttemp =  signupForm["first-name"].value;
//       lasttemp = signupForm["last-name"].value;
//       //gradYeartemp = signupForm["signup-gradyear"].value;
//       // sign up the user & add firestore data
//
//       var invalidEmail = false;
//         auth
//         .createUserWithEmailAndPassword(email, password)
//         .catch(err =>{
//
//
//             if(err.message == "The email address is already in use by another account.")
//             {
//               invalidEmail = true;
//               emailError[0].innerHTML = "The email address is already in use"
//               emailError[0].style.display = "block";
//
//             }
//             if(err.message == "The email address is badly formatted.")
//             {
//               invalidEmail = true;
//               emailError[0].innerHTML = "Invalid Email"
//               emailError[0].style.display = "block";
//
//             }
//             document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//             document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//             document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//             document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//
//
//         })
//         .then(cred => {
//           if(!(typeof cred == "undefined"))
//           {
//             const formDisplay = document.querySelector("#form-display");
//             formDisplay.style.display = "none";
//             $("#firstSubmitLoading")[0].style.display = "block";
//           return db
//             .collection("users")
//             .doc(cred.user.uid)
//             .set({
//               isAdmin:false,
//               isBanned: false,
//               isMod: false,
//               teamName: curTeam.name,
//               teamCode: curTeam.teamCode,
//               first: signupForm["first-name"].value,
//               last: signupForm["last-name"].value,
//               pfp: "./images/blankpfp.png"
//             });
//           }
//           else {
//             invalidEmail = true;
//             document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//             document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//             document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//             document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//           }
//         })
//         .then(() => {
//           if(!invalidEmail)
//           {
//             document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//             document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//             document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//             document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//             signupForm.reset();
//             $(".authForm")[0].style.width = "50%";
//             $("#firstSubmitLoading")[0].style.display = "none";
//             secondPage = true;
//             const pfpContainer = document.querySelector("#pfpcontainer");
//             pfpContainer.style.display = "block";
//           }
//         });
//       }
//       else{
//         document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//         document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//         document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//         document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//       }
//       if(secondPage)
//       {
//         var canvas = $("#preview")[0];
//         var dataURL = canvas.toDataURL();
//         //$("#new")[0].src = dataURL;
//         var block = dataURL.split(";");
//         // Get the content type of the image
//         var contentType = block[0].split(":")[1];// In this case "image/gif"
//         // get the real base64 content of the file
//         var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
//
//         // Convert it to a blob to upload
//
//         var blob = b64toBlob(realData, contentType);
//
//         blobUrl = URL.createObjectURL(blob);
//
//
//         var storageRef = firebase.storage().ref(userID.uid + "/pfp");
//
//         var task = storageRef.put(blob);
//
//         var pfpUrl;
//         task.on('state_changed',
//
//           function progress(snapshot) {
//
//           },
//           function error(err){
//
//           },
//           function complete(){
//
//
//         storageRef.getDownloadURL().then(function(url) {
//           // `url` is the download URL for 'images/stars.jpg'
//
//           // This can be downloaded directly:
//           var xhr = new XMLHttpRequest();
//           xhr.responseType = 'blob';
//           xhr.onload = function(event) {
//             var blob = xhr.response;
//           };
//           xhr.open('GET', url);
//           xhr.send();
//
//           // Or inserted into an <img> element:
//           var canvas = $("#preview")[0];
//           if(document.getElementById("target") == null)
//             pfpUrl = "./images/blankpfp.png"
//           else
//             pfpUrl = url;
//
//           db.collection('users').doc(userID.uid).set({
//             bio: biotemp,
//             isAdmin:false,
//             teamName: curTeam.name,
//             teamCode: curTeam.teamCode,
//             first: firsttemp,
//             last: lasttemp,
//             pfp: pfpUrl
//           }).then(function(){
//             const actionCodeSettings = {
//                   url: 'http://teamruns36.web.app/dashboard',
//                   handleCodeInApp: false
//                 }
//             userID.sendEmailVerification(actionCodeSettings).then(function() {
//               const pfpContainer = document.querySelector("#pfpcontainer");
//               $("#signUpSubmitLoading")[0].style.display = "none";
//               pfpContainer.innerHTML = `
//               <div class = "row" style = "width: 60%; margin-left: 20%;">
//               <h1 style = "font-size: 24px; font-weight: bold;">We sent you an email to verify your account, please click the link in the email before continuing.</h1>
//               </div>
//
//               <div class = "row" style = "justify-content: center">
//
//               <p class = "error emailVerified" style = "width: 100%; margin: 0">Please verify your email by using the link sent to your inbox.</p>
//               <button id = "continue" class="formButton">Continue</button>
//
//               </div>`;
//
//               var continueButton = document.getElementById("continue");
//               continueButton.addEventListener("click", function(e) {
//                 console.log(userID);
//                 e.preventDefault();
//                 e.target.style.backgroundColor = "rgb(150, 150, 150)";
//                 e.target.style.borderColor = "rgb(150, 150, 150)";
//                 firebase.auth().currentUser.reload().then( () => {
//                   if(firebase.auth().currentUser.emailVerified)
//                   {
//                     e.target.style.borderColor = "rgb(30, 144, 255)";
//                     e.target.style.backgroundColor = "rgb(30, 144, 255)";
//                     window.location.href = "./dashboard";
//                   }
//                   else {
//                     e.target.style.borderColor = "rgb(30, 144, 255)";
//                     e.target.style.backgroundColor = "rgb(30, 144, 255)";
//                     var emailVerified = document.getElementsByClassName("emailVerified");
//                     emailVerified[0].style.display = "block";
//                   }
//                 });
//               });
//
//             }).catch(function(error) {
//               console.log(error);
//             });
//
//
//           });
//
//
//
//         }).catch(function(error) {
//           if(error.code ==  'storage/object-not-found'){
//             postPfps.push("./images/blankpfp.png");
//
//           }
//           if(error.code ==  'storage/unauthorized'){
//             // User doesn't have permission to access the object
//
//           }
//           if(error.code ==  'storage/canceled'){
//             // User canceled the upload
//
//           }
//           if(error.code ==  'storage/unknown'){
//               // Unknown error occurred, inspect the server response
//
//           }
//         });
//         });
//
//
//         }
//       }
//       else {
//
//         e.preventDefault();
//
//
//
//
//         // get user info
//         const email = signupForm["signup-email"].value;
//         const password = signupForm["signup-password"].value;
//
//         var first =  signupForm["first-name"].value;
//         var last = signupForm["last-name"].value;
//         var teamName = signupForm["signup-teamName"].value;
//         var confirmpassword = signupForm["signup-confirmpassword"].value;
//
//         var isInvalid = false;
//         var errors = document.getElementsByClassName("error");
//         for (var i = 0; i < errors.length; i++) {
//           errors[i].style.display = "none";
//         }
//         if(email == "")
//         {
//           isInvalid = true;
//           emailError[0].innerHTML = "Invalid email"
//           emailError[0].style.display = "block";
//           var emailinput = document.getElementById("signup-email");
//           emailinput.focus();
//         }
//
//         if(password.length < 8)
//         {
//           isInvalid = true;
//           passwordError[0].style.display = "block";
//           var passinput = document.getElementById("signup-password");
//           passinput.focus();
//         }
//
//         if(password != confirmpassword)
//         {
//           isInvalid = true;
//           confirmPasswordError[0].style.display = "block";
//           var passinput = document.getElementById("signup-confirmpassword");
//           passinput.focus();
//         }
//         if(first == "")
//         {
//           isInvalid = true;
//           firstNameError[0].style.display = "block";
//           var firstinput = document.getElementById("first-name");
//           firstinput.focus();
//         }
//
//         if(last == "")
//         {
//           isInvalid = true;
//           lastNameError[0].style.display = "block";
//           var lastinput = document.getElementById("last-name");
//           lastinput.focus();
//         }
//
//         if(teamName == "")
//         {
//           isInvalid = true;
//           teamNameError[0].style.display = "block";
//           var teaminput = document.getElementById("signup-teamName");
//           teaminput.focus();
//         }
//         if(!isInvalid)
//         {
//           teamNametemp = signupForm["signup-teamName"].value;
//           const formDisplay = document.querySelector("#form-display");
//           if(secondPage)
//           {
//             formDisplay.style.display = "none";
//             $("#signUpSubmitLoading")[0].style.display = "block";
//             $("#pfpcontainer")[0].style.display = "none";
//             $("#pfpdiv")[0].style.display = "none";
//           }
//
//           firsttemp =  signupForm["first-name"].value;
//           lasttemp = signupForm["last-name"].value;
//           teamNametemp = signupForm["signup-teamName"].value;
//           //gradYeartemp = signupForm["signup-gradyear"].value;
//           // sign up the user & add firestore data
//
//           var teamCode = '';
//           var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//           var numbers = '0123456789';
//           var charactersLength = characters.length;
//           for ( var i = 0; i < 3; i++ ) {
//             teamCode += characters.charAt(Math.floor(Math.random() * charactersLength));
//           }
//           for ( var i = 0; i < 1; i++ ) {
//             teamCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
//           }
//
//           curTeam = teamCode;
//
//           var invalidEmail = false;
//             auth
//             .createUserWithEmailAndPassword(email, password)
//             .catch(err =>{
//
//
//                 var invalidEmail = false;
//
//
//                 console.log(err.message);
//
//                   if(err.message == "The email address is already in use by another account.")
//                   {
//                     invalidEmail = true;
//                     emailError[0].innerHTML = "The email address is already in use"
//                     emailError[0].style.display = "block";
//
//                   }
//                   if(err.message == "The email address is badly formatted.")
//                   {
//                     invalidEmail = true;
//                     emailError[0].innerHTML = "Invalid Email"
//                     emailError[0].style.display = "block";
//
//                   }
//                   document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//                   document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//                   document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//                   document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//
//
//
//           }).then(cred => {
//             console.log(cred);
//             if(!(typeof cred == "undefined"))
//             {
//               const formDisplay = document.querySelector("#form-display");
//               formDisplay.style.display = "none";
//               $("#firstSubmitLoading")[0].style.display = "block";
//
//               return db
//                 .collection("users")
//                 .doc(cred.user.uid)
//                 .set({
//                   isAdmin: true,
//                   teamName: teamName,
//                   teamCode: teamCode,
//                   first: first,
//                   last: last,
//                   pfp: "./images/blankpfp"
//                 }).then(() => {
//                   db.collection("teams")
//                   .add({
//                       name: teamName,
//                       teamCode: teamCode,
//                       adminID: "",
//                       members: []
//                       })
//                       .then(() => {
//                         document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//                         document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//                         document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//                         document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//                         signupForm.reset();
//                       $(".authForm")[0].style.width = "50%";
//                       $("#firstSubmitLoading")[0].style.display = "none";
//                       secondPage = true;
//                       const pfpContainer = document.querySelector("#pfpcontainer");
//                       pfpContainer.style.display = "block";
//                       })
//                       .catch(err => {
//                       console.log(err.message);
//                       });
//                 })
//             }
//             else {
//               document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//               document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//               document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//               document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//               invalidEmail = true;
//             }
//
//
//           });
//
//         }
//         else{
//           document.getElementById('nextButton').style.borderColor = "rgb(30, 144, 255)";
//           document.getElementById('submitButton').style.borderColor = "rgb(30, 144, 255)";
//           document.getElementById('nextButton').style.backgroundColor = "rgb(30, 144, 255)";
//           document.getElementById('submitButton').style.backgroundColor = "rgb(30, 144, 255)";
//         }
//         if(secondPage)
//         {
//           document.getElementById('nextButton').style.backgroundColor = "rgb(150, 150, 150)";
//           document.getElementById('submitButton').style.backgroundColor = "rgb(150, 150, 150)";
//           document.getElementById('nextButton').style.borderColor = "rgb(150, 150, 150)";
//           document.getElementById('submitButton').style.borderColor = "rgb(150, 150, 150)";
//           var canvas = $("#preview")[0];
//           var dataURL = canvas.toDataURL();
//           console.log(dataURL);
//           //$("#new")[0].src = dataURL;
//           var block = dataURL.split(";");
//           // Get the content type of the image
//           var contentType = block[0].split(":")[1];// In this case "image/gif"
//           // get the real base64 content of the file
//           var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
//
//           // Convert it to a blob to upload
//           console.log(contentType, realData);
//           var blob = b64toBlob(realData, contentType);
//
//           blobUrl = URL.createObjectURL(blob);
//
//
//           var storageRef = firebase.storage().ref(userID.uid + "/pfp");
//
//           var task = storageRef.put(blob);
//
//           var pfpUrl;
//           task.on('state_changed',
//
//             function progress(snapshot) {
//
//             },
//             function error(err){
//
//             },
//             function complete(){
//
//
//           storageRef.getDownloadURL().then(function(url) {
//             // `url` is the download URL for 'images/stars.jpg'
//
//             // This can be downloaded directly:
//             var xhr = new XMLHttpRequest();
//             xhr.responseType = 'blob';
//             xhr.onload = function(event) {
//               var blob = xhr.response;
//             };
//             xhr.open('GET', url);
//             xhr.send();
//
//             // Or inserted into an <img> element:
//             var canvas = $("#preview")[0];
//             if(document.getElementById("target") == null)
//               pfpUrl = "./images/blankpfp.png"
//             else
//               pfpUrl = url;
//             db.collection('users').doc(userID.uid).set({
//               isAdmin: true,
//               teamName: teamNametemp,
//               teamCode: curTeam,
//               first: firsttemp,
//               last: lasttemp,
//               pfp: pfpUrl
//             }).then(function(){
//               const actionCodeSettings = {
//                     url: 'http://teamruns36.web.app/dashboard',
//                     handleCodeInApp: false
//                   }
//               userID.sendEmailVerification(actionCodeSettings).then(function() {
//                 const pfpContainer = document.querySelector("#pfpcontainer");
//                 $("#signUpSubmitLoading")[0].style.display = "none";
//                 pfpContainer.innerHTML = `
//                 <div class = "row" style = "width: 60%; margin-left: 20%;">
//                 <h1 style = "font-size: 24px; font-weight: bold;">We sent you an email to verify your account, please click the link in the email before continuing.</h1>
//                 </div>
//
//                 <div class = "row" style = "justify-content: center">
//
//                 <p class = "error emailVerified" style = "width: 100%; margin: 0">Please verify your email by using the link sent to your inbox.</p>
//                 <button id = "continue" class="formButton">Continue</button>
//
//                 </div>`;
//
//                 var continueButton = document.getElementById("continue");
//                 continueButton.addEventListener("click", function(e) {
//                   e.preventDefault();
//                   console.log(userID)
//
//                   e.target.style.backgroundColor = "rgb(150, 150, 150)";
//                   e.target.style.borderColor = "rgb(150, 150, 150)";
//                   firebase.auth().currentUser.reload().then( () => {
//                     if(firebase.auth().currentUser.emailVerified)
//                     {
//                       e.target.style.backgroundColor = "rgb(30, 144, 255)";
//                       e.target.style.borderColor = "rgb(30, 144, 255)";
//                       window.location.href = "./dashboard";
//                     }
//                     else {
//                       e.target.style.backgroundColor = "rgb(30, 144, 255)";
//                       e.target.style.borderColor = "rgb(30, 144, 255)";
//                       var emailVerified = document.getElementsByClassName("emailVerified");
//                       emailVerified[0].style.display = "block";
//                     }
//                   });
//                 });
//
//               }).catch(function(error) {
//                 console.log(error);
//               });
//
//             });
//
//
//
//           }).catch(function(error) {
//             if(error.code ==  'storage/object-not-found'){
//               postPfps.push("./images/blankpfp.png");
//
//             }
//             if(error.code ==  'storage/unauthorized'){
//               // User doesn't have permission to access the object
//
//             }
//             if(error.code ==  'storage/canceled'){
//               // User canceled the upload
//
//             }
//             if(error.code ==  'storage/unknown'){
//                 // Unknown error occurred, inspect the server response
//
//             }
//           });
//           });
//
//
//           }
//         }
//       });




// // close the signup modal & reset form
// window.location.href = './dashboard.html';
//


//get profile Picture
var pfpButton = document.getElementById("pfpButton");
pfpButton.addEventListener("change", function(e) {
  console.log("hi");

   $("#pfpSubmitLoading")[0].style.display = "block";
  //get file
  var file = e.target.files[0];
  //create storage references


  var storageRef = firebase.storage().ref(userID.uid + "/" + file.name);
  pfpFileName = file.name;
  //upload file
  var task = storageRef.put(file);

  //check when complete
  task.on('state_changed',

    function progress(snapshot) {

    },
    function error(err){

    },
    function complete(){

      firebase.storage().ref(userID.uid + "/" + file.name).getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(userID.uid + "/" + file.name);
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element:

          var pic = document.getElementById("picselect");
          pic.innerHTML = `<img style = "float:left" crossorigin="anonymous" id="target" width = "400px" src="">`;

          setTimeout(function () {
            var img2 = document.getElementById('target');
            img2.src =  url;
            console.log(img2.src)
            img2.style.width = "400px";
            img2.style.height = "400px";
            var aspectR = (parseInt(img2.style.width.substring(0, img2.style.width.indexOf("px"))))/(parseInt(img2.style.height.substring(0, img2.style.height.indexOf("px"))));
            var newWidth = 400*aspectR;
             $('#target').Jcrop({
                     onChange : updatePreview,
                     onSelect : updatePreview,
                      aspectRatio: 200/200, //keep aspect ratio
                      setSelect: [0,0,200,200],
                      minSize: [100,100],
                      maxSize: [500, 500],
                      boxWidth: newWidth,
                      boxHeight: 400,
                  });
                  function updatePreview(c) {
                      //img2.crossOrigin = 'anonymous';
                      if(parseInt(c.w) > 0) {
                          // Show image preview
                          var imageObj = $("#target")[0];
                          var canvas = $("#preview")[0];
                          console.log(canvas);
                          var context = canvas.getContext("2d");
                          context.clearRect(0, 0, canvas.width, canvas.height);
                          context.drawImage(imageObj, c.x, c.y, c.w, c.h, 0, 0, canvas.width, canvas.height);

                      }
                  };

          }, 500)



        setTimeout(function () {
          $("#pfpSubmitLoading")[0].style.display = "none";
          document.querySelector("#pfpdiv").style.display = "block";
          firebase.storage().ref(userID.uid + "/" + file.name).delete().then(function() {

          });
        }, 1000);

      }).catch(function(error) {
        if(error.code ==  'storage/object-not-found'){
          // File doesn't exist
        }
        if(error.code ==  'storage/unauthorized'){
          // User doesn't have permission to access the object
        }
        if(error.code ==  'storage/canceled'){
          // User canceled the upload
        }
        if(error.code ==  'storage/unknown'){
            // Unknown error occurred, inspect the server response
        }
      });
    }
  );
});

function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

function isCanvasBlank(canvas) {
const context = canvas.getContext('2d');

const pixelBuffer = new Uint32Array(
context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
);

return !pixelBuffer.some(color => color !== 0);
}

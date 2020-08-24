// [START import]
const functions = require('firebase-functions');
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const url = require('url');

// [END import]

app.set('views', __dirname + '/..'); // general config
app.set('view engine', 'html');

// [START middleware]
const cors = require('cors')({origin: true});
app.use(cors);
// [END middleware]
//
var firebaseConfig = {
    apiKey: "AIzaSyCklyGxX8Yd3EwOvOdhuaagTN7sN-QhTH0",
    authDomain: "studentapp-a6200.firebaseapp.com",
    databaseURL: "https://studentapp-a6200.firebaseio.com",
    projectId: "studentapp-a6200",
    storageBucket: "studentapp-a6200.appspot.com",
    messagingSenderId: "363683353062",
    appId: "1:363683353062:web:0b5e8fc093528ad7"
  };



firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
 const db = firebase.firestore();






//
// var serviceAccount = require("./teamruns36-firebase-adminsdk-f48rd-404e5bded5.json");
//
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://teamruns36.firebaseio.com"
// });
//
// const db = admin.firestore();
// db.collection("posts").doc("hello").set({
//   hello: "hello"
// }).then(() => {
//   console.log("done");
// })

app.get('/', (req, res) => {
  // Return success response
  return res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/index', (req, res) => {
  // Return success response
  return res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/signup', (req, res) => {
  // Return success response
  return res.sendFile(path.join(__dirname, '../public/signup.html'));
});

app.get('/dashboard', (req, res) => {

  // Return success response
  return res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

app.get('/login', (req, res) => {
  // Return success response
  return res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/policy', (req, res) => {
  // Return success response
  return res.sendFile(path.join(__dirname, '../public/policy.html'));
});

app.get('/connect', (req, response) => {


    var curDate = new Date();
    var nonce = curDate.getTime();
    var consumer_key = "d6925563-2616-4ece-b36b-b0b4bd8ae948";
    var signature_method= "HMAC-SHA1";
    var signature_base = "POST&https%3A%2F%2Fconnectapi.garmin.com%2Foauth-service%2Foauth%2Frequest_token&oauth_consumer_key%3D" + consumer_key + "%26oauth_nonce%3D" + nonce + "%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D" + curDate.getTime() + "%26oauth_version%3D1.0";
    var secretWithTrail = "FLZS3sacXvIneTX9TrYGSdBmUNThpmYrwMi&";

    axios.defaults.headers.common['Authorization'] = "OAuth oauth_consumer_key=" + consumer_key + ", oauth_nonce="+ nonce + ", oauth_signature=" + encodeURIComponent(hash_function(signature_base, secretWithTrail)) + ", oauth_timestamp="+ curDate.getTime() + ", oauth_signature_method=\"HMAC-SHA1\", oauth_version=\"1.0\"";

    axios
      .post('https://connectapi.garmin.com/oauth-service/oauth/request_token', {status: "complete"}
      )
      .then(res => {

        var oauth_token = res.data.substring(res.data.indexOf("oauth_token=") + "oauth_token=".length,res.data.indexOf("oauth_token_secret=")-1 );
        var oauth_token_secret = res.data.substring(res.data.indexOf("oauth_token_secret=") + "oauth_token_secret=".length, res.data.length);
        db.collection("users").get().then(users => {
          users.forEach(user => {
            if(user.data().awaitingConnection)
            {
              user.ref.update({
                oauth_token: oauth_token,
                oauth_token_secret: oauth_token_secret
              }).then(() => {
                response.redirect('https://connect.garmin.com/oauthConfirm?oauth_token=' + oauth_token + '&oauth_callback=https://teamruns.com/connectsuccess');
              })
              .catch(error => {
                console.error(error)
              });
            }
          })

        })
        .catch(error => {
          console.error(error)
        });

      })
      .catch(error => {
        console.error(error)
      });





    function hash_function(base_string, key) {
            return crypto
                .createHmac('sha1', key)
                .update(base_string)
                .digest('base64')
        }

});



app.get('/connectsuccess', (req, response) => {

  var incomingOauth_token = url.parse(req.url,true).query.oauth_token;
  var incomingOauth_verifier = url.parse(req.url,true).query.oauth_verifier;

  var curDate = new Date();
  var nonce = curDate.getTime();
  var consumer_key = "d6925563-2616-4ece-b36b-b0b4bd8ae948";
  var signature_method= "HMAC-SHA1";
  var signature_base = "POST&https%3A%2F%2Fconnectapi.garmin.com%2Foauth-service%2Foauth%2Faccess_token&oauth_consumer_key%3D" + consumer_key + "%26oauth_nonce%3D" + nonce +  "%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D" + curDate.getTime() + "%26oauth_token%3D" + incomingOauth_token + "%26oauth_verifier%3D" + incomingOauth_verifier + "%26oauth_version%3D1.0";
  var secretWithTrail = "FLZS3sacXvIneTX9TrYGSdBmUNThpmYrwMi&";
  var oauth_token = "";
  var oauth_token_secret = "";

  db.collection("users").get().then(users => {
    users.forEach(user => {
      if(user.data().awaitingConnection)
      {
        user.ref.update({
          awaitingConnection: false
        }).then(() => {
          oauth_token = user.data().oauth_token;
          oauth_token_secret = user.data().oauth_token_secret;
          var signature = encodeURIComponent(hash_function(signature_base, secretWithTrail+oauth_token_secret));
          axios.defaults.headers.common['Authorization'] = "OAuth oauth_nonce="+ nonce + ", oauth_signature=" +signature+ ", oauth_consumer_key=" + consumer_key + ", oauth_token=" + oauth_token + ", oauth_timestamp="+ curDate.getTime() + ", oauth_verifier=" + incomingOauth_verifier+ ", oauth_signature_method=\"HMAC-SHA1\", oauth_version=\"1.0\"";
          axios
            .post('https://connectapi.garmin.com/oauth-service/oauth/access_token', {status: "complete"}
            )
            .then(res => {
              var user_token = res.data.substring(res.data.indexOf("oauth_token=") + "oauth_token=".length,res.data.indexOf("oauth_token_secret=")-1 );
              var user_token_secret = res.data.substring(res.data.indexOf("oauth_token_secret=") + "oauth_token_secret=".length, res.data.length);
              user.ref.update({
                user_token: user_token,
                user_token_secret: user_token_secret
              }).then(() => {
                  response.redirect("https://teamruns.com/dashboard");

              })
            })
            .catch(error => {
              console.error(error)
            });

      }).catch(error => {
        console.error(error)
      });
      }
    });
  })
  .catch(error => {
    console.error(error)
  });






  function hash_function(base_string, key) {
          return crypto
              .createHmac('sha1', key)
              .update(base_string)
              .digest('base64')
      }
});



app.post('/getactivity', (req, response) => {
  var data = req.body;
  var activities = data.activities;
  var months = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  db.collection("users").get().then(users => {
    for (var i = 0; i < activities.length; i++) {
      users.forEach(user => {
        if(user.data().user_token == activities[i].userAccessToken)
        {
          var time = new Date((activities[i].startTimeInSeconds + activities[i].startTimeOffsetInSeconds)*1000);
          var timeObj = secondsToTime(activities[i].durationInSeconds);
          var distInMiles = activities[i].distanceInMeters/(1609);
          distInMiles = distInMiles.toFixedDown(2);
          var ampm = (time.getHours() >= 12) ? true : false;
          db.collection("posts").add({
            description: "",
            segments: [{name: "Run", distance: distInMiles, miles: true, hours: timeObj.h, mins: timeObj.m, secs: timeObj.s}],
            first: user.data().first,
            last: user.data().last,
            teamCode: user.data().teamCode,
            pfp: user.data().pfp,
            userid: user.id,
            month: months[time.getMonth()],
            day: time.getDate(),
            year: time.getFullYear(),
            hour: time.getHours(),
            minute: time.getMinutes(),
            ampm: ampm,
            date: time,
            comingFromGarmin: true,
            totalDistance: distInMiles,
            totalTime: activities[i].durationInSeconds,
            totalHours: timeObj.h,
            totalMinutes: timeObj.m,
            totalSeconds: timeObj.s
          });
        }
      })
    }


  });

  function secondsToTime(secs)
  {
      var hours = Math.floor(secs / (60 * 60));

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var obj = {
          h: hours,
          m: minutes,
          s: seconds
      };
      return obj;
  }
  Number.prototype.toFixedDown = function(digits) {
      var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
          m = this.toString().match(re);
      return m ? parseFloat(m[1]) : this.valueOf();
  };

  response.send("success")
});

app.post('/getmanualactivity', (req, response) => {
  var data = req.body;
  var activities = data.activities;
  var months = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  db.collection("users").get().then(users => {
    for (var i = 0; i < activities.length; i++) {
      users.forEach(user => {
        if(user.data().user_token == activities[i].userAccessToken)
        {
          var time = new Date((activities[i].startTimeInSeconds + activities[i].startTimeOffsetInSeconds)*1000);
          var timeObj = secondsToTime(activities[i].durationInSeconds);
          var distInMiles = activities[i].distanceInMeters/(1609);
          distInMiles = distInMiles.toFixedDown(2);
          var ampm = (time.getHours() >= 12) ? true : false;
          db.collection("posts").add({
            description: "",
            segments: [{name: "Run", distance: distInMiles, miles: true, hours: timeObj.h, mins: timeObj.m, secs: timeObj.s}],
            first: user.data().first,
            last: user.data().last,
            teamCode: user.data().teamCode,
            pfp: user.data().pfp,
            userid: user.id,
            month: months[time.getMonth()],
            day: time.getDate(),
            year: time.getFullYear(),
            hour: time.getHours(),
            minute: time.getMinutes(),
            ampm: ampm,
            date: time,
            comingFromGarmin: true,
            totalDistance: distInMiles,
            totalTime: activities[i].durationInSeconds,
            totalHours: timeObj.h,
            totalMinutes: timeObj.m,
            totalSeconds: timeObj.s
          });
        }
      })
    }


  });

  function secondsToTime(secs)
  {
      var hours = Math.floor(secs / (60 * 60));

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var obj = {
          h: hours,
          m: minutes,
          s: seconds
      };
      return obj;
  }
  Number.prototype.toFixedDown = function(digits) {
      var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
          m = this.toString().match(re);
      return m ? parseFloat(m[1]) : this.valueOf();
  };

  response.send("success")

});

app.post('/deregistration', (req, response) => {
  db.collection("users").get().then(users => {

      users.forEach(user => {
        if(user.data().user_token == activities[i].userAccessToken)
        {
          user.ref.update({
            user_token: "",
            user_token_secret: ""
          });
        }

      });
    
  });
  response.send("success");
});

//////////////////////////

//Garmin Watch Implementation

/////////////////////////

// Dependencies
// const request = require('request')
// const OAuth = require('oauth-1.0a')

//
// // Initialize
// const oauth = OAuth({
//     consumer: {
//         key: 'f8ed4e0f-aa14-4022-8cb4-2fd90b256b50',
//         secret: '3VrdL6ezOKB0NzQmLHJzEttrrVvWb6LHSNn'
//       },
//     signature_method: 'HMAC-SHA1',
//     timestamp: "1588601652",
//     nonce:"4527023216",
//     signature:"FBwbXvyaRZlveo3cfyQWvstRRBY%3D",
//     hash_function(base_string, key) {
//         return crypto
//             .createHmac('sha1', key)
//             .update(base_string)
//             .digest('base64')
//     },
// })
//
// const request_data = {
//     url: 'https://connectapi.garmin.com/oauthservice/oauth/request_token',
//     method: 'POST',
//     data: { status: 'complete' },
// }
//
// // Note: The token is optional for some requests
// const token = {
//     key: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
//     secret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE',
// }
//
// request(
//     {
//         url: request_data.url,
//         method: request_data.method,
//         form: oauth.authorize(request_data),
//     },
//     function(error, response, body) {
//         console.log(response);
//     }
// )



// Define the Firebase function that will act as Express application
// Note: This `api` must match with `/firebase.json` rewrites rule.
exports.api = functions.https.onRequest(app);

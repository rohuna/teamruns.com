var userID;
var postsData;
var routesData;
var usersData;
var teamsData;






//set user variable
function setUser(user) {

  if(user) userID = user;
  else userID = null;
}

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    setUser(user);

    if(window.location.pathname == '/index')
    {
      window.location.href = './dashboard';
    }
    if(window.location.pathname == "")
    {
      window.location.href = './dashboard';
    }
    if(window.location.pathname == '/login')
    {
      window.location.href = './dashboard';
    }
    console.time('a');
    console.time('b');
    var teamCode = getCookie("teamCode");
    if (teamCode != "" && window.location.pathname == '/dashboard')
      {
        console.log(teamCode);
        db.collection("posts").where("teamCode", "==", teamCode).onSnapshot(
          snapshot => {
            console.timeEnd('a');
            
            hideLoadingPage();
            postsData = snapshot.docs;
            setPfp();
            checkDataReady(user);
            
            setupUI(user);

            setUpPostForm();
          },
          err => console.log(err.message)
        );
        db.collection("users").where("teamCode", "==", teamCode)
          .onSnapshot(
            snapshot => {
              console.timeEnd('b')
              console.log();
              usersData = snapshot.docs;
              usersData.forEach(user => { });
            },
            err => console.log(err.message)
          );
        db.collection("routes").where("teamCode", "==", teamCode).onSnapshot(
          snapshot => {

            routesData = snapshot.docs;
          },
          err => console.log(err.message)
        );
        db.collection("teams")
          .onSnapshot(
            snapshot => {
              teamsData = snapshot.docs;
            },
            err => console.log(err.message)
          );

      }
      else
      {
      db.collection("posts").onSnapshot(
        snapshot => {
          console.timeEnd('b');
          hideLoadingPage();
          postsData = snapshot.docs;
          setPfp();
          setupPosts(postsData, user);
          setupUI(user);

          setUpPostForm();
        },
        err => console.log(err.message)
      );
      db.collection("users")
        .onSnapshot(
          snapshot => {
            hideLoadingPage();
            console.timeEnd('b')
            console.log();
            usersData = snapshot.docs;
            usersData.forEach(user => {});
          },
          err => console.log(err.message)
        );
      db.collection("routes").onSnapshot(
        snapshot => {
          hideLoadingPage();
          routesData = snapshot.docs;
        },
        err => console.log(err.message)
      );
      db.collection("teams")
        .onSnapshot(
          snapshot => {
            hideLoadingPage();
            teamsData = snapshot.docs;
          },
          err => console.log(err.message)
        );
        }
    


  } else {
    if(window.location.pathname == '/dashboard')
    {
      auth.signOut();
      window.location.href = './index';
    }
    setupUI();
  }
});

function hideLoadingPage()
{
  console.log("jo");
  
  if(document.getElementById("loadingScreen") != null)
  {
    
    
    document.getElementById("loadingScreen").style.opacity = 
    "0";
    setTimeout(() => {
      document.getElementById("loadingScreen").style.display = "none";
    }, 300)
  }
}


function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
    return "";
  }
  return "";
}

function checkDataReady(user)
{
  if(usersData != null)
  {
    setupPosts(postsData, user);
  }
  else
  {
    setTimeout(() => {
      checkDataReady(user);
    }, 100);
  }
}
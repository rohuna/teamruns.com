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

    if(window.location.href.substring(window.location.href.lastIndexOf("/"),window.location.href.length ) == '/index')
    {
      window.location.href = './dashboard';
    }
    if(window.location.href.substring(window.location.href.length-4, window.location.href.length) == ".com" || window.location.href.substring(window.location.href.length-4, window.location.href.length) == ".app")
    {
      window.location.href = './dashboard';
    }
    if(window.location.href.substring(window.location.href.lastIndexOf("/"),window.location.href.length ) == '/login')
    {

      window.location.href = './dashboard';
    }


    db.collection("posts").onSnapshot(
      snapshot => {

        postsData = snapshot.docs;
        setPfp();
        setupPosts(postsData, user);
        setupUI(user);

        setUpPostForm();

      },
      err => console.log(err.message)
    );
    db.collection("users").onSnapshot(
      snapshot => {
        console.log()
        usersData = snapshot.docs;
        usersData.forEach(user => {
        });

      },
      err => console.log(err.message)
    );
    db.collection("routes").onSnapshot(
      snapshot => {

        routesData = snapshot.docs;
      },
      err => console.log(err.message)
    );
    db.collection("teams").onSnapshot(
      snapshot => {

        teamsData = snapshot.docs;
      },
      err => console.log(err.message)
    );


  } else {
    if(window.location.href.substring(window.location.href.lastIndexOf("/"),window.location.href.length ) == '/dashboard')
    {
      window.location.href = './index';
    }
    setupUI();
  }
});

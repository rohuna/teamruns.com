var userID;
var postsData;
var routesData;
var usersData;
var teamsData;






//set user variable
function setUser(user) {

  if (user) userID = user;
  else userID = null;
}

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    setUser(user);

    if (window.location.pathname == '/index') {
      window.location.href = './dashboard';
    }
    if (window.location.pathname == "") {
      window.location.href = './dashboard';
    }
    if (window.location.pathname == '/login') {
      window.location.href = './dashboard';
    }
    db.collection('users').doc(user.uid).get().then(userdoc => {
      db.collection("posts").where('teamCode', '==', userdoc.data().teamCode).onSnapshot(
        snapshot => {

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
            console.log();
            usersData = snapshot.docs;
            usersData.forEach(user => { });
          },
          err => console.log(err.message)
        );
      db.collection("routes").where('teamCode', '==', userdoc.data().teamCode).onSnapshot(
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
    })



  } else {
    if (window.location.pathname == '/dashboard') {
      auth.signOut();
      window.location.href = './index';
    }
    setupUI();
  }
});

const segmentsForm = document.querySelector("#segmentsForm");




const pfpDash = document.querySelector("#pfpDash");
const pfpNav = document.querySelector("#pfpnav");
const dashName = document.querySelector("#dashName");
var noPostsSection = document.getElementById("noPostsSection");
var mobwidth = 1000;
var mchart;
var pchart;
var weekchart;
var userTeamCode = "";
var curUser;



$(document).ready(function () {

  var topNav = document.getElementById("topNav");

  if (window.innerWidth < mobwidth) {

    // 	topNav.style.display = "block";
    // 	topNav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light  gradientback" style = "padding-bottom: 7px !important;">
    //
    //     <a class="navbar-brand" href="./dashboard" style = "color: white; font-weight: bold; font-size: 24px">Team<i style = "color: white;" class="fas fa-running"></i>Runs</a>
    //
    //   <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    //   	<span class="icon-bar top-bar"></span>
    //   	<span class="icon-bar middle-bar"></span>
    //   	<span class="icon-bar bottom-bar"></span>
    //   </button>
    //
    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    // 	<div class=" border-right sticky" id="sidebar-wrapper" style = "padding: 15px 0;">
    // 			<div class="list-group list-group-flush">
    //
    // 				<ul class="navbar-nav">
    //
    //
    //
    // 					<li class="nav-item sidebar-item pageLink active">
    // 						<a href="" class="nav-link" id="teamactivity"><i class="fas fa-home"></i> &nbsp;Activity</a>
    //
    // 					</li>
    // 					<!-- <li class="nav-item">
    // 						<a href="" class="nav-link" id="youractivity">Your Activity</a>
    // 					</li> -->
    // 					<li class="nav-item sidebar-item pageLink">
    // 						<a href="" class="nav-link" id="teamroutes"><i class="fas fa-route"></i> &nbsp;Routes</a>
    // 					</li>
    // 					<li class="nav-item sidebar-item pageLink">
    // 						<a href="" class="nav-link" id="team"><i class="fas fa-user-friends"></i> &nbsp;Team</a>
    // 					</li>
    // 					<li class="nav-item sidebar-item pageLink" >
    // 						<a href="" class="nav-link" style = "display: none" id="summaryNav"><i class="fas fa-clipboard-list"></i> &nbsp;Summary</a>
    // 					</li>
    // 					<li class="nav-item sidebar-item pageLink" >
    // 						<a href="" class="nav-link" id="analysisNav"><i class="fas fa-chart-line"></i> &nbsp;Analysis</a>
    // 					</li>
    // 					<li class="nav-item sidebar-item pageLink" >
    // 						<a href="" class="nav-link" id="watchNav"><i class="fas fa-sync-alt"></i> &nbsp;Sync Watch</a>
    // 					</li>
    // 					<li class="nav-item sidebar-item pageLink" >
    // 						<a href="" class="nav-link" id="settingsNav"><i class="fas fa-cog"></i> &nbsp;Settings</a>
    // 					</li>
    //
    // 				</ul>
    // 			</div>
    // 		</div>
    //   </div>
    // </nav>`


    // sideWrapper.innerHTML = "";
    // sideWrapper.style.display = "none";
  }
  else {
    $(".pageLink").css("display", "none");
    sideWrapper.style.display = "none";
  }

});






function setPfp() {

  var pfpNav = document.getElementById("pfpNav");
  db.collection('users').doc(userID.uid).get().then(pfpUser => {
    pfpNav.src = pfpUser.data().pfp;
  });

  //   db.collection('users').doc(userID.uid).get().then(doc => {
  //
  //   //setdashboard name
  //   dashName.innerHTML = doc.data().first + " " + doc.data().last;
  //
  //   firebase.storage().ref(userID.uid + "/pfp").getDownloadURL().then(function(url) {
  //     // `url` is the download URL for 'images/stars.jpg'
  //
  //     // This can be downloaded directly:
  //     var xhr = new XMLHttpRequest();
  //     xhr.responseType = 'blob';
  //     xhr.onload = function(event) {
  //       var blob = xhr.response;
  //     };
  //     xhr.open('GET', url);
  //     xhr.send();
  //
  //     // Or inserted into an <img> element:
  //     var img = pfpNav;
  //     img.src = url;
  //     img = pfpDash
  //     img.src = url;
  //     setTimeout(function () {
  //       document.querySelector("#accInfoLoading").style.display = "none";
  //       document.querySelector("#infoAcc").style.display = "block";
  //     }, 1000);
  //
  //
  //   }).catch(function(error) {
  //     if(error.code ==  'storage/object-not-found'){
  //       var img = pfpNav;
  //       img.src = "./images/blankpfp.png";
  //       img = pfpDash
  //       img.src = "./images/blankpfp.png";
  //
  //     }
  //   });
  // });


};


// logout
var logout = document.querySelector("#logout");
logout.addEventListener("click", e => {
  e.preventDefault();
  auth.signOut();
  window.location.href = "./index"
});





var topNav = document.getElementById("topNav");
var sideWrapper = document.getElementById("sidebar-wrapper");
if (window.innerWidth < mobwidth) {

  topNav.style.display = "block";
  topNav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light  gradientback" style = "padding-bottom: 7px !important;">

		<a class="navbar-brand" href="./dashboard" style = "color: white; font-weight: bold; font-size: 24px">Team<i style = "color: white;" class="fas fa-running"></i>Runs</a>

	<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		<span class="icon-bar top-bar"></span>
		<span class="icon-bar middle-bar"></span>
		<span class="icon-bar bottom-bar"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	<div class=" border-right sticky" id="sidebar-wrapper" style = "padding: 15px 0;">
			<div class="list-group list-group-flush">

				<ul class="navbar-nav">



				<li class="nav-item sidebar-item pageLink active">
					<a href="" class="nav-link" id="homeNav"><i class="fas fa-home"></i> &nbsp;Home</a>

				</li>
				<li class="nav-item sidebar-item pageLink">
					<a href="" class="nav-link" id="teamactivity"><i class="fas fa-list"></i> &nbsp;Activities</a>

				</li>

					<li class="nav-item sidebar-item pageLink">
						<a href="" class="nav-link" id="teamroutes"><i class="fas fa-route"></i> &nbsp;Routes</a>
					</li>
					<li class="nav-item sidebar-item pageLink">
						<a href="" class="nav-link" id="team"><i class="fas fa-user-friends"></i> &nbsp;Team</a>
					</li>
					<li class="nav-item sidebar-item pageLink" >
						<a href="" class="nav-link" style = "display: none" id="summaryNav"><i class="fas fa-clipboard-list"></i> &nbsp;Summary</a>
					</li>
					<li class="nav-item sidebar-item pageLink" >
            <a href="" class="nav-link" id="planNav"><i class="far fa-calendar-alt"></i> &nbsp;Team Plan</a>
          </li>
					<li class="nav-item sidebar-item pageLink" >
						<a href="" class="nav-link" id="analysisNav"><i class="fas fa-chart-line"></i> &nbsp;Analysis</a>
					</li>
					<li class="nav-item sidebar-item pageLink" >
						<a href="" class="nav-link" id="watchNav"><i class="fas fa-sync-alt"></i> &nbsp;Sync Watch</a>
					</li>
					<li class="nav-item sidebar-item pageLink" >
						<a href="" class="nav-link" id="settingsNav"><i class="fas fa-cog"></i> &nbsp;Settings</a>
					</li>
					<li class="nav-item sidebar-item">
		        <a href="" style = "display: none; color: white !important"class="nav-link newRunButton" id="newRunButton"><i class="fas fa-plus" style = "color:white"></i> New Run</a>
		      </li>
		      <li class="nav-item sidebar-item">
		       <a  style="" href="./index" class="logged-in nav-link" id="logout">Logout</a>
		    </li>

				</ul>
			</div>
		</div>
	</div>
</nav>`

  logout = document.querySelector("#logout");
  logout.addEventListener("click", e => {
    e.preventDefault();
    auth.signOut();
    window.location.href = "./index"
  });


  sideWrapper.innerHTML = "";
  sideWrapper.style.display = "none";
}


var editRunButton = document.querySelector("#editRunButton");
var editRunSection = document.querySelector("#editRunSection");
var postSection = document.querySelector("#postSection");
var createForm = document.querySelector("#create-form");
var newRunButton = document.querySelector("#newRunButton");
var summaryNav = document.getElementById("summaryNav");
var summaryList = document.getElementById("summaryList");
var analysisSection = document.getElementById("analysisSection");
var teamActivity = document.querySelector("#teamactivity");
var team = document.querySelector("#team");
var teamRoutes = document.querySelector("#teamroutes");
var settingsNav = document.querySelector("#settingsNav");
var settingsSection = document.querySelector("#settingsSection");
var watchNav = document.querySelector("#watchNav");
var watchSection = document.querySelector("#watchSection");
var planNav = document.querySelector("#planNav");
var planSection = document.querySelector("#planSection");
var homeNav = document.querySelector("#homeNav");
var homeSection = document.querySelector("#homeSection");
var postList = document.querySelector('.posts');

function setNavbarListeners() {

  editRunButton = document.querySelector("#editRunButton");
  editRunSection = document.querySelector("#editRunSection");
  postSection = document.querySelector("#postSection");
  createForm = document.querySelector("#create-form");
  newRunButton = document.querySelector("#newRunButton");
  summaryNav = document.getElementById("summaryNav");
  summaryList = document.getElementById("summaryList");
  analysisSection = document.getElementById("analysisSection");
  teamActivity = document.querySelector("#teamactivity");
  team = document.querySelector("#team");
  teamRoutes = document.querySelector("#teamroutes");
  settingsNav = document.querySelector("#settingsNav");
  settingsSection = document.querySelector("#settingsSection");
  watchNav = document.querySelector("#watchNav");
  watchSection = document.querySelector("#watchSection");
  planNav = document.querySelector("#planNav");
  planSection = document.querySelector("#planSection");
  homeNav = document.querySelector("#homeNav");
  homeSection = document.querySelector("#homeSection");
  postList = document.querySelector('.posts');
  newRunButton.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (window.innerWidth < mobwidth) toggleNav();
    noPostsSection.style.display = "none";
    //set current date and time
    var currentdate = new Date();
    var curDay = currentdate.getDate();
    var curMonth = currentdate.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var curHour = currentdate.getHours();
    var curMin = currentdate.getMinutes();
    document.getElementById("month").value = months[curMonth];
    document.getElementById("day").value = curDay;
    document.getElementById("year").value = currentdate.getFullYear();
    $("#am").addClass("active");
    if (curHour > 11) {
      $("#am").removeClass("active");
      $("#pm").addClass("active");

      if (curHour != 12) curHour = curHour - 12;
    }
    if (curHour == 0) {
      curHour = 12;
    }
    if (curMin < 10) curMin = "0" + curMin;
    document.getElementById("time").value = curHour + ":" + curMin;

    addAmPmListeners();



    if (teamActivity.parentElement.classList.contains("active")) {
      teamActivity.parentElement.classList.remove("active")
    }
    if (teamRoutes.parentElement.classList.contains("active")) {
      teamRoutes.parentElement.classList.remove("active")
    }
    if (team.parentElement.classList.contains("active")) {
      team.parentElement.classList.remove("active")
    }
    if (analysisNav.parentElement.classList.contains("active")) {
      analysisNav.parentElement.classList.remove("active");
      analysisSection.style.display = "none";
    }
    if (summaryNav.parentElement.classList.contains("active")) {
      summaryNav.parentElement.classList.remove("active");
      summaryList.style.display = "none";
    }
    if (settingsNav.parentElement.classList.contains("active")) {
      settingsNav.parentElement.classList.remove("active");
      settingsSection.style.display = "none";
    }
    if (watchNav.parentElement.classList.contains("active")) {
      watchNav.parentElement.classList.remove("active");
      watchSection.style.display = "none";
    }
    if (homeNav.parentElement.classList.contains("active")) {
      homeNav.parentElement.classList.remove("active");
      homeSection.style.display = "none";
    }
    if (planNav.parentElement.classList.contains("active")) {
      planNav.parentElement.classList.remove("active");
      planSection.style.display = "none";
    }


    //hide other thing and show postSection
    postSection.style.display = "block";
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    postList = document.getElementById("routesPosts");
    postList.style.display = "none";
    newRunButton.style.display = "none";

  });

  teamActivity.addEventListener("click", e => {
    e.preventDefault();

    if (!teamActivity.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);
      document.getElementById("dashPostsLoading").style.display = "block";
      teamActivity.parentElement.classList.add("active");
      postList = document.querySelector('.posts');
      if (typeof postList.style != "undefined")
        postList.style.display = "none";
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        postList = document.querySelector('.posts');
      }
      if (team.parentElement.classList.contains("active")) {
        postList = document.getElementById("teamMembers");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
        postList = document.querySelector('.posts');

      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      setupPosts(postsData, userID);
    }

  });


  team.addEventListener("click", e => {
    e.preventDefault();

    if (!team.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);
      if (typeof postList.style != "undefined")
        postList.style.display = "none";
      document.getElementById("dashPostsLoading").style.display = "block";
      team.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        postList = document.getElementsByClassName('posts');
        if (typeof postList[0].style != "undefined")
          postList[0].style.display = "none";
        teamActivity.parentElement.classList.remove("active");
        postList = document.getElementById("teamMembers");
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        postList = document.getElementById("teamMembers");
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
        postList = document.getElementById("teamMembers");

      }
      setupPosts(postsData, userID);
      document.getElementById("dashPostsLoading").style.display = "none";
      postList = document.getElementById("teamMembers");
      postList.style.display = "block";
    }

  });

  teamRoutes.addEventListener("click", e => {
    e.preventDefault();

    if (!teamRoutes.parentElement.classList.contains("active")) {
      if (typeof postList.style != "undefined")
        postList.style.display = "none";
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);

      teamRoutes.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        teamActivity.parentElement.classList.remove("active");
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      setupPosts(postsData, userID);
    }

  });

  summaryNav.addEventListener("click", e => {
    e.preventDefault();
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (!summaryNav.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);
      summaryNav.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        teamActivity.parentElement.classList.remove("active");
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      summaryList.style.display = "block";
      setupPosts(postsData, userID);
    }
  });

  analysisNav.addEventListener("click", e => {
    e.preventDefault();
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (!analysisNav.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);
      document.getElementById("dashPostsLoading").style.display = "block";
      analysisNav.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        teamActivity.parentElement.classList.remove("active");
        postList = document.getElementsByClassName("posts");
        postList[0].style.display = "none";
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      setupPosts(postsData, userID);


      analysisSection.style.opacity = "0";
      analysisSection.style.display = "block";
      setTimeout(function () {
        document.getElementById("dashPostsLoading").style.display = "none";
        analysisSection.style.opacity = "1.0";

      }, 500);


    }
  });


  settingsNav.addEventListener("click", e => {
    e.preventDefault();
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (!settingsNav.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);

      settingsNav.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        teamActivity.parentElement.classList.remove("active");
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      settingsSection.style.display = "block";
      setupPosts(postsData, userID);
    }
  });

  watchNav.addEventListener("click", e => {
    e.preventDefault();
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (!watchNav.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);

      watchNav.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        teamActivity.parentElement.classList.remove("active");
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      watchSection.style.display = "block";
      setupPosts(postsData, userID);
    }
  });

  planNav.addEventListener("click", e => {
    e.preventDefault();
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (!planNav.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      window.scrollTo(0, 0);

      planNav.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        teamActivity.parentElement.classList.remove("active");
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (homeNav.parentElement.classList.contains("active")) {
        homeNav.parentElement.classList.remove("active");
        homeSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      planSection.style.display = "block";
      setupPosts(postsData, userID);
    }
  });

  homeNav.addEventListener("click", e => {
    e.preventDefault();
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (!homeNav.parentElement.classList.contains("active")) {
      if (window.innerWidth < mobwidth) toggleNav();
      removeDisplayOfClass(".dashSections");
      window.scrollTo(0, 0);

      homeNav.parentElement.classList.add("active");
      if (teamActivity.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        teamActivity.parentElement.classList.remove("active");
      }
      if (team.parentElement.classList.contains("active")) {
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
        team.parentElement.classList.remove("active");
      }
      if (analysisNav.parentElement.classList.contains("active")) {
        analysisNav.parentElement.classList.remove("active");
        analysisSection.style.display = "none";
      }
      if (teamRoutes.parentElement.classList.contains("active")) {
        teamRoutes.parentElement.classList.remove("active");
        postList = document.getElementById("routesPosts");
        if (typeof postList.style != "undefined")
          postList.style.display = "none";
      }
      if (summaryNav.parentElement.classList.contains("active")) {
        summaryNav.parentElement.classList.remove("active");
        summaryList.style.display = "none";
      }
      if (settingsNav.parentElement.classList.contains("active")) {
        settingsNav.parentElement.classList.remove("active");
        settingsSection.style.display = "none";
      }
      if (watchNav.parentElement.classList.contains("active")) {
        watchNav.parentElement.classList.remove("active");
        watchSection.style.display = "none";
      }
      if (planNav.parentElement.classList.contains("active")) {
        planNav.parentElement.classList.remove("active");
        planSection.style.display = "none";
      }
      if (newRunButton.style.display == "none") {
        postSection.style.display = "none";
      }
      homeSection.style.display = "block";
      setupPosts(postsData, userID);
    }
  });

  editRunButton.addEventListener("click", () => {

    window.scrollTo(0, 0);
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    if (teamActivity.parentElement.classList.contains("active")) {
      if (typeof postList.style != "undefined")
        postList.style.display = "none";
      teamActivity.parentElement.classList.remove("active");
    }
    if (team.parentElement.classList.contains("active")) {
      if (typeof postList.style != "undefined")
        postList.style.display = "none";
      team.parentElement.classList.remove("active");
    }
    if (analysisNav.parentElement.classList.contains("active")) {
      analysisNav.parentElement.classList.remove("active");
      analysisSection.style.display = "none";
    }
    if (teamRoutes.parentElement.classList.contains("active")) {
      teamRoutes.parentElement.classList.remove("active");
      postList = document.getElementById("routesPosts");
      if (typeof postList.style != "undefined")
        postList.style.display = "none";
    }
    if (summaryNav.parentElement.classList.contains("active")) {
      summaryNav.parentElement.classList.remove("active");
      summaryList.style.display = "none";
    }
    if (settingsNav.parentElement.classList.contains("active")) {
      settingsNav.parentElement.classList.remove("active");
      settingsSection.style.display = "none";
    }
    if (watchNav.parentElement.classList.contains("active")) {
      watchNav.parentElement.classList.remove("active");
      watchSection.style.display = "none";
    }
    if (planNav.parentElement.classList.contains("active")) {
      planNav.parentElement.classList.remove("active");
      planSection.style.display = "none";
    }
    if (newRunButton.style.display == "none") {
      postSection.style.display = "none";
    }
    if (homeNav.parentElement.classList.contains("active")) {
      homeNav.parentElement.classList.remove("active");
      homeSection.style.display = "none";
    }

    setUpEditSection();

    postSection.style.display = "block";
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    postList.style.display = "none";
    newRunButton.style.display = "none";
    //setupPosts(postsData, userID);
  })







  if (usersData) {
    usersData.forEach(user => {
      if (user.id == userID.uid) {
        if (user.data().teamCode != "" || user.data().teamCode || editid == "") {
          newRunButton.style.display = "block";
        }
      }
    });

  }



}

setNavbarListeners();




function filterSearch(element) {
  var input, filter, ul, li, a, i, txtValue;
  input = element;
  filter = input.value.toUpperCase();
  var routeSearches = $(".routeSearch");
  for (var i = 0; i < routeSearches.length; i++) {
    if (routeSearches[i] == input)
      ul = $(".searchUl")[i];
  }
  li = ul.getElementsByClassName("searchItem");
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
$(document).on("keypress", 'form', function (e) {
  var code = e.keyCode || e.which;
  if (code == 13) {
    e.preventDefault();
    return false;
  }
});

var addHTML = `
      <div class = "addhtml" style = "margin-top: 30px">
        <div class="container">
          <div class="row" >
          <div class="btn-group addSegmentButtons" style = " width: 100%;display: flex; justify-content: center; align-items: center; text-align: center;" role="group" aria-label="">
            <button type="button" class="btn btn-secondary addRoute">Add Route</button>
            <button type="button" class="btn btn-secondary addCustomDistance">Add Custom Distance</button>
          </div>
            <div class = "noDistanceError error" style = "width: 100%">Please add at least one distance segment.</div>
          </div>
        </div>
      </div>`;
function setUpSegmentsForm() {
  segmentsForm.innerHTML = "";
  segmentsForm.innerHTML += addHTML;
  createForm.title.value = "";
  createForm.description.value = "";

}

var segmentsHTML = ``;


var formArr = [];
// formArr.push(
//   {
//     text: addHTML,
//     type: "addHTML"
//   });

var addRoute = document.querySelectorAll(".addRoute");
var addCustomDistance = document.querySelectorAll(".addCustomDistance");
var miles = document.querySelectorAll(".miles");
var meters = document.querySelectorAll(".meters");
var addHtmls = document.querySelectorAll(".addhtml");


setUpSegmentsForm();
addListeners();
function addListeners() {
  var segmenthtml;
  addRoute = document.querySelectorAll(".addRoute");
  addCustomDistance = document.querySelectorAll(".addCustomDistance");
  miles = document.querySelectorAll(".miles");
  meters = document.querySelectorAll(".meters");
  for (var i = 0; i < miles.length; i++) {
    miles[i].addEventListener("click", e => {
      e.preventDefault();
      miles = document.querySelectorAll(".miles");
      meters = document.querySelectorAll(".meters");
      for (var i = 0; i < miles.length; i++) {
        if (e.target == miles[i]) {
          e.target.classList.add("active");
          meters[i].classList.remove("active");
        }
      }
    });
  }

  for (var i = 0; i < meters.length; i++) {
    meters[i].addEventListener("click", e => {
      e.preventDefault();
      miles = document.querySelectorAll(".miles");
      meters = document.querySelectorAll(".meters");
      for (var i = 0; i < meters.length; i++) {
        if (e.target == meters[i]) {
          e.target.classList.add("active");
          miles[i].classList.remove("active");
        }
      }
    });
  }

  var removes = document.querySelectorAll(".remove");
  for (var i = 0; i < removes.length; i++) {
    button = removes[i];

    button.addEventListener("click", e => {
      e.preventDefault();
      var segments = document.querySelectorAll(".segment");
      var removeButtons = document.querySelectorAll(".remove");
      e.target.parentElement.parentElement.parentElement.style.display = "none";
      e.target.parentElement.parentElement.parentElement.innerHTML = "";
    });
  }


  addRoute[addRoute.length - 1].addEventListener("click", e => {
    e.preventDefault();
    //segmentsHTML = segmentsForm.innerHTML.substring(0,segmentsForm.innerHTML.indexOf("addhtml")-11 );
    segmenthtml = `
    <div class = "searchRouteDiv">
      <div class="container">
        <div class="row" style = "display: flex; justify-content: center; align-items: center; text-align: center;">
        <form id = "searchRouteForm" novalidate>
        <div style = "float: left;">
              <div class="dropdown">
              <label for="inp" class="inp" style = "width: 100%">
                <input onkeyup="filterSearch(this)" style = "float: left" autocomplete="off" class= "dropdown-toggle routeSearch"  data-toggle="dropdown" aria-haspopup="true" placeholder = "&nbsp;" aria-expanded="false"  type = "text">
                <span class="label">Search Route</span>
                <span class="focus-bg"></span>
                <div class="searchUl dropdown-menu searchBar scrollable-menu" role="menu" data-display="static" aria-labelledby="dropdownMenuButton" >
                </div>
              </label>




              </div>
            </div>
            <a style = "color: rgb(30, 144, 255); position: relative; cursor:pointer;  right: -20px; top: 8px; font-size: 30px;" class="remove">&#10006</a>

          </form>


        </div>
      </div>
    </div>
    `;
    segmentsForm.appendChild($.parseHTML(segmenthtml)[1]);
    segmentsForm.appendChild($.parseHTML(addHTML)[1]);
    // formArr.push(
    //   {
    //     text: segmenthtml,
    //     type: "searchRouteDiv"
    //   });
    //   formArr.push(
    //     {
    //       text: addHTML,
    //       type: "addHTML"
    //     });
    addHtmls = document.querySelectorAll(".addhtml");
    addHtmls[addHtmls.length - 2].style.display = "none";


    var searchUls = document.querySelectorAll(".searchUl");

    for (var i = 0; i < searchUls.length; i++) {
      var teamHtml = "";
      if (routesData.length == 0) {
        teamHtml = `<p style = "padding: 0 10px;">Your team has no routes</p>`
      }
      routesData.forEach(doc => {
        const post = doc.data();
        var a = ''
        if (post.name != null) {
          a = `
              <a class="dropdown-item searchItem" href="">${post.name} - ${post.distance}   mi</a>
            `;
        }
        teamHtml += a;

      });
      searchUls[i].innerHTML = teamHtml;
    }


    var searchRouteForm = document.querySelectorAll(".searchRouteForm");
    $(".searchRouteForm").on('keyup', function (e) {

      if (e.keyCode === 13) {

        updateFieldsWithRoute(searchRouteForm.routeSearch.value);
      }
    });
    var searchItems = document.querySelectorAll(".searchItem");
    for (var i = 0; i < searchItems.length; i++) {

      searchItems[i].addEventListener("click", e => {

        e.preventDefault();
        var searchbars = document.querySelectorAll(".searchBar");
        for (var i = 0; i < searchbars.length; i++) {
          if (e.target.parentElement == searchbars[i]) {
            var newSegment = updateFieldsWithRoute(e.target.innerHTML);
            var searchRouteDivs = document.querySelectorAll(".searchRouteDiv");
            searchRouteDivs[i].innerHTML = newSegment;
            searchRouteDivs[i].classList.remove("searchRouteDiv");
            miles = document.querySelectorAll(".miles");
            meters = document.querySelectorAll(".meters");
            for (var i = 0; i < miles.length; i++) {
              miles[i].addEventListener("click", e => {
                e.preventDefault();
                miles = document.querySelectorAll(".miles");
                meters = document.querySelectorAll(".meters");
                for (var i = 0; i < miles.length; i++) {
                  if (e.target == miles[i]) {
                    e.target.classList.add("active");
                    meters[i].classList.remove("active");
                  }
                }
              });
            }

            for (var i = 0; i < meters.length; i++) {
              meters[i].addEventListener("click", e => {
                e.preventDefault();
                miles = document.querySelectorAll(".miles");
                meters = document.querySelectorAll(".meters");
                for (var i = 0; i < meters.length; i++) {
                  if (e.target == meters[i]) {
                    e.target.classList.add("active");
                    miles[i].classList.remove("active");
                  }
                }
              });
            }


          }
        }
        var removes = document.querySelectorAll(".remove");
        for (var i = 0; i < removes.length; i++) {
          var button = removes[i];

          button.addEventListener("click", e => {
            e.preventDefault();
            var segments = document.querySelectorAll(".segment");
            var removeButtons = document.querySelectorAll(".remove");

            var inputs = e.target.parentElement.parentElement.parentElement.getElementsByTagName("input");

            for (var i = 0; i < inputs.length; i++) {
              inputs[i].value = "";
            }
            e.target.parentElement.parentElement.parentElement.style.display = "none";
            e.target.parentElement.parentElement.parentElement.innerHTML = "";

          });
        }
      });
    }

    addListeners();
  });



  addCustomDistance[addCustomDistance.length - 1].addEventListener("click", e => {
    e.preventDefault();
    //segmentsHTML = segmentsForm.innerHTML.substring(0,segmentsForm.innerHTML.indexOf("addhtml")-11 );
    segmenthtml = `
    <div class = "segment">
      <div class="container" style = "background: rgb(230,230,230); padding: 20px; ">
        <div class="row">
          <div class="col-sm-3" >
          <div class="row">

              <div class="col-sm" style = "padding: 0" >
              <label for="inpdark" class="inpdark" style = "width: 90%">
                <input autocomplete="off" value = "" class = "name" placeholder="&nbsp;" type = "text">
                <span class="labeldark">Segment Name</span>
                <span class="focus-bgdark"></span>
              </label>
              <div class = "segmentNameError error">Please enter a segment name</div>

              </div>
            </div>
          </div>
          <div class="col-sm-2" >
          <div class="row">

              <div class="col-sm" style = "padding: 0" >
              <label for="inpdark" class="inpdark" style = "width: 90%">
                <input autocomplete="off" value = "" class = "distance" placeholder="&nbsp;" min = "0" type = "number" step = "0.01">
                <span class="labeldark">Distance</span>
                <span class="focus-bgdark"></span>
              </label>
              <div class = "distanceError error">Invalid distance</div>

              </div>
            </div>
          </div>
          <div class="col-sm-2">
          <div class="btn-group milesMetersGroup" role="group" aria-label="" style = "height: 40px; margin-top: 10px; ">
            <button type="button" class="btn btn-secondary miles active">Miles</button>
            <button type="button" class="btn btn-secondary meters">Meters</button>
          </div>

          </div>
          <div class="col-sm-4">
          <div class="row">

              <div class="col-sm" style = "padding:0">

                <label for="inpdark" class="inpdark" style = "width: 90%">
                    <input autocomplete="off" class = "hours" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                  <span class="labeldark">Hours</span>
                  <span class="focus-bgdark"></span>
                </label>
              </div>
              <div class="col-sm" style = "padding:0">
              <label for="inpdark" class="inpdark" style = "width: 90%">
                  <input autocomplete="off" class = "minutes" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                <span class="labeldark">Minutes</span>
                <span class="focus-bgdark"></span>
              </label>
              </div>
              <div class="col-sm" style = "padding:0">
              <label for="inpdark" class="inpdark" style = "width: 90%">
                  <input autocomplete="off" class = "seconds" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                <span class="labeldark">Seconds</span>
                <span class="focus-bgdark"></span>
              </label>
              </div>
            </p>
            <div class = "runTimeError error" style = "width: 100%">Invalid Time</div>
          </div>
        </div>
        <div class="col-sm-1" style = "margin: auto 0; ">
            <a style = "color: rgb(30, 144, 255); position: relative; cursor:pointer;  top: -3px; font-size: 30px;" class="remove">&#10006</a>
        </div>
      </div>
    </div>
    </div>
    `
    segmentsForm.appendChild($.parseHTML(segmenthtml)[1]);
    segmentsForm.appendChild($.parseHTML(addHTML)[1]);
    addHtmls = document.querySelectorAll(".addhtml");
    addHtmls[addHtmls.length - 2].style.display = "none";
    addListeners();
  });

}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function updateFieldsWithRoute(nameOfRoute) {
  var segmentHTML = "";

  routesData.forEach(doc => {
    const post = doc.data();
    var li = ''
    if (post.name != null) {
      if (post.name == nameOfRoute.substring(0, nameOfRoute.indexOf(" - "))) {
        segmentHTML = `
          <div class = "segment">
            <div class="container" style = "background: rgb(230,230,230); padding: 20px; ">
              <div class="row">
                <div class="col-sm-3" >
                <div class="row">

                    <div class="col-sm" style = "padding: 0" >
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                      <input autocomplete="off" value = "${post.name}" class = "name" placeholder="&nbsp;" type = "text">
                      <span class="labeldark">Segment Name</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    <div class = "segmentNameError error">Please enter a segment name</div>

                    </div>
                  </div>
                </div>
                <div class="col-sm-2" >
                <div class="row">

                    <div class="col-sm" style = "padding: 0" >
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                      <input autocomplete="off" value = "${post.distance}" class = "distance" placeholder="&nbsp;" min = "0" type = "number" step = "0.01">
                      <span class="labeldark">Distance</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    <div class = "distanceError error">Invalid distance</div>

                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                <div class="btn-group milesMetersGroup" role="group" aria-label="" style = "height: 40px; margin-top: 10px; ">
                  <button type="button" class="btn btn-secondary miles active">Miles</button>
                  <button type="button" class="btn btn-secondary meters">Meters</button>
                </div>

                </div>
                <div class="col-sm-4">
                <div class="row">

                    <div class="col-sm" style = "padding:0">

                      <label for="inpdark" class="inpdark" style = "width: 90%">
                          <input autocomplete="off" class = "hours" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                        <span class="labeldark">Hours</span>
                        <span class="focus-bgdark"></span>
                      </label>
                    </div>
                    <div class="col-sm" style = "padding:0">
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                        <input autocomplete="off" class = "minutes" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                      <span class="labeldark">Minutes</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    </div>
                    <div class="col-sm" style = "padding:0">
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                        <input autocomplete="off" class = "seconds" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                      <span class="labeldark">Seconds</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    </div>
                  </p>
                  <div class = "runTimeError error" style = "width: 100%">Invalid Time</div>
                </div>
              </div>
              <div class="col-sm-1" style = "margin: auto 0; ">
                  <a style = "color: rgb(30, 144, 255); position: relative; cursor:pointer;  top: -3px; font-size: 30px;" class="remove">&#10006</a>
              </div>
            </div>
          </div>
          </div>
          `;


      }
    }
  });

  return segmentHTML;
}





// create new post

createForm.addEventListener("submit", e => {
  e.preventDefault();
  var isInvalid = false;
  var segmentsArr = [];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var names = document.querySelectorAll(".name");
  var distances = document.querySelectorAll(".distance");
  var miOrMs = document.querySelectorAll(".miles");
  var timeHrs = document.querySelectorAll(".hours");
  var timeMins = document.querySelectorAll(".minutes");
  var timeSecs = document.querySelectorAll(".seconds");
  var month = createForm.month.value;
  var day = createForm.day.value;
  var year = createForm.year.value;
  var minute;
  var hour;
  var time = createForm.time.value;
  var elevation = createForm.elevation.value;
  var am = document.getElementById("am");
  var pm = document.getElementById("pm");
  var ampm;
  if (am.classList.contains("active")) ampm = true;
  if (pm.classList.contains("active")) ampm = false;



  var errors = document.getElementsByClassName("error");
  var segmentNameError = document.getElementsByClassName("segmentNameError");
  var distanceError = document.getElementsByClassName("distanceError");
  var runTimeError = document.getElementsByClassName("runTimeError");
  var monthError = document.getElementsByClassName("monthError");
  var dateError = document.getElementsByClassName("dateError");
  var timeError = document.getElementsByClassName("timeError");
  var elevationError = document.getElementsByClassName("elevationError");
  var noDistanceError = document.getElementsByClassName("noDistanceError");
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }

  if (elevation < 0) {
    isInvalid = true;
    elevationError[0].style.display = "block";
    var elevationinput = document.getElementById("elevation");
    elevationinput.focus();
  }
  if (months.indexOf(month) === -1) {
    isInvalid = true;
    monthError[0].style.display = "block";
    var monthinput = document.getElementById("month");
    monthinput.focus();
  }

  if (months.indexOf(month) != -1) {
    var monthNum;
    var dayNum;
    if (months.indexOf(month) < 10) monthNum = "0" + (months.indexOf(month) + 1);
    else monthNum = months.indexOf(month) + 1;
    if (day < 10) dayNum = "0" + (day);
    else dayNum = day;
    var date = moment(year.trim() + "-" + monthNum + "-" + dayNum);
    if (!date.isValid() || (parseInt(year.trim(), 10) <= 2000 || parseInt(year.trim(), 10) > (new Date()).getFullYear())) {
      isInvalid = true;
      dateError[0].style.display = "block";
      var dayinput = document.getElementById("day");
      dayinput.focus();
    }
  }

  if (!moment(time.trim(), 'HH:mm', true).isValid() && !moment(time.trim(), 'H:mm', true).isValid()) {

    isInvalid = true;
    timeError[0].style.display = "block";
    var timeinput = document.getElementById("time");
    timeinput.focus();
  }
  else {
    var hhmm = moment(time.trim(), 'HH:mm', true);
    var hmm = moment(time.trim(), 'H:mm', true);
    if (hhmm.isValid()) {
      if (hhmm.hours() > 12 || hhmm.hours() <= 0) {
        isInvalid = true;
        timeError[0].style.display = "block";
        var timeinput = document.getElementById("time");
        timeinput.focus();
      }
      else {
        time = hhmm;
      }
    }
    else {
      if (hmm.hours() > 12 || hmm.hours() <= 0) {
        isInvalid = true;
        timeError[0].style.display = "block";
        var timeinput = document.getElementById("time");
        timeinput.focus();
      }
      else {
        time = hmm;
      }
    }
  }

  if (!distances.length) {
    isInvalid = true;
    noDistanceError[0].style.display = "block";
  }

  for (var i = 0; i < names.length; i++) {
    if (names[i].value == "") {
      isInvalid = true;
      segmentNameError[i].style.display = "block";
      names[i].focus();
    }
    if ((distances[i].value <= 0 || distances[i].value >= 100000) || !distances[i].value || distances[i].value.toString().length > 6) {
      isInvalid = true;
      distanceError[i].style.display = "block";
      distances[i].focus();
    }


    var hrs = parseInt(timeHrs[i].value, 10);
    var mins = parseInt(timeMins[i].value, 10);
    var secs = parseInt(timeSecs[i].value, 10);
    console.log((hrs < 0 || hrs >= 24), hrs == 0 && hrs == "", hrs != 0 && !Number.isInteger(hrs));
    if ((hrs < 0 || hrs >= 24) || (hrs != 0 && (typeof hrs == "undefined")) || (hrs != 0 && !Number.isInteger(hrs))) {
      isInvalid = true;
      runTimeError[i].style.display = "block";
      timeHrs[i].focus();
    }

    if ((mins < 0 || mins >= 60) || (mins != 0 && (typeof mins == "undefined")) || (mins != 0 && !Number.isInteger(mins))) {
      isInvalid = true;
      runTimeError[i].style.display = "block";
      timeMins[i].focus();
    }

    if ((secs < 0 || secs >= 60) || (secs != 0 && (typeof secs == "undefined")) || (secs != 0 && !Number.isInteger(secs))) {
      isInvalid = true;
      runTimeError[i].style.display = "block";
      timeSecs[i].focus();
    }



    var segment = {
      name: names[i].value,
      distance: distances[i].value,
      miles: (miOrMs[i].classList.contains("active")),
      hours: hrs,
      mins: mins,
      secs: secs
    };
    segmentsArr.push(segment);
  }

  if (!isInvalid) {
    var totalDist = 0;
    var totalTime = 0;
    var totalHours = 0;
    var totalMinutes = 0;
    var totalSeconds = 0;
    segmentsArr.forEach(segment => {
      if (segment.distance != 0) {
        if (!segment.miles) {
          totalDist += parseFloat(segment.distance) * 0.000621371;
        }
        else {
          totalDist += parseFloat(segment.distance);
        }
        totalTime += segment.hours * 3600;
        totalTime += segment.mins * 60;
        totalTime += segment.secs;
        totalHours = Math.trunc(totalTime / 3600);
        totalMinutes = Math.trunc((totalTime % 3600) / 60);
        totalSeconds = (totalTime % 3600) % 60;
      }

    });
    date = new Date(year, months.indexOf(month), day, time.hours(), time.minutes());

    if (editid == "") {
      db.collection('users').doc(userID.uid).get().then(doc => {
        db.collection("posts")
          .add({
            description: createForm.description.value,
            segments: segmentsArr,
            first: doc.data().first,
            last: doc.data().last,
            teamCode: doc.data().teamCode,
            pfp: doc.data().pfp,
            userid: userID.uid,
            month: month,
            day: day,
            year: year,
            hour: time.hours(),
            minute: time.minutes(),
            ampm: ampm,
            date: date,
            totalDistance: totalDist,
            totalTime: totalTime,
            totalHours: totalHours,
            totalMinutes: totalMinutes,
            totalSeconds: totalSeconds,
            elevation: elevation
          })
          .then(() => {
            //createForm.reset();
            //setUpSegmentsForm();
            //addListeners();

            window.location.href = window.location.href;
          })
          .catch(err => {
            console.log(err.message);
          });
      });

    }
    else {
      db.collection('users').doc(userID.uid).get().then(doc => {
        db.collection("posts").doc(editid)
          .update({
            description: createForm.description.value,
            segments: segmentsArr,
            first: doc.data().first,
            last: doc.data().last,
            teamCode: doc.data().teamCode,
            pfp: doc.data().pfp,
            userid: userID.uid,
            month: month,
            day: day,
            year: year,
            hour: time.hours(),
            minute: time.minutes(),
            ampm: ampm,
            date: date,
            totalDistance: totalDist,
            totalTime: totalTime,
            totalHours: totalHours,
            totalMinutes: totalMinutes,
            totalSeconds: totalSeconds,
            elevation: elevation
          })
          .then(() => {
            editid = "";

            //createForm.reset();
            //setUpSegmentsForm();
            //addListeners();

            window.location.href = window.location.href;
          })
          .catch(err => {
            console.log(err.message);
          });
      });


    }


  }
});

if (teamRoutes.parentElement.classList.contains("active")) {

}

//give option to post for employers
const postsGreeting = document.querySelector("#postsGreeting");
function setUpPostForm() {
  if (userID) {
    db.collection('users').doc(userID.uid).get().then(userDoc => {
      postSection.style.display = "none";
      //postsGreeting.innerHTML = "<h1>Posts:</h1>";
    });
  }
}


// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge Sort Implentation (Recursion)
function mergeSortAlpha(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return mergeAlpha(
    mergeSortAlpha(left), mergeSortAlpha(right)
  );
}

// Merge Sort Implentation (Recursion)
function mergeSortDist(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return mergeDist(
    mergeSortDist(left), mergeSortDist(right)
  );
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].data().date > right[rightIndex].data().date) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Merge the two arrays: left and right
function mergeAlpha(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if ((left[leftIndex].data().first + left[leftIndex].data().last).localeCompare(right[rightIndex].data().first + right[rightIndex].data().last) == -1) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Merge the two arrays: left and right
function mergeDist(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (Number.parseFloat(left[leftIndex].data().distance) < Number.parseFloat(right[rightIndex].data().distance)) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// //determine if a date is valid
// Date.prototype.isValid = function () {
//
//             // If the date object is invalid it
//             // will return 'NaN' on getTime()
//             // and NaN is never equal to itself.
//             return this.getTime() === this.getTime();
//         };

//delete post
function Delete(currentEl) {
  console.log(currentEl);
  document.querySelectorAll(".posts")[0].style.display = "none";
  document.querySelector("#dashPostsLoading").style.display = "block";
  postsData.forEach(doc => {
    if (homeNav.classList.contains("active") && doc.id === currentEl.id) {
      db.collection('posts').doc(doc.id).delete().then(function () {
        console.log("done");
        currentEl.parentElement.parentElement.parentElement.style.display = "none";
        document.querySelector("#dashPostsLoading").style.display = "none";
        if (homeNav.classList.contains("active")) {
          document.querySelector("#homeSection").style.display = "block";
        }
        else {
          console.log("hi");
          document.querySelectorAll(".posts")[0].style.display = "block";

          setupPosts(postsData, userID);
        }
      });
    }
    else if (doc.id === currentEl.id) {
      db.collection('posts').doc(doc.id).delete().then(function () {
        console.log("done");
        currentEl.parentElement.parentElement.parentElement.style.display = "none";
        document.querySelector("#dashPostsLoading").style.display = "none";
        if (homeNav.classList.contains("active")) {
          document.querySelector("#homeSection").style.display = "block";
        }
        else {
          console.log("hi");
          document.querySelectorAll(".posts")[0].style.display = "block";

          setupPosts(postsData, userID);
        }
      });
    }

  })
}

var editid = "";

//delete post
function Edit(currentEl) {


  editid = currentEl.id;
  console.log(editid);
  editRunButton.click();
}

//delete route
function DeleteRoute(currentEl) {
  routesData.forEach(doc => {
    if (doc.id === currentEl.parentElement.parentElement.parentElement.id) {
      db.collection('routes').doc(doc.id).delete().then(function () {
        currentEl.parentElement.parentElement.parentElement.style.display = "none";
      });
    }
  });
}

Number.prototype.toFixedDown = function (digits) {
  var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = this.toString().match(re);
  return m ? parseFloat(m[1]) : this.valueOf();
};

//hover effect for postItems
$(".postItem").hover(function () {
  this.toggleClass("curSelected");
});

// setup posts
const setupPosts = (data, user) => {
  postsData = data;

  //if(userTeamCode == "");
  //$("#sidebar-wrapper").css("display", "none");
  if (curUser == null) {


    db.collection('users').doc(userID.uid).get().then(thisUser => {

      curUser = thisUser;

      handleInitialLoad();

    });

  }
  else {
    handleInitialLoad();
  }

};

var postsByDate = [];

function setPosts() {





  postList.innerHTML = "";


  var newRunButton = document.getElementById("newRunButton");
  var pfpN = document.getElementById("pfpNav");
  newRunButton.style.display = "block";
  pfpN.style.display = "inline-block";


  if (curUser.data().awaitingConnection == true) {
    curUser.ref.update({
      awaitingConnection: false
    })
  }



  if (curUser.data().isAdmin) {
    summaryNav.style.display = "block";

  }
  else {
    summaryNav.style.display = "none";
    summaryList.style.display = "none";
  }
  if (postsData.length) {

    if (homeNav.parentElement.classList.contains("active")) {
      homeSection.style.display = "block";

      postList = document.querySelectorAll('.posts')[0];
      postList.style.display = "none";
      postList.innerHTML = "";

      homeSection.innerHTML = "";


      var sectionHtml = "";

      if (curUser.data().isAdmin) {
        sectionHtml += `
      <div class = "dashSections row" style = "margin-right: 0 !important">
      <div class = "col-sm-6">
			<div class = "titleDiv"><h1 class = "mainTitle">${curUser.data().teamName}</h1>
															<h5 class = "" style = "font-weight: bold">Team Code: ${
          curUser.data().teamCode
          }</h5>
			</div>
			`;
      }
      else {
        sectionHtml += `
       <div class = "dashSections row" style = "margin-right: 0 !important">
      <div class = "col-sm-6">
			<div class = "titleDiv"><h1 class = "mainTitle">${curUser.data().teamName}</h1>

			</div>
			`;
      }



      //array of pfps
      var postPfps = [];

      //sort postsData by date
      postsData = mergeSort(postsData);

      //postsByDate contains objects of dates and corresponding posts
      postsByDate = getPostsByDate("both");


      //loop through dates
      var today = new Date();
      var todaysPosts = "";
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      for (var i = 0; i < postsByDate.length; i++) {
        if (postsByDate[i].day == today.getDate() && postsByDate[i].month == months[today.getMonth()] && postsByDate[i].year == today.getFullYear()) {
          todaysPosts = postsByDate[i];
        }
      }


      var planDay = new Date();
      var thisDate = planDay.getDate();
      var thisMonth = months[planDay.getMonth()];
      var thisYear = planDay.getFullYear();
      var date = thisDate + thisMonth + thisYear;

      var todayPlan = "";

      teamsData.forEach(team => {
        if (team.data().teamCode == curUser.data().teamCode) {
          if (team.data().plans) {
            team.data().plans.forEach((plan, i) => {
              if (team.data().plans[i].date == date) {
                todayPlan = team.data().plans[i].text;
              }
            });
          }

        }
      });

      if (todayPlan == "") {
        todayPlan = `<p style = "font-size: 20px;">No plan has been given for today</p>`;
      }




      //add date to postsList and divs
      var homeSectionHtml =
        sectionHtml +
        `
        <div id = "todaysActivities"class = "dateSection" style = "  margin-bottom: 50px;">
				<h1 class = "dateTitle">  Today's Activities</h1>
				<div class = "row" >

					<div id = "${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}selected" class = "col-sm-12 selectedRun" style = "">
					</div>
					<div class = "col-sm-12 activities" style = "display: none">
          </div>
          <a onclick = "teamactivity.click()" style = "color: rgb(30, 144, 255); padding-left: 15px; cursor: pointer; font-size: 18px;">View Activities <i class = "fa fa-chevron-right" style = "font-size: 16px;"></i></a>

				</div>
        </div>
        </div>
       

        <div class = "col-sm-6" style = "">
          <div style = "width: 95%;">
				  <div id = "thisWeek" class = "dateSection" style = "margin-bottom: 25px; background: linear-gradient(162deg, rgba(30,144,255,1) 0%, rgba(0,57,157,1) 100%);
">`
      if (curUser.data().isAdmin) homeSectionHtml += `<h1 style = "font-weight: bold; color: white; ">Week Totals</h1>`;
      else homeSectionHtml += `<h1 style = "font-weight: bold; color: white; ">Your Week</h1>`;


      homeSectionHtml += `<canvas id = "weekGraph"></canvas>
          <p id = "weekMessage"></p>
          <a onclick = "analysisNav.click()" style = "color: white; cursor: pointer; font-size: 18px;">View Analysis <i class = "fa fa-chevron-right" style = "font-size: 16px;"></i></a>
				</div>
					<div id = "todaysPlan" class = "dateSection" style = "">
						<h1 style = "font-weight: bold">Today's Plan</h1>
            <p class = "todayPlan" style = "white-space: pre-wrap;">${todayPlan}</p>
            <a onclick = "planNav.click()" style = "color: rgb(30, 144, 255); cursor: pointer; font-size: 18px;">View Team Plan <i class = "fa fa-chevron-right" style = "font-size: 16px;"></i></a>

					</div>
        </div>
				</div>


				




				</div>

          `;

      homeSection.innerHTML += homeSectionHtml;
      toggleOpacity(".dashSections", ".dateSection", "flex");

      if (todaysPosts != "") {
        var activites = document.querySelectorAll(".activities");
        activites[0].style.display = "block";


        todaysPosts.posts = mergeSortAlpha(todaysPosts.posts);
        //add posts of date to activities section
        for (var j = 0; j < todaysPosts.posts.length; j++) {

          const post = todaysPosts.posts[j].data();
          var li = ``





          if (post.userid != null) {
            var totalDist = 0;
            var totalTime = 0;
            var totalHours = 0;
            var totalMinutes = 0;
            var totalSeconds = 0;
            post.segments.forEach(segment => {
              if (segment.distance != 0) {
                if (!segment.miles) {
                  totalDist += parseFloat(segment.distance) * 0.000621371;
                }
                else {
                  totalDist += parseFloat(segment.distance);
                }
                totalTime += segment.hours * 3600;
                totalTime += segment.mins * 60;
                totalTime += segment.secs;
                totalHours = Math.trunc(totalTime / 3600);
                totalMinutes = Math.trunc((totalTime % 3600) / 60);
                totalSeconds = (totalTime % 3600) % 60;
              }

            });


            var postPfpUrl;
            usersData.forEach(user => {
              if (user.id == post.userid) {
                postPfpUrl = user.data().pfp;
              }
            });

            li = `
						<a id = "${todaysPosts.posts[j].id}" class = "runPost ${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}" style = "cursor: pointer">
						<li class = "postItem"  id = "${post.userid}" >`;


            li += `
								<img  class = "postPfp topPfp" src = "${postPfpUrl}" width = "40px" height = "40px" style = "border-radius:50%; margin-top: 5px;">
								<div  class="postTitle topName" style = "font-size: 14px">  ${post.first} <br>${post.last} <br> </div>
								<div ></div>
								<div class = "postName"></div>
                <div id = "${todaysPosts.posts[j].id}" class = "postDetails" style = "display: none">`;
            if (curUser.id == post.userid || curUser.data().isAdmin || curUser.data().isMod) {
              li += `<div style = "position:relative; width: 100%; height:inherit;"><button  id = "${todaysPosts.posts[j].id}" class = "editPost" style = "margin-right: 30px; padding: 10px;"><i  id = "${todaysPosts.posts[j].id}" class="fas fa-pen fa-xs"></i></button><button id = "${todaysPosts.posts[j].id}" class = "removePost" style = "padding: 10px;"><i id = "${todaysPosts.posts[j].id}" class="far fa-trash-alt fa-sm"></i></button></div>`;
            }

            li += `
								<table class = "postTable" style = "border-collapse: collapse; width: 100%; z-index: 1">
								<tr >
										<th colspan = "4" class = "topRow noBorder"><img class = "postPfp" src = "${postPfpUrl}" width = "40px" height = "40px" style = "border-radius:50%; margin-top: 5px;">
										<div class="postTitle" style = "font-size: 24px; color: white;">  <span class = "postNameSpan" style = "line-height: 45px;">${post.first} ${post.last}</span> </div></th>
								</tr>
								<tr >
									<th class = "noBorder">Name</th>
									<th class = "noBorder">Distance</th>
									<th class = "noBorder">Time</th>
									<th class = "noBorder">Pace</th>
								</tr>
								`;

            post.segments.forEach(segment => {
              if (segment.distance != 0) {
                var unit = "mi";
                if (!segment.miles) {
                  unit = "m"
                }

                var time = 0;
                time += segment.hours * 3600;
                time += segment.mins * 60;
                time += segment.secs;
                segment.hours = Math.trunc(time / 3600);
                segment.mins = Math.trunc((time % 3600) / 60);
                segment.secs = (time % 3600) % 60;

                var timeString = getTimeStr(segment.hours, segment.mins, segment.secs);


                var hour = 0;
                var minute = 0;
                var second = 0;
                time = 0;
                var distance = 0;
                var pace;
                var minpace;
                var secpace;

                if (segment.distance != 0) {

                  if (!segment.miles) {
                    distance = parseFloat(segment.distance) * 0.000621371;
                  }
                  else {
                    distance = parseFloat(segment.distance);
                  }
                  time += segment.hours * 3600;
                  time += segment.mins * 60;
                  time += segment.secs;

                  pace = time / distance;
                  minpace = Math.trunc(pace / 60);
                  secpace = Math.trunc(pace % 60);
                  if (secpace < 10)
                    secpace = "0" + secpace;
                }



                li += `
								<tr>
									<td class = "noBorder">${segment.name}</td>
									<td class = "noBorder">${segment.distance} ${unit}</td>
									<td class = "noBorder">${timeString}</td>
									<td class = "noBorder">${minpace}:${secpace}</td>
								</tr>

								`

              }
            });

            var timeString = getTimeStr(totalHours, totalMinutes, totalSeconds);

            var totalpace;
            var totalminpace;
            var totalsecpace;

            totalpace = totalTime / totalDist;
            totalminpace = Math.trunc(totalpace / 60);
            totalsecpace = Math.trunc(totalpace % 60);
            if (totalsecpace < 10)
              totalsecpace = "0" + totalsecpace;

            li += `
								<tr>
									<td class = "noBorder"><b>Total:</b></td>
									<td class = "noBorder"><b>${totalDist.toFixedDown(2)} mi</b></td>
									<td class = "noBorder"><b>${timeString}</b></td>
									<td class = "noBorder"><b>${totalminpace}:${totalsecpace}</b></td>
								</tr>
								</table>
								`;
            if ('elevation' in post && post.elevation) {
              li += `
									<div class="" style = "padding-top: 10px; padding-left: 15px;">Elevation Gain: ${post.elevation} ft</div>
								`
            }
            if (post.description.length) {
              li += `<div class="" style = "padding-top: 10px; padding-left: 15px;">Notes: ${post.description} </div>
							</li>
							</a>
						`;
            }

          }
          var activites = document.querySelectorAll(".activities");
          activites[0].innerHTML += li;

        }

        //var activites = document.querySelectorAll(".activities");

        //selected[i].innerHTML = postsByDate[i].posts[0]


        // = document.querySelectorAll(".postItem")[0].innerHTML;
        //document.querySelectorAll(".postDetails")[0].style.display = "block";




        var runPosts = document.querySelectorAll(".runPost");


        for (var k = 0; k < runPosts.length; k++) {
          if (runPosts[k].classList.contains(`${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}`)) {
            var selected = document.querySelectorAll(".selected");
            var runPosts = document.querySelectorAll(".runPost");
            var postItems = document.querySelectorAll(".postItem");
            var topPfps = document.querySelectorAll(".topPfp");
            var topNames = document.querySelectorAll(".topName");
            var postDetails = document.querySelectorAll(".postDetails");
            postDetails[k].style.display = "block";
            topPfps[k].style.display = "none";
            topNames[k].style.display = "none";
            var postTitles = postItems[k].querySelectorAll(".postTitle");
            var org = postTitles[0];
            org.style.fontSize = "20px";

            document.querySelector(`#${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}selected`).innerHTML = postItems[k].innerHTML;
            // if($(`#${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}selected`).find('i').length > 0)
            // 	$(`#${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}selected`).find('i')[0].remove();
            document.querySelector(`#${todaysPosts.month}${todaysPosts.day}${todaysPosts.year}selected`).style.borderLeft = "none";
            //document.querySelector(`#${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}selected`).style.borderTop = "10px solid rgb(30, 144, 255)";

            postItems[k].classList.add("curSelected");
            org.style.fontSize = "14px";
            postDetails[k].style.display = "none";
            topPfps[k].style.display = "block";
            topNames[k].style.display = "block";
            break;
          }
        }








        //document.querySelectorAll(".posts")[0].style.display = "block";

        addPostListeners();


        function addPostListeners() {
          var removePostButtons = document.querySelectorAll(".removePost");
          for (var i = 0; i < removePostButtons.length; i++) {
            removePostButtons[i].addEventListener("click", function (e) {
              console.log(e.target);
              e.preventDefault();
              Delete(e.target);

            });
          }

          var editPostButtons = document.querySelectorAll(".editPost");
          for (var i = 0; i < editPostButtons.length; i++) {
            editPostButtons[i].addEventListener("click", function (e) {
              console.log(e.target);
              e.preventDefault();
              Edit(e.target);

            });
          }
        }

        //click listeners to change selected post
        var runPosts = document.querySelectorAll('.runPost');




        for (var i = 0; i < runPosts.length; i++) {
          runPosts[i].addEventListener("click", function (e) {
            e.preventDefault();

            if (this.children[0].classList.length == 1) {

              for (var i = 0; i < runPosts.length; i++) {
                console.log(this.classList[1]);
                if (runPosts[i].classList.contains(this.classList[1])) {
                  if (runPosts[i].children[0].classList.contains("curSelected"))
                    runPosts[i].children[0].classList.remove("curSelected")
                  var selectedRuns = document.querySelectorAll('.selectedRun');
                  for (var j = 0; j < selectedRuns.length; j++) {
                    if (selectedRuns[j].id == (this.classList[1] + "selected")) {
                      var postDetails = this.querySelectorAll(".postDetails");
                      var postTitles = this.querySelectorAll(".postTitle");
                      var topPfps = this.querySelectorAll(".topPfp");
                      var org = postDetails[0];
                      var org2 = postTitles[0];
                      var org3 = topPfps[0];

                      org2.style.display = "none";
                      org3.style.display = "none";

                      org.style.display = "block";

                      selectedRuns[j].innerHTML = this.children[0].innerHTML;
                      //if($(selectedRuns[j]).find('i').length > 0)
                      //	$(selectedRuns[j]).find('i')[0].remove();
                      org.style.display = "none";
                      org2.style.display = "block";
                      org3.style.display = "block";
                      this.children[0].classList.add("curSelected");

                      addPostListeners();

                      break;
                    }
                  }
                }
              }
            }

            // for (var i = 0; i < postItems.length; i++) {
            //   if(postItems[i].classList.contains("curSelected"))
            //
            // }
            // postItems[i].classList.add("curSelected");
          });

        }
      }
      else {
        var activites = document.querySelectorAll(".activities");
        activites[0].innerHTML += `<p style = "font-size: 20px">No one has posted today</p>`;
        activites[0].style.display = "block";

        var selectedRun = document.getElementsByClassName('selectedRun');
        selectedRun[0].style.display = "none";
      }

      var weekData = [];
      if (!curUser.data().isAdmin) {


        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var usersPosts = [];
        postsData.forEach(post => {
          if (post.data().userid == curUser.id) {
            usersPosts.push(post);


          }
        });

        var today = new Date();
        today.setDate(today.getDate() - (today.getDay()));
        for (var i = 0; i < 7; i++) {
          var thisDaysMileage = 0;

          usersPosts.forEach((post, j) => {
            console.log(today.getDate(), post.data().day)
            if (today.getDate() == parseInt(post.data().day) && today.getMonth() == months.indexOf(post.data().month) && today.getFullYear() == parseInt(post.data().year)) {
              thisDaysMileage += post.data().totalDistance;
            }
          });

          weekData.push(thisDaysMileage.toFixedDown(2));

          today.setDate(today.getDate() + 1);

        }
      }
      else {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var today = new Date();
        today.setDate(today.getDate() - (today.getDay()));
        for (var i = 0; i < 7; i++) {
          var thisDaysMileage = 0;

          postsData.forEach((post, j) => {
            console.log(today.getDate(), post.data().day)
            if (today.getDate() == parseInt(post.data().day) && today.getMonth() == months.indexOf(post.data().month) && today.getFullYear() == parseInt(post.data().year)) {
              thisDaysMileage += post.data().totalDistance;
            }
          });

          weekData.push(thisDaysMileage.toFixedDown(2));

          today.setDate(today.getDate() + 1);

        }
      }

      var noData = true;
      for (var i = 0; i < weekData.length; i++) {
        if (weekData[i] != 0) {
          noData = false;
        }
      }
      if (!noData) {
        var ctx = document.getElementById('weekGraph').getContext('2d');
        try {
          weekchart.destroy();
        } catch (e) {

        }
        weekchart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'bar',

          // The data for our dataset
          data: {

            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
              lineTension: 0,
              borderColor: 'white',
              data: weekData,
              pointRadius: 5,
              backgroundColor: "white",
              strokeColor: "white",

              pointHoverRadius: 7,
              pointBackgroundColor: 'rgb(30, 144, 255)',
              scaleFontColor: "#FFFFFF",
            }]
          },


          // Configuration options go here
          options:
          {

            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontColor: "white"
                },
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                ticks: {
                  fontColor: "white",
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }]
            }


          }
        });
      }
      else {
        var weekGraph = document.getElementById('weekGraph');
        weekGraph.style.display = "none";
        weekGraph = document.getElementById('weekMessage');
        weekGraph.innerHTML = `<span style = "font-size: 20px; color: white"> You haven't posted this week</span>`;
      }

    }







    let teamHtml = '';
    if (teamActivity.parentElement.classList.contains("active")) {
      homeSection.innerHTML = "";



      //array of pfps
      var postPfps = [];

      //sort postsData by date
      postsData = mergeSort(postsData);

      //postsByDate contains objects of dates and corresponding posts
      postsByDate = getPostsByDate("both");


      postList.innerHTML += `<div class = "titleDiv"><h1 class = "mainTitle">Activities</h1>

                              </div>`;

      var todaysDate = new Date();
      todaysDate = todaysDate.getMonth() + 1 + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();



      postList.innerHTML += `<div class = "dateSection" style = "margin-bottom: 25px; padding-bottom: 25px; ">
																<div class = "row">

																	<div class = "col-sm-2">
																		<h1 class = "dateTitle">Filter</h1>
																	</div>
																	<div class = "col-sm" style = "display: flex; align-items: center">

																	<form id = "filterform"  style = "width: 100%;"novalidate>
																		<div class = "row">
																			<div class = "col-sm">
																				<p>Date: </p>
																				<label for="inp" class="inp">
                                            <input type="text" id="startDate" placeholder="&nbsp;" autocomplete="off" style = "height: 45px; padding: 8px;">
												                  <span class="focus-bg"></span>
												                </label>

																				<a id = "selectStart"></a>
                                      </div>
                                      <div class = "col-sm">
																				<p>Gender: </p>
                                        <div class="btn-group" id = "genderGroup" role="group" aria-label="" style = "height: 45px; ">
                                            <button type="button" class="btn btn-secondary gender buttongroup both active">Both</button>
                                            <button type="button" class="btn btn-secondary gender buttongroup male">Male</button>
                                            <button type="button" class="btn btn-secondary gender buttongroup female">Female</button>

                                         </div>
												                  
												                </label>

																				<a id = "selectStart"></a>
																			</div>
																			<div class = "col-sm">
																				<button type = "submit" id = "filterSubmit" class = "formButton" style = "margin-top: 40px"><i class="fas fa-arrow-right"></i></button>
																			</div>

																		</div>
																	</form>
																	</div>
																</div>
															</div>
															<div id= "activities"></div>`;

      addGenderGroupListeners();

      setTimeout(function () {
        $("#startDate").datetimepicker({
          viewMode: 'days',
          format: 'MM/DD/YYYY',
          icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-check',
            clear: 'fa fa-trash',
            close: 'fa fa-times'
          }

        });

        var activities = document.getElementById("activities");


        document.getElementById("filterform").addEventListener("submit", function (e) {
          e.preventDefault();

          var genderName;

          var genders = document.getElementsByClassName("gender");

          for (var i = 0; i < genders.length; i++) {
            if (genders[i].classList.contains("active")) genderName = genders[i].innerHTML.toLowerCase();
          }

          var startDate;

          if ($("#startDate").data("DateTimePicker").date() == null) {
            startDate = new Date();
          }
          else
            startDate = $("#startDate").data("DateTimePicker").date()._d;

          //sort postsData by date
          postsData = mergeSort(postsData);

          //postsByDate contains objects of dates and corresponding posts
          postsByDate = getPostsByDate(genderName);

          console.log(postsByDate);


          setActivities(activities, curUser, postsByDate, startDate, true, 3, 3);
        });

        setActivities(activities, curUser, postsByDate, new Date(), true, 3, 3);
      }, 100);
      toggleOpacity(".posts", ".dateSection", "block");














      // postList.innerHTML += `
      //   <div class = "row">
      //
      //     <div id = "selected" class = "col-sm-4 " style = "">
      //     </div>
      //     <div class = "col-sm-8 activities" style = "">
      //     </div>
      //   </div>
      //     `
      //
      // postsData.forEach(doc => {
      //     const post = doc.data();
      //     var li = ``
      //     if(post.userid != null)
      //     {
      //         var totalDist = 0;
      //         var totalTime = 0;
      //         var totalHours = 0;
      //         var totalMinutes = 0;
      //         var totalSeconds = 0;
      //         post.segments.forEach(segment => {
      //           if(!segment.miles)
      //           {
      //             totalDist += parseFloat(segment.distance)*0.000621371;
      //           }
      //           else {
      //             totalDist += parseFloat(segment.distance);
      //           }
      //           totalTime += segment.hours*3600;
      //           totalTime += segment.mins*60;
      //           totalTime += segment.secs;
      //           totalHours = Math.trunc(totalTime/3600);
      //           totalMinutes = Math.trunc((totalTime%3600)/60);
      //           totalSeconds = (totalTime%3600)%60;
      //         });
      //     li = `
      //       <div class = "runPost">
      //       <li class = "postItem"  id = "${post.userid}" >
      //           <img class = "postPfp" src = "./images/blankpfp.png" width = "40px" height = "40px" style = "border-radius:50%; margin-top: 5px;">
      //           <div class="postTitle" style = "">  ${post.first} ${post.last} <br> <span class = "userInfo">${post.gradYear}</span></div>
      //           <div ></div>
      //           <div class = "postName"></div>
      //           <div class = "postDetails" style = "display: none">
      //           <h5 style = "margin-top: 10px">Segments:</h5>
      //           <table>
      //           <tr>
      //               <th></th>
      //               <th>Name</th>
      //               <th>Distance</th>
      //               <th>Time</th>
      //               <th>Pace</th>
      //           </tr>
      //           `;
      //
      //     post.segments.forEach(segment => {
      //
      //         var unit = "miles";
      //         if(!segment.miles)
      //         {
      //           unit = "meters"
      //         }
      //
      //         li+= `
      //         <tr>
      //           <td></td>
      //           <td>${segment.name}</td>
      //           <td>${segment.distance} ${unit}</td>
      //           <td>${segment.hours} : ${segment.mins} : ${segment.secs}</td>
      //         </tr>
      //
      //         `
      //     });
      //       li +=`
      //           <tr>
      //             <td><b>Total:</b></td>
      //             <td></td>
      //             <td><b>${totalDist.toFixedDown(2)} miles</b></td>
      //             <td><b>${totalHours} : ${totalMinutes} : ${totalSeconds}</b></td>
      //           </tr>
      //           </table>
      //           <div class="">Notes: ${post.description} </div>
      //       </li>
      //       </div>
      //     `;
      //     }
      //
      //     teamHtml += li;
      //
      //   });
      //   document.querySelectorAll(".activities")[0].innerHTML += teamHtml;


      //console.log()
    }




    summaryNav = document.getElementById("summaryNav");

    if (summaryNav.parentElement.classList.contains("active")) {
      //array of pfps
      var postPfps = [];

      var dataOfTeam = [];
      usersData.forEach(doc => {
        if (doc.data().teamCode == userTeamCode) {
          dataOfTeam.push(doc);
        }
      });
      dataOfTeam = mergeSortAlpha(dataOfTeam);


      // dataOfTeam.forEach(doc => {
      //     firebase.storage().ref(doc.id + "/pfp").getDownloadURL().then(function(url) {
      //       // `url` is the download URL for 'images/stars.jpg'
      //
      //       // This can be downloaded directly:
      //       var xhr = new XMLHttpRequest();
      //       xhr.responseType = 'blob';
      //       xhr.onload = function(event) {
      //         var blob = xhr.response;
      //       };
      //       xhr.open('GET', url);
      //       xhr.send();
      //
      //       // Or inserted into an <img> element:
      //         postPfps.push(url);
      //
      //
      //
      //     }).catch(function(error) {
      //       if(error.code ==  'storage/object-not-found'){
      //         postPfps.push("./images/blankpfp.png");
      //
      //       }
      //       if(error.code ==  'storage/unauthorized'){
      //         // User doesn't have permission to access the object
      //
      //       }
      //       if(error.code ==  'storage/canceled'){
      //         // User canceled the upload
      //
      //       }
      //       if(error.code ==  'storage/unknown'){
      //           // Unknown error occurrgb(30, 144, 255), inspect the server response
      //
      //       }
      //     });
      //
      //
      // });
      //
      // //wait until all the pfps are in postPfps
      // wait();
      // function wait(){
      //   if (postPfps.length != dataOfTeam.length){
      //     setTimeout(wait,100);
      //   }
      //   else {
      //     //loop through all posts
      //     for(var i = 0; i < dataOfTeam.length; i++)
      //     {
      //
      //       //loop through all images
      //       var imgs = document.querySelectorAll(".reportPfp");
      //       for(var j = 0; j < imgs.length; j++)
      //       {
      //           //check if usersid are the same and then set image source
      //           var strURL = postPfps[i].substring(postPfps[i].indexOf("/o/")+3,postPfps[i].indexOf("%2F"));
      //           if(strURL == dataOfTeam[j].id)
      //           {
      //
      //             imgs[j].src = postPfps[i];
      //           }
      //       }
      //     }
      //   }
      // }
      teamHtml = `<div class = "titleDiv">
                <h1 class = "mainTitle">Summary</h1>
                <p>This is a summary chart detailing all the runs done by your team members in a day or if you choose, in a week.</p></div>`;

      teamHtml += `

          <div id = "teamReport">
          <div id = "summaries" class="btn-group" role="group">`
      if (window.innerWidth >= mobwidth) {
        teamHtml += `<button type="button" id = "daily" class="btn btn-secondary selectedSummary">Daily Summary</button>
            <button type="button" id = "weekly" class="btn btn-secondary">Weekly Summary</button>`;
      }
      else {
        teamHtml += `<button type="button" id = "daily" class="btn btn-secondary selectedSummary">Daily</button>
            <button type="button" id = "weekly" class="btn btn-secondary">Weekly</button>`;
      }

      teamHtml +=
        `
          </div>
          <div id = "report">
          <div style = "display: block; text-align: center;" class="loadingio-spinner-rolling-qg44w7ay85"><div class="ldio-wk1ytw9c5u">
            <div></div>
          </div></div>
          </div>`;

      summaryList.innerHTML = teamHtml;

      var daily = document.getElementById("daily");
      var weekly = document.getElementById('weekly');

      daily.addEventListener("click", e => {
        e.preventDefault();
        if (weekly.classList.contains("selectedSummary")) {
          weekly.classList.remove("selectedSummary");
          daily.classList.add("selectedSummary");
        }
        var report = document.getElementById("report");
        getReport(dataOfTeam, true, new Date(), report);


      });
      setTimeout(function () {
        $(daily).click();
      }, 300);


      weekly.addEventListener("click", e => {
        e.preventDefault();
        if (daily.classList.contains("selectedSummary")) {
          daily.classList.remove("selectedSummary");
          weekly.classList.add("selectedSummary");
        }

        var startOfWeek = new Date();
        startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay()));
        var report = document.getElementById("report");

        getReport(dataOfTeam, false, startOfWeek, report);

      });

    }
    if (analysisNav.parentElement.classList.contains("active")) {

      //array of pfps
      var postPfps = [];

      var dataOfTeam = [];
      usersData.forEach(doc => {
        if (doc.data().teamCode == userTeamCode) {
          dataOfTeam.push(doc);
        }
      });
      dataOfTeam = mergeSortAlpha(dataOfTeam);


      // dataOfTeam.forEach(doc => {
      //     firebase.storage().ref(doc.id + "/pfp").getDownloadURL().then(function(url) {
      //       // `url` is the download URL for 'images/stars.jpg'
      //
      //       // This can be downloaded directly:
      //       var xhr = new XMLHttpRequest();
      //       xhr.responseType = 'blob';
      //       xhr.onload = function(event) {
      //         var blob = xhr.response;
      //       };
      //       xhr.open('GET', url);
      //       xhr.send();
      //
      //       // Or inserted into an <img> element:
      //         postPfps.push(url);
      //
      //
      //
      //     }).catch(function(error) {
      //       if(error.code ==  'storage/object-not-found'){
      //         postPfps.push("./images/blankpfp.png");
      //
      //       }
      //       if(error.code ==  'storage/unauthorized'){
      //         // User doesn't have permission to access the object
      //
      //       }
      //       if(error.code ==  'storage/canceled'){
      //         // User canceled the upload
      //
      //       }
      //       if(error.code ==  'storage/unknown'){
      //           // Unknown error occurrgb(30, 144, 255), inspect the server response
      //
      //       }
      //     });
      //
      //
      // });
      //
      // //wait until all the pfps are in postPfps
      // wait();
      // function wait(){
      //   if (postPfps.length != dataOfTeam.length){
      //     setTimeout(wait,100);
      //   }
      //   else {
      //     //loop through all posts
      //     for(var i = 0; i < dataOfTeam.length; i++)
      //     {
      //
      //       //loop through all images
      //       var imgs = document.querySelectorAll(".reportPfp");
      //       for(var j = 0; j < imgs.length; j++)
      //       {
      //           //check if usersid are the same and then set image source
      //           var strURL = postPfps[i].substring(postPfps[i].indexOf("/o/")+3,postPfps[i].indexOf("%2F"));
      //           if(strURL == dataOfTeam[j].id)
      //           {
      //
      //             imgs[j].src = postPfps[i];
      //           }
      //       }
      //     }
      //   }
      // }

      if (curUser.data().isAdmin)
        teamHtml = `<div class = "titleDiv"><h1 class = "mainTitle">Analysis</h1><p>Here is an analysis of the mileage and average pace by week or by month of your team members. Select a team member on the left to see their analysis.</p></div>`
      else
        teamHtml = `<div class = "titleDiv"><h1 class = "mainTitle">Analysis</h1><p>Here is an analysis of your mileage and average pace by week or by month.</p></div>`

      teamHtml += `
                          <div class = "row analysisDiv" style = "width: 100%;">
                            <div class = "col-sm-2">
                              <div id = "analysisList">
                                <div style = "display: block; text-align: center;" class="loadingio-spinner-rolling-qg44w7ay85"><div class="ldio-wk1ytw9c5u">
                                  <div></div>
                                </div></div>
                              </div>
                            </div>

                            <div id = "analysisReport" class = "col-sm-10" style = "">
                              <div class = "row analysisDiv" style = "width: 100%;">
                              <div id = "analysisType" class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" id = "byweek" class="btn btn-secondary selectedSummary buttonHeader">By Week</button>
                                <button type="button" id = "bymonth" class="btn btn-secondary buttonHeader">By Month</button>
                              </div>

                              <div class = "col-sm-12" style = "margin-top: 20px;">

                              <div class = "analysisChart" style = "margin-top: 20px;">  <p class = "chartTitle">Mileage</p><canvas  id="mileageChart"></canvas></div>
                              </div>
                                <div class = "col-sm-12" style = "margin-top: 20px;">
                              <div class = "analysisChart" style = "margin-top: 20px;"><p class = "chartTitle">Average Pace</p><canvas   id="paceChart"></canvas></div>

                              </div>
                                  <div class = "col-sm-12 analysisExpand" style = " width: 100%; margin-top: 20px;">
                                <div class = "analysisChart" style = "margin-top: 20px; padding: 50px 50px; width: 100%;">
                                <p class = "chartTitle">Tabular</p>
                                <div id = "byEachList" style = "width: 100%;">
                                </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
          `;

      analysisSection.innerHTML = teamHtml;
      if (window.innerWidth < mobwidth) {
        $(".analysisChart").css("box-shadow", "none");
        $(".analysisChart").css("padding", "0");
        $(".analysisChart").css("padding-top", "25px");
        $(".analysisChart").css("margin", "0")
        $(".margin").css("padding", "10px");
        $("#analysisSection").css("width", "100%");

        $(".teamMember").css("margin-top", "15px");
      }
      setTimeout(function () {
        updateAnalysisByWeek(new Date(), 6, dataOfTeam);
      }, 50);



      //chart.data.datasets[0].pointBackgroundColor = 'rgb(30, 144, 255)';

      teamHtml = "";
      dataOfTeam.forEach(doc => {
        const post = doc.data();
        var li = '';

        if (curUser.data().isAdmin) {
          if (!post.isBanned) {
            li = `
                  <li class = "analysisMember"  style = "" id = "${doc.id}" >`;
            li += `
                      <img class = "reportPfp" src = "${post.pfp}" width = "30px" height = "30px" style = "border-radius:50%; margin-right: 10px; float:left">
                      <div class="analysismemberTitle"> ${post.first} ${post.last}</div>
                    `;
            li += `

                  </li>
                `;

            teamHtml += li;
          }
        }
        else {

          li = `
                <li class = "analysisMember"  style = "display:none" id = "${curUser.id}" >`;
          li += `
                    <img class = "reportPfp" src = "${curUser.data().pfp}" width = "30px" height = "30px" style = "border-radius:50%; margin-right: 10px; float:left">
                    <div class="analysismemberTitle"> ${curUser.data().first} ${curUser.data().last}</div>
                  `;
          li += `

                </li>
              `;

          teamHtml += li;
        }
      });
      var analysisList = document.getElementById("analysisList");
      var analysisReport = document.getElementById("analysisReport");

      analysisList.innerHTML = teamHtml;
      if (!curUser.data().isAdmin) {
        analysisList.parentElement.style.display = "none";
        analysisReport.classList.remove("col-sm-10");
      }

      var teamMembers = document.getElementsByClassName("analysisMember");
      teamMembers[0].classList.add("selectedMember");

      var byweek = document.getElementById("byweek");
      var bymonth = document.getElementById("bymonth");

      byweek.addEventListener("click", function (e) {
        e.preventDefault();
        var byweek = document.getElementById("byweek");
        var bymonth = document.getElementById("bymonth");
        updateAnalysisByWeek(new Date(), 6, dataOfTeam);
        if (!byweek.classList.contains("selectedSummary")) {
          byweek.classList.add("selectedSummary");

          bymonth.classList.remove("selectedSummary");
        }

      });

      bymonth.addEventListener("click", function (e) {
        e.preventDefault();
        var byweek = document.getElementById("byweek");
        var bymonth = document.getElementById("bymonth");
        updateAnalysisByMonth(new Date(), 6, dataOfTeam);
        if (!bymonth.classList.contains("selectedSummary")) {
          bymonth.classList.add("selectedSummary");

          byweek.classList.remove("selectedSummary");
        }

      });

      for (var i = 0; i < teamMembers.length; i++) {
        teamMembers[i].addEventListener("click", function (e) {
          for (var i = 0; i < teamMembers.length; i++) {
            if (teamMembers[i].classList.contains("selectedMember"))
              teamMembers[i].classList.remove("selectedMember");
          }
          if (!this.classList.contains("selectedMember")) {
            this.classList.add("selectedMember");

            if (bymonth.classList.contains("selectedSummary"))
              updateAnalysisByMonth(new Date(), 6, dataOfTeam);
            else {
              updateAnalysisByWeek(new Date(), 6, dataOfTeam);
            }
          }

        });
      }





      // list += `<tr>
      //           <td>
      //             <img class = "reportPfp" src = "./images/blankpfp.png" width = "30px" height = "30px" style = "border-radius:50%; margin-right: 10px;">${doc.data().first} ${doc.data().last}
      //             </td>
      //           <td>${totalMileage}</td>
      //           <td>${totalPace}</td></tr>`;


    }
  }
  else {
    if (homeNav.parentElement.classList.contains("active") || teamActivity.parentElement.classList.contains("active") || analysisNav.parentElement.classList.contains("active") || summaryNav.parentElement.classList.contains("active")) {
      document.querySelector("#dashPostsLoading").style.display = "none";
      document.querySelectorAll(".posts")[0].style.display = "none";
      document.querySelector("#analysisSection").style.display = "none";
      document.querySelector("#settingsSection").style.display = "none";
      document.querySelector("#watchSection").style.display = "none";
      document.querySelector("#homeSection").style.display = "none";
      document.querySelector("#summaryList").style.display = "none";
      noPostsSection.style.display = "block";
      if (curUser.data().isAdmin) {
        var banner = `
            <div class = "row bannerDiv" style = "display: flex; margin-right: 0 !important; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 70vh;">
            <div class = "banner boxShadow" style = "width: 50%; background: white; box-shadow: 0 0 15px rgba(5,5, 5,.4); padding: 100px; border-radius: 20px;">
            <h1 class = "bannerHead" style = "font-weight:bold; font-size: 50px;">Welcome ${curUser.data().teamName}!</h1>
            <h5 style = "margin-top: 25px; font-size: 30px;">Your Team Code is: <span style = "color: rgb(30, 144, 255)">${curUser.data().teamCode}</span></h5>
            <h5 style = "margin-top: 25px; font-size: 18px;">Once your team members signup with your team code, they can begin posting their runs!</h5>
            </div>
            </div>
              `;
        noPostsSection.innerHTML = banner;
      }
      else {
        var banner = `<div class = "row" style = "display: flex; margin-right: 0 !important; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 70vh;">
            <div class = "banner boxShadow" style = "width: 50%; background: white; box-shadow: 0 0 15px rgba(5,5, 5,.4); border-radius: 20px; padding: 100px; ">
            <h1 class = "bannerHead" style = "font-weight:bold; font-size: 50px;">Welcome ${curUser.data().first}!</h1>
            <h5 style = "margin-top: 25px; font-size: 30px;">Looks like no one from ${curUser.data().teamName} has posted yet. Be the first!</h5>
            </div>
            </div>
              `;
        noPostsSection.innerHTML = banner;

      }
    }
    else {
      noPostsSection.innerHTML = "";
      noPostsSection.style.display = "none";
    }

  }
  if (teamRoutes.parentElement.classList.contains("active")) {
    if (typeof postList.style != "undefined")
      postList.style.display = "none";
    postList = document.getElementById("routesPosts");
    postList.innerHTML = "";
    postList.style.display = "block";
    if (!curUser.data().isAdmin && !curUser.data().isMod)
      postList.innerHTML += `<div class = "titleDiv"><h1 class = "mainTitle">Routes</h1><p>Admins and moderators can add common routes that can be selected when posting a run.</p></div>`;
    else
      postList.innerHTML += `<div class = "titleDiv"><h1 class = "mainTitle">Routes</h1><p>Add a route that is commonly run by your team to making posting runs easier.</p></div>`;

    if (curUser.data().isAdmin || curUser.data().isMod) {
      var pageHTML = `
            <div class = "row" style = "padding-top: 25px; margin: 0">
              <div class = "col-sm">
              <form id = "routeForm" novalidate>
                <div class = "row" >
                  <h1 style = "font-weight: bold; text-align:center; width: 100%;">Add New Route</h1>
                </div>
                <div class = "row" style = "padding-bottom:20px; padding-top:20px;">
                  <label for="inpdark" class="inpdark" style = "width: 100%">
                    <input autocomplete="off" type = "text"  placeholder="&nbsp;" id = "routeName">
                    <span class="labeldark">Name</span>
                    <span class="focus-bgdark"></span>
                  </label>
                  <div class = "routeNameError error">Please enter a name</div>

                  </div>
                  <div  class = "row">

                    <label for="inpdark" class="inpdark" style = "width: 100%">
                      <input autocomplete="off" id = "routeDistance" type = "number" placeholder="&nbsp;" step = "0.01">
                      <span class="labeldark">Distance in miles</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    <div class = "routeDistanceError error">Invalid Distance</div>
                    </div>
                <div class = "row" style = "padding-top:20px;">
                  <label for="inpdark" class="inpdark" style = "width: 100%;">
                    <input autocomplete="off"  type = "text"  style = "" placeholder="&nbsp;" id = "routeDescription">
                    <span class="labeldark">Description</span>
                    <span class="focus-bgdark"></span>
                  </label>

                </div>
                <div style = "display: flex; align-items: center; justify-content: center;" class = "row">
                <button  type = "submit" class="formButton">Add</button>
                </div>
              </form>
              </div>`;


      if (routesData.length > 0) {
        pageHTML +=
          `<div id = "routes" class = "col-sm" style = "margin-right: 10%;">

	              </div></div>`
      }
      else {
        pageHTML +=
          `<div id = "routes" class = "col-sm" style = "margin-right: 10%; box-shadow: none">

	              </div></div>`

      }

      postList.innerHTML += pageHTML;


    }
    else {
      postList.innerHTML += `
            <div class = "row" style = "padding-top: 25px;">

              <div id = "routes" style = "width: 60%; margin-left: 20%; margin-right: 20%;">

              </div>
            </div>

            `;
    }



    setTimeout(function () {
      var routeForm = document.querySelector("#routeForm");
      $("#routeForm").submit(function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        var isInvalid = false;
        var routeNameError = document.getElementsByClassName("routeNameError");
        var routeDistanceError = document.getElementsByClassName("routeDistanceError");
        var errors = document.getElementsByClassName("error");
        for (var i = 0; i < errors.length; i++) {
          errors[i].style.display = "none";
        }
        if (routeForm.routeName.value == "") {
          isInvalid = true;
          routeNameError[0].style.display = "block";
          var nameinput = document.getElementById("routeName");
          nameinput.focus();
        }
        if ((routeForm.routeDistance.value <= 0 || routeForm.routeDistance.value >= 100000) || !routeForm.routeDistance.value || routeForm.routeDistance.value.toString().length > 6) {
          isInvalid = true;
          routeDistanceError[0].style.display = "block";
          var distinput = document.getElementById("routeDistance");
          distinput.focus();
        }
        if (!isInvalid) {

          db.collection("routes")
            .add({
              name: routeForm.routeName.value,
              description: routeForm.routeDescription.value,
              distance: routeForm.routeDistance.value,
              teamCode: userTeamCode
            })
            .then(() => {

              // reset form
              setupPosts(postsData, userID);
              routeForm.reset();
            })
            .catch(err => {
              console.log(err.message);
            });
        }

      });
    }, 200);

    if (!postsData.length) {

      document.querySelectorAll(".posts")[0].style.display = "none";
      document.querySelector("#analysisSection").style.display = "none";
      document.querySelector("#settingsSection").style.display = "none";
      document.querySelector("#watchSection").style.display = "none";
      document.querySelector("#summaryList").style.display = "none";
      noPostsSection.style.display = "none";
    }

    postList = document.getElementById("routes");


    if (routesData.length) {
      var teamRoutesPosts = [];
      routesData.forEach(doc => {
        if (doc.data().teamCode == userTeamCode) {
          teamRoutesPosts.push(doc);
        }
      });
      routesData = teamRoutesPosts;
      var teamHtml = "";
      routesData = mergeSortDist(routesData);
      routesData.forEach(doc => {
        const post = doc.data();
        var li = ''
        if (post.name != null) {
          li = `
                  <li class = "routeItem" id = "${doc.id}">`
          if (curUser.data().isAdmin || curUser.data().isMod) {
            li += `<div style = "position:relative; width: 100%; height:inherit;"><button class = "removeRoute" style = ""><i class="far fa-trash-alt fa-sm"></i></button></div>`;
          }
          li += `
                    <div class="routeTitle"> ${post.name} - ${post.distance} miles </div>
                    <div class="">${post.description} </div>
                  </li>
                `;
        }
        teamHtml += li;

      });

      postList.innerHTML += teamHtml;
      if (window.innerWidth < mobwidth) {
        $(".routeItem").css("width", "100%");
        $(".routeItem").css("margin-top", "15px");
      }
      postList = document.querySelector('.posts');
      var removePostButtons = document.querySelectorAll(".removeRoute");
      for (var i = 0; i < removePostButtons.length; i++) {
        removePostButtons[i].addEventListener("click", function (e) {
          console.log(e.target);
          e.preventDefault();
          DeleteRoute(e.target);
        });
      }
    }
    else {
      if (!curUser.data().isAdmin) {
        var banner = `
              <div class = "row" style = "display: flex; flex-direction: column; margin-right: 0 !important; justify-content: center; align-items: center; text-align: center; min-height: 50vh;">
              <div class = "banner" style = "width: 50%; background: white; box-shadow: 0 0 15px rgba(5,5, 5,.4); border-radius: 20px; padding: 100px; ">
              <h5 style = "margin-top: 25px; font-size: 24px;">Your Team Admin or Moderators have not posted any routes yet.</h5>
              </div>
              </div>
                `;

        routesPosts.innerHTML = banner;
      }
    }
  }
  if (team.parentElement.classList.contains("active")) {
    if (!postsData.length) {
      document.querySelectorAll(".posts")[0].style.display = "none";
      document.querySelector("#analysisSection").style.display = "none";
      document.querySelector("#settingsSection").style.display = "none";
      document.querySelector("#watchSection").style.display = "none";
      document.querySelector("#summaryList").style.display = "none";
      document.querySelector("#routesPosts").style.display = "none";
      noPostsSection.style.display = "none";
    }

    //array of pfps
    var postPfps = [];

    var dataOfTeam = [];
    usersData.forEach(doc => {
      if (doc.data().teamCode == userTeamCode) {
        dataOfTeam.push(doc);
      }
    });
    if (dataOfTeam.length != 0) {
      dataOfTeam = mergeSortAlpha(dataOfTeam);


      // dataOfTeam.forEach(doc => {
      //     firebase.storage().ref(doc.id + "/pfp").getDownloadURL().then(function(url) {
      //       // `url` is the download URL for 'images/stars.jpg'
      //
      //       // This can be downloaded directly:
      //       var xhr = new XMLHttpRequest();
      //       xhr.responseType = 'blob';
      //       xhr.onload = function(event) {
      //         var blob = xhr.response;
      //       };
      //       xhr.open('GET', url);
      //       xhr.send();
      //
      //       // Or inserted into an <img> element:
      //         postPfps.push(url);
      //
      //
      //
      //     }).catch(function(error) {
      //       if(error.code ==  'storage/object-not-found'){
      //         postPfps.push("./images/blankpfp.png");
      //
      //       }
      //       if(error.code ==  'storage/unauthorized'){
      //         // User doesn't have permission to access the object
      //
      //       }
      //       if(error.code ==  'storage/canceled'){
      //         // User canceled the upload
      //
      //       }
      //       if(error.code ==  'storage/unknown'){
      //           // Unknown error occurrgb(30, 144, 255), inspect the server response
      //
      //       }
      //     });
      //
      //
      // });
      //
      // //wait until all the pfps are in postPfps
      // wait();
      // function wait(){
      //
      //   var imgs = document.querySelectorAll(".memberPfp");
      //   console.log(imgs);
      //   if (postPfps.length != dataOfTeam.length || imgs.length != dataOfTeam.length){
      //
      //
      //     setTimeout(wait,100);
      //   }
      //   else {
      //     //loop through all posts
      //     for(var i = 0; i < dataOfTeam.length; i++)
      //     {
      //
      //       //loop through all images
      //       imgs = document.querySelectorAll(".memberPfp");
      //       for(var j = 0; j < imgs.length; j++)
      //       {
      //           //check if usersid are the same and then set image source
      //           var strURL = postPfps[i].substring(postPfps[i].indexOf("/o/")+3,postPfps[i].indexOf("%2F"));
      //           if(strURL == dataOfTeam[j].id)
      //           {
      //
      //             imgs[j].src = postPfps[i];
      //           }
      //       }
      //     }
      //
      //
      //   }
      // }
      if (curUser.data().isAdmin)
        teamHtml = `<div class = "titleDiv"><h1 class = "mainTitle">Team</h1><p>These are the members of your team. You can choose to set some members as moderators by clicking the user icon, or temporarily ban them by clicking the remove icon.</p></div>`;

      else
        teamHtml = `<div class = "titleDiv"><h1 class = "mainTitle">Team</h1><p>These are the members of your team.</p></div>`;


      teamHtml += `<div class = "" style = "width: 100%;">
                            <div id = "membersList">
                            <div style = "display: block; text-align: center;" class="loadingio-spinner-rolling-qg44w7ay85"><div class="ldio-wk1ytw9c5u">
                              <div></div>
                            </div></div>
                            </div>
                          </div>
                              `;
      postList = document.getElementById("teamMembers");
      postList.innerHTML = teamHtml;
      teamHtml = "";
      dataOfTeam = [];
      usersData.forEach(doc => {
        if (doc.data().teamCode == userTeamCode) {
          dataOfTeam.push(doc);
        }
      });
      dataOfTeam = mergeSortAlpha(dataOfTeam);
      dataOfTeam.forEach(doc => {


        const post = doc.data();
        var li = '';



        if (curUser.data().isAdmin) {
          if (post.isBanned) {
            if (post.isMod) {
              li = `
                              <li class = "teamMember"  style = " background: rgba(255, 0, 0, 0.3)" id = "${doc.id}" >`;
              li += `<a class = ""><i class="fas fa-ban ban banned"></i><span class = "memberType mod">Moderator <i class="fas fa-user" style = "font-size: 24px;"></i></span></a>`;
            }
            else {
              li = `
                              <li class = "teamMember"  style = " background: rgba(255, 0, 0, 0.3)" id = "${doc.id}" >`;
              li += `<a class = ""><i class="fas fa-ban ban banned"></i><span class = "memberType mod">Member <i class="fas fa-user" style = "font-size: 24px;"></i></span></a>`;
            }
          }
          else {
            if (post.isMod) {
              li = `
                              <li class = "teamMember"  style = "" id = "${doc.id}" >`;
              li += `<a class = ""><i class="fas fa-ban ban unbanned"></i></a><a class = ""><span class = "memberType mod">Moderator <i class="fas fa-user" style = "font-size: 24px;"></i></span></a>`;
            }
            else if (post.isAdmin) {
              li = `
                              <li class = "teamMember"  style = "" id = "${doc.id}" >`;
              li += `<span class = "admin">Admin <i class="fas fa-user" style = "font-size: 24px;"></i></span>`;
            }
            else {
              li = `
                              <li class = "teamMember"  style = "" id = "${doc.id}" >`;
              li += `<a class = ""><i class="fas fa-ban ban unbanned"></i></a><a class = ""><span class = "memberType member">Member <i class="fas fa-user" style = "font-size: 24px;"></i></span></a>`;
            }

          }
          li += `
                              <img class = "memberPfp" src = "${post.pfp}" width = "40px" height = "40px" style = "border-radius:50%; margin-right: 10px; float:left">
                              <div class="memberTitle"> ${post.first} <br>${post.last} </div>
                            `;
          li += `

                          </li>
                        `;
          teamHtml += li;
        }
        else {
          if (!post.isBanned) {
            li = `
                            <li class = "teamMember"  style = "" id = "${doc.id}" >`;
            li += `
                                <img class = "memberPfp" src = "${post.pfp}" width = "40px" height = "40px" style = "border-radius:50%; margin-right: 10px; float:left">
                                <div class="memberTitle"> ${post.first} ${post.last}</div>
                              `;
            li += `

                            </li>
                          `;

            teamHtml += li;
          }
        }
      });
      membersList = document.getElementById("membersList");
      membersList.innerHTML = teamHtml;
      if (window.innerWidth < mobwidth) {
        $("#membersList").css("margin", "0");
        $("#membersList").css("width", "90%");
        $(".teamMember").css("margin-top", "15px");
      }

      var bans = document.getElementsByClassName('ban');
      for (var i = 0; i < bans.length; i++) {
        bans[i].addEventListener("click", function (e) {
          if (e.target.classList.contains("unbanned")) {
            e.target.classList.remove("unbanned");
            e.target.classList.add("banned");
            $(e.target.parentElement.parentElement).css("background", "rgba(255, 0, 0, 0.3)");

            usersData.forEach(user => {
              if (e.target.parentElement.parentElement.id == user.id) {
                user.ref.update({
                  isBanned: true
                });
              }
            });

          }
          else if (e.target.classList.contains("banned")) {
            e.target.classList.add("unbanned");
            e.target.classList.remove("banned");
            $(e.target.parentElement.parentElement).css("border-bottom", "3px solid rgb(230, 230, 230)");
            $(e.target.parentElement.parentElement).css("background", "white");


            usersData.forEach(user => {
              if (e.target.parentElement.parentElement.id == user.id) {
                user.ref.update({
                  isBanned: false
                });
              }
            });
          }

        });
      }

      var memberTypes = document.getElementsByClassName('memberType');
      for (var i = 0; i < memberTypes.length; i++) {
        memberTypes[i].addEventListener("click", function (e) {
          if (this.classList.contains("member")) {
            this.classList.remove("member");
            this.classList.add("mod");
            this.innerHTML = `Moderator <i class="fas fa-user" style = "font-size: 24px;"></i>`;

            usersData.forEach(user => {
              if (this.parentElement.parentElement.id == user.id) {
                user.ref.update({
                  isMod: true
                });
              }
            });

          }
          else if (this.classList.contains("mod")) {
            this.classList.add("member");
            this.classList.remove("mod");
            this.innerHTML = `Member <i class="fas fa-user" style = "font-size: 24px;"></i>`;


            usersData.forEach(user => {
              if (this.parentElement.parentElement.id == user.id) {
                user.ref.update({
                  isMod: false
                });
              }
            });
          }

        });
      }
      document.getElementById("dashPostsLoading").style.display = "none";
      postList.style.display = "block";



      // for (var i = 0; i < unbanneds.length; i++) {
      //   unbanneds[i].addEventListener("click", function(e){
      //       $(e.target).addClass("banned");
      //       $(e.target.parentElement.parentElement).css("border", "2px solid rgb(30, 144, 255)");
      //       $(e.target.parentElement.parentElement).css("background", "rgba(255, 0, 0, 0.3)");
      //       var banneds = document.getElementsByClassName('banned');
      //       for (var i = 0; i < banneds.length; i++) {
      //         banneds[i].addEventListener("click", function(e){
      //             $(e.target).removeClass("banned");
      //             $(e.target.parentElement.parentElement).css("border", "none");
      //             $(e.target.parentElement.parentElement).css("background", "rgb(230, 230, 230)");
      //         });
      //       }
      //     });
      // }



    }
    else {
      if (curUser.data().isAdmin) {

        var banner = `
                  <div class = "row" style = "display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 70vh;">
                  <div class = "banner" style = "width: 50%; background: white; box-shadow: 0 0 15px rgba(5,5, 5,.4); border-radius: 20px; padding: 100px; ">
                  <h1 class = "bannerHead" style = "font-weight:bold; font-size: 50px;">Welcome ${curUser.data().teamName}!</h1>
                  <h5 style = "margin-top: 25px; font-size: 30px;">Your Team Code is: <span style = "color: rgb(30, 144, 255)">${curUser.data().teamCode}</span></h5>
                  <h5 style = "margin-top: 25px; font-size: 18px;">Once your team members signup with your team code, they can begin posting their runs!</h5>
                  </div>
                  </div>
                    `;
        var peopleOfTeam = document.getElementById("teamMembers");
        peopleOfTeam.innerHTML = banner;
      }

    }
  }
  if (settingsNav.parentElement.classList.contains("active")) {
    var teamhtml = `<div class = "titleDiv">
	                                <h1 class = "mainTitle">Settings</h1>
	                                </div>`;
    teamhtml += `

					<div class = "container" style = "">
						<h1 class = "settingsTitle">Account</h1>
						<p class = "settingsText">Name: ${curUser.data().first} ${curUser.data().last}</p>`
    if (curUser.data().isAdmin) {
      teamhtml += `<p class = "settingsText">Role: Admin</p>`;
    }
    else if (curUser.data().isMod) {
      teamhtml += `<p class = "settingsText">Role: Moderator</p>`
    }
    else {
      teamhtml += `<p class = "settingsText">Role: Member</p>`
    }
    teamhtml += `
						<p class = "settingsText">Profile Picture:</p>
						<div id = "settingsPfpContainer">

								<img id = "settingsPfp" src = "${curUser.data().pfp}" style = "width: 60px; height: 60px; border-radius: 50%; display: block">
								<button id = "editPfp">Change <i class="fas fa-edit"></i></button>
						</div>`;
    teamhtml += `
						<h1 class = "settingsTitle">Team</h1>
						<p class = "settingsText">Team Name: ${curUser.data().teamName}</p>
						<p class = "settingsText">Team Code: ${curUser.data().teamCode}</p>`

    if (!curUser.data().isAdmin) {
      teamhtml += `<a href = "" id = "leaveTeam">Leave Team</a>`
    }
    else {
      teamhtml += `<a href = "" id = "leaveTeam">Leave and Delete Team</a>`
    }
    teamhtml += `</div>`


    settingsSection.innerHTML = teamhtml;

    var leaveTeam = document.getElementById("leaveTeam");
    leaveTeam.addEventListener("click", function (e) {
      console.log("deleting");
      e.preventDefault();
      if (!curUser.data().isAdmin) {
        curUser.ref.update({
          teamCode: ""
        }).then(function () {
          createCookie("teamCode", "", 365);
          window.location.href = window.location.href;
        });
      }
      else {
        var curTeamCode = curUser.data().teamCode;

        usersData.forEach(user => {
          if (user.data().teamCode == curTeamCode) {
            user.ref.update({
              teamCode: "",
              isAdmin: false
            }).then(function () {
              createCookie("teamCode", "", 365);
              window.location.href = window.location.href;
            });
          }
        })

      }



    });

    var editPfp = document.getElementById("editPfp");
    editPfp.addEventListener("click", function (e) {
      e.preventDefault();
      var formhtml =
        `<form id = "pfpForm" style = "display: none; position: relative">
						<a id = "closePfpForm"><i style = "color: rgb(30, 144, 255)"class="fas fa-times"></i></a>
						<div style = "display: none; text-align: center;" id = "endSubmitLoading"class="loadingio-spinner-rolling-qg44w7ay85"><div class="ldio-wk1ytw9c5u">
							<div></div>
						</div></div>
						<div id = "pfpcontainer" style = "text-align:center;">
							<div class="input-field">
								<div class = "row">
									<div class = "col-sm" >
									<p style= "font-size: 20px" for="pfpButton">Upload a New Profile Picture:</p>
									</div>
									<div class = "col-sm" id ="pfpButtonDiv">
									<input autocomplete="off" accept="image/*" type = file value = "upload" style = "float:left;  border: none; background: white;" id = "pfpButton"/>
									<label for = "pfpButton" style = "font-size: 18px; background: rgb(230, 230, 230); padding: 10px; cursor: pointer">
										<i class="fas fa-file-image"></i> Upload Image
									</label>
								</div>
							</div>
							<div style = "display: none; text-align: center;" id = "pfpSubmitLoading"class="loadingio-spinner-rolling-qg44w7ay85"><div class="ldio-wk1ytw9c5u">
								<div></div>
							</div></div>
							<div id = "pfpdiv" style = "text-align: center; display: none">
								<div id="imgCon">
									<div class = "row">
										<div class = "col-sm">
											<div id = "picselect">

											</div>
										</div>
										<div class = "col-sm">
											<div>
											<p style= "font-size: 20px" class = "margin-bottom: 20px;"style = "text-align: left!important">Preview:</p>
											<canvas id="preview" style="width:150px;height:150px;overflow:hidden; border-radius: 50%"></canvas>
											</div>
										</div>
									</div>



								</div>
							</div>
							<button id = "submitButton" class="formButton">Submit</button>

						</div>
						</div>
						</form>`;

      var settingsPfp = document.getElementById("settingsPfp");
      var editPfp = document.getElementById("editPfp");
      settingsPfp.style.display = "none";
      editPfp.style.display = "none";

      var settingsPfpContainer = document.getElementById("settingsPfpContainer");
      settingsPfpContainer.appendChild($.parseHTML(formhtml)[0]);

      var closePfpForm = document.getElementById("closePfpForm");
      closePfpForm.addEventListener("click", function (e) {
        e.preventDefault();
        $("#pfpForm").slideUp("slow", function () {
          var settingsPfp = document.getElementById("settingsPfp");
          var editPfp = document.getElementById("editPfp");
          var pfpForm = document.getElementById("pfpForm");
          pfpForm.remove();
          settingsPfp.style.display = "block";
          editPfp.style.display = "block";
        });

      });


      $("#pfpForm").slideDown("slow", function () {

      });

      //get profile Picture
      const pfpButton = document.querySelector("#pfpButton");

      pfpButton.addEventListener("change", function (e) {
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
          function error(err) {

          },
          function complete() {

            firebase.storage().ref(userID.uid + "/" + file.name).getDownloadURL().then(function (url) {
              // `url` is the download URL for 'images/stars.jpg'

              // This can be downloaded directly:
              var xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = function (event) {
                var blob = xhr.response;
              };
              xhr.open('GET', url);
              xhr.send();

              // Or inserted into an <img> element:

              var pic = document.getElementById("picselect");
              pic.innerHTML = `<img style = "float:left; display: none" crossorigin="anonymous" id="target" width = "400px" src="">`;

              setTimeout(function () {
                var img2 = document.getElementById('target');
                img2.src = url;
                img2.style.display = "block";
                console.log(img2.src)
                img2.style.width = "400px";
                img2.style.height = "400px";
                var aspectR = (parseInt(img2.style.width.substring(0, img2.style.width.indexOf("px")))) / (parseInt(img2.style.height.substring(0, img2.style.height.indexOf("px"))));
                var newWidth = 400 * aspectR;
                $('#target').Jcrop({
                  onChange: updatePreview,
                  onSelect: updatePreview,
                  aspectRatio: 200 / 200, //keep aspect ratio
                  setSelect: [0, 0, 200, 200],
                  minSize: [100, 100],
                  maxSize: [500, 500],
                  boxWidth: newWidth,
                  boxHeight: 400,
                });
                function updatePreview(c) {
                  //img2.crossOrigin = 'anonymous';
                  if (parseInt(c.w) > 0) {
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

                firebase.storage().ref(userID.uid + "/" + file.name).delete().then(function () {

                });
              }, 1000);

            }).catch(function (error) {
              if (error.code == 'storage/object-not-found') {
                // File doesn't exist
              }
              if (error.code == 'storage/unauthorized') {
                // User doesn't have permission to access the object
              }
              if (error.code == 'storage/canceled') {
                // User canceled the upload
              }
              if (error.code == 'storage/unknown') {
                // Unknown error occurred, inspect the server response
              }
            });
          }
        );
      });



      const pfpForm = document.querySelector("#pfpForm");
      pfpForm.addEventListener("submit", e => {
        e.preventDefault();

        $("#pfpcontainer")[0].style.display = "none";
        $("#pfpdiv")[0].style.display = "none";
        $("#endSubmitLoading")[0].style.display = "block";
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
          function error(err) {

          },
          function complete() {


            storageRef.getDownloadURL().then(function (url) {
              // `url` is the download URL for 'images/stars.jpg'

              // This can be downloaded directly:
              var xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = function (event) {
                var blob = xhr.response;
              };
              xhr.open('GET', url);
              xhr.send();

              // Or inserted into an <img> element:
              var canvas = $("#preview")[0];
              if (document.getElementById("target") == null)
                pfpUrl = "./images/blankpfp.png"
              else
                pfpUrl = url;

              db.collection('users').doc(userID.uid).update({
                pfp: pfpUrl
              }).then(function () {

                $("#pfpForm").slideUp("slow", function () {
                  var settingsPfp = document.getElementById("settingsPfp");
                  var editPfp = document.getElementById("editPfp");
                  var pfpForm = document.getElementById("pfpForm");
                  settingsPfp.src = pfpUrl;

                  settingsPfp.style.display = "block";
                  editPfp.style.display = "block";
                  pfpForm.remove();
                });








              }).catch(function (error) {
                console.log(error);
              });


            });



          }).catch(function (error) {
            if (error.code == 'storage/object-not-found') {
              postPfps.push("./images/blankpfp.png");

            }
            if (error.code == 'storage/unauthorized') {
              // User doesn't have permission to access the object

            }
            if (error.code == 'storage/canceled') {
              // User canceled the upload

            }
            if (error.code == 'storage/unknown') {
              // Unknown error occurred, inspect the server response

            }
          });
      });
    });




  }
  if (watchNav.parentElement.classList.contains("active")) {

    var watchHtml = `<div class = "titleDiv">
	                                <h1 class = "mainTitle">Sync Watch</h1>
	                                </div>`;

    if (typeof curUser.data().user_token != "undefined") {
      watchHtml += `<div class = "container" style = "text-align: left">You are successfully connected to a Garmin Connect account. If you would like to disconnect your account from this website, visit your account settings on the Garmin Connect Website to disconnect TeamRuns.
						</div>`
    }
    else {
      watchHtml += `<div class = "container" style = "text-align: center"><div><img src = "./images/Garmin_logo.png" style = "width: 75px; height: 75px; margin: 25px;"></div>In order to sync your Garmin device with TeamRuns, log in to your Garmin Connect account using the button below.<br>
						Note: Once you connect, only runs you upload to your Garmin Connect account will post on to TeamRuns.
						<div><button class = "formButton" id = "connectLink">Connect to Garmin</button></div>
						</div>`
    }

    watchSection.innerHTML = watchHtml;

    var connectLink = document.querySelector("#connectLink");
    connectLink.addEventListener("click", function (e) {
      curUser.ref.update({
        awaitingConnection: true
      }).then(() => {
        window.location.href = "./connect";

      })
    });

  }

  if (planNav.parentElement.classList.contains("active")) {

    var planHtml = `<div class = "titleDiv">
	                                <h1 class = "mainTitle">Team Plan</h1>
	                                </div>

																	<div id = "plan">

																	</div>`
      ;

    planSection.innerHTML = planHtml;

    var plan = document.getElementById('plan');

    var startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay()));

    var planData;
    teamsData.forEach((team, i) => {
      if (curUser.data().teamCode == team.data().teamCode) {
        planData = team.data().plans;
      }
    });

    if (typeof planData == "undefined") {
      planData = [];
    }


    getPlan(planData, startOfWeek, plan, curUser);
  }

}

function getTimeStr(hours, mins, secs) {
  var timeString = "";
  timeString += (hours > 0) ? (hours + ":") : "";
  timeString += (mins == 0 && hours > 0) ? "00:" : "";
  timeString += (mins > 0 && mins < 10 && hours == 0) ? (mins + ":") : "";
  timeString += (mins > 0 && mins < 10 && hours > 0) ? ("0" + mins + ":") : "";
  timeString += (mins >= 10) ? (mins + ":") : "";
  timeString += (secs == 0 && mins > 0) ? "00" : "";
  timeString += (secs == 0 && mins == 0 && hours > 0) ? "00" : "";
  timeString += (secs == 0 && mins == 0 && hours == 0) ? "0" : "";
  timeString += (secs > 0 && secs < 10) ? ("0" + secs) : "";
  timeString += (secs >= 10) ? (secs) : "";
  return timeString;
}

function getPace(distance, hours, mins, secs) {
  var time = 0;
  var pace;
  var minpace;
  var secpace;

  console.log(hours, mins, secs);
  if (distance != 0) {
    time += hours * 3600;
    time += mins * 60;
    time += secs;

    pace = time / distance;
    minpace = Math.trunc(pace / 60);
    secpace = Math.trunc(pace % 60);
    if (secpace < 10)
      secpace = "0" + secpace;
    return minpace + ":" + secpace;
  }
  return " - "
}

function getPacewithTime(distance, time) {
  var pace;
  var minpace;
  var secpace;

  if (distance != 0) {
    pace = time / distance;
    minpace = Math.trunc(pace / 60);
    secpace = Math.trunc(pace % 60);
    if (secpace < 10)
      secpace = "0" + secpace;
    return minpace + ":" + secpace;
  }
  return " - "
}

function getPaceTime(time) {
  var pace;
  var minpace;
  var secpace;
  pace = time;
  minpace = Math.trunc(pace / 60);
  secpace = Math.trunc(pace % 60);
  if (secpace < 10)
    secpace = "0" + secpace;
  if (!pace)
    return "-";
  return minpace + ":" + secpace;
}


function getPlan(planData, dateObj, target, curUser) {
  var planTable = "";

  var today = dateObj;
  today.setDate(today.getDate() + 6);
  var lastDay = new Date(today.toString());
  today.setDate(today.getDate() - 6);
  console.log(lastDay);
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var list = `<table id = "tablePlan"class = "reportTable" style = "width: 90%; margin-left: 5%;">
							<th colspan = "5" style = "background: linear-gradient(162deg, rgba(30,144,255,1) 0%, rgba(0,57,157,1) 100%)">
							<div class = "row" style = "">
								<div class = "col-sm-1" style = "text-align: center; color: white; font-size: 30px; ">
								<a id = "leftPlan" ><i class="fas fa-angle-left" style = "line-height: 40px; cursor: pointer"></i></a>
								</div>
								<div class = "col-sm-10" style = "text-align: center;font-size: 36px; color: white;">
									<div id = "planDate" class = "${today.toString()}">
										${days[today.getDay()].substring(0, 3)} ${today.getDate()} ${
    months[today.getMonth()]
    }, ${today.getFullYear()} - ${days[lastDay.getDay()].substring(
      0,
      3
    )} ${lastDay.getDate()} ${
    months[lastDay.getMonth()]
    }, ${lastDay.getFullYear()}
									</div>
								</div>
								<div class = "col-sm-1" style = "text-align: center; color: white; font-size: 30px;">
								<a id = "rightPlan" ><i class="fas fa-angle-right" style = "line-height: 40px; cursor: pointer"></i></a>
								</div>
							</div>

							</th>
						`;

  planTable += list;

  target.innerHTML = planTable;


  var tableRef = document.getElementById('tablePlan');

  days.forEach((day, i) => {

    today.setDate(today.getDate() + i);
    var planDay = new Date(today.toString());
    today.setDate(today.getDate() - i);

    var thisDate = planDay.getDate();
    var thisMonth = months[planDay.getMonth()];
    var thisYear = planDay.getFullYear();
    var date = thisDate + thisMonth + thisYear;

    var curPlan = "";
    planData.forEach((plan, k) => {
      if (planData[k].date == date) {
        curPlan = planData[k];
      }
    });

    if (curPlan == "") {
      curPlan = { text: "" };
    }

    var sectionHtml = ""

    sectionHtml += `
			<tr>
      <td class = "dayPlan ${planDay.getTime()}" style = "max-width: 50%;">
      <h2 style = "font-weight: bold;">${day}</h2>
			<span id = "${date}text" style = "white-space: pre-wrap;">${
      curPlan.text
      }</span>`;


    if (curUser.data().isAdmin) {
      sectionHtml += `<div style = "text-align: left;"><a href = "" class = "editLink" id = "${date}edit" > <i class="fas fa-pen"></i> `
      if (curPlan.text == "") sectionHtml += `Add</a></div>`;
      else sectionHtml += `Edit</a></div>`;

    }


    sectionHtml += `<form id = "${date}"	 class = "planEdit" style = "display: none;" novalidate>
			<div id = "message" class="input-field" style = "max-width: 50%;">
					<textarea id = "planText" placeholder="&nbsp;" style = "height: 100px; background: rgb(245, 245, 245)">${curPlan.text}</textarea>
			</div>


			<input href = "" type = "submit" class = "formButton"  style = "width: 150px" value = "save"></a>

			</form>
			</td>
			</tr>`

    tableRef.innerHTML += sectionHtml;



    setTimeout(function () {


      document.getElementById(date + "edit").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById(date).style.display = "block";
        this.style.display = "none";
        document.getElementById(date + "text").style.display = "none";
        $('textarea').keypress(function (e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            this.value = this.value.substring(0, this.selectionStart) + "" + "\n" + this.value.substring(this.selectionEnd, this.value.length);
          }
        });
      });


      document.getElementById(date).addEventListener("submit", function (e) {
        e.preventDefault();
        teamsData.forEach(team => {
          if (team.data().teamCode == curUser.data().teamCode) {
            var initialPlans = team.data().plans;



            if (typeof initialPlans == "undefined") {
              initialPlans = [];
            }
            else {
              initialPlans.forEach((plan, a) => {
                if (plan.date == date) {
                  initialPlans.splice(a, 1);
                }
              });

            }


            initialPlans.push({

              text: this["planText"].value,
              date: date
            });

            team.ref.update({
              plans: initialPlans
            }).then(() => {
              db.collection("teams").doc(team.id).get().then(data => {

                var plans;
                plans = data.data().plans;
                getPlan(plans, dateObj, target, curUser);

              })
            });



          }
        });

      });
    }, 100);



  });




  //left click listener
  var leftPlan = document.getElementById("leftPlan");
  leftPlan.addEventListener("click", e => {
    e.preventDefault();
    var curReportDate = document.getElementById("planDate").classList.value;
    curReportDate = new Date(curReportDate);
    curReportDate.setDate(curReportDate.getDate() - 7);
    var planTarg = document.getElementById("plan");
    getPlan(planData, curReportDate, planTarg, curUser);
  });

  //right click listener
  var rightPlan = document.getElementById("rightPlan");
  rightPlan.addEventListener("click", e => {
    e.preventDefault();
    var curReportDate = document.getElementById("planDate").classList.value;
    curReportDate = new Date(curReportDate);
    curReportDate.setDate(curReportDate.getDate() + 7);
    var planTarg = document.getElementById("plan");
    getPlan(planData, curReportDate, planTarg, curUser);
  });


}




function getReport(dataOfTeam, isDayReport, dateObj, target) {
  var report = "";
  if (isDayReport) {
    var today = dateObj;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var list = `<table class = "reportTable" style = "width: 100%;">
                <th colspan = "5">
                <div class = "row">
                  <div class = "col-sm-1" style = "text-align: center; color: rgb(30, 144, 255); font-size: 30px;">
                  <a id = "leftDay" ><i class="fas fa-angle-left" style = "line-height: 40px;" ></i></a>
                  </div>
                  <div class = "col-sm-10" style = "text-align: center;font-size: 36px;">
                    <div id = "reportDate" class = "${today.toString()}">
                      ${days[today.getDay()].substring(0, 3)} ${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}
                    </div>
                  </div>
                  <div class = "col-sm-1" style = "text-align: center; color: rgb(30, 144, 255); font-size: 30px;">
                  <a id = "rightDay" ><i class="fas fa-angle-right" style = "line-height: 40px;"></i></a>
                  </div>
                </div>

                </th>
                <tr>
                <td><b>Name</b></td>
                <td><b>Route</b></td>
                <td><b>Distance</b></td>
                <td><b>Time</b></td>
                <td><b>Pace</b></td>
                </tr>`;
    dataOfTeam.forEach(doc => {
      var hasRun = false;
      postsByDate.forEach(post => {
        if ((post.day == today.getDate() && post.month == months[today.getMonth()] && post.year == today.getFullYear())) {
          if (routesData.length) {
            var teamRoutesPosts = [];
            routesData.forEach(doc => {
              if (doc.data().teamCode == userTeamCode) {
                teamRoutesPosts.push(doc);
              }
            });
            routesData = teamRoutesPosts;
          }

          post.posts.forEach(run => {
            if (run.data().userid == doc.id) {
              var timeString = getTimeStr(run.data().totalHours, run.data().totalMinutes, run.data().totalSeconds);
              var pace = getPace(run.data().totalDistance, run.data().totalHours, run.data().totalMinutes, run.data().totalSeconds);
              var runRoutes = [];
              for (var i = 0; i < run.data().segments.length; i++) {
                for (var j = 0; j < routesData.length; j++) {
                  if (routesData[j].data().name == run.data().segments[i].name) {
                    runRoutes.push(routesData[j].data().name);
                  }
                }
              }
              var routeStr = "";
              runRoutes.forEach(route => {
                if (runRoutes.indexOf(route) != runRoutes.length - 1) {
                  routeStr += route + ", ";
                }
                else {
                  routeStr += route;
                }
              });
              if (routeStr == "") routeStr = " - ";



              hasRun = true;
              console.log(doc.data().pfp, doc);
              if (timeString == "0") timeString = " - ";
              if (pace == "0:00") pace = " - ";
              list += `<tr>
                              <td>
                                <img class = "reportPfp" src = "${doc.data().pfp}" width = "30px" height = "30px" style = "border-radius:50%; margin-right: 10px;"><b>${doc.data().first} ${doc.data().last}</b>
                                </td>
                              <td>${routeStr}</td>
                              <td>${run.data().totalDistance.toFixedDown(2)}</td>
                              <td>${timeString}</td>
                              <td>${pace}</td></tr>`;
            }
          });

        }
      });
      if (!hasRun) {
        list += `<tr>
                  <td><img class = "reportPfp" src = "${doc.data().pfp}" width = "30px" height = "30px" style = "border-radius:50%; margin-right: 10px;"><b>${doc.data().first} ${doc.data().last}</b>
                  </td>
                  <td> - </td>
                  <td>0</td>
                  <td> - </td>
                  <td> - </td>
                  <tr>`;
      }
    });
    list += "</table>"
    report = list;

    target.innerHTML = report;


    //left click listener
    var leftDay = document.getElementById("leftDay");
    leftDay.addEventListener("click", e => {
      e.preventDefault();
      var curReportDate = document.getElementById("reportDate").classList.value;
      curReportDate = new Date(curReportDate);
      curReportDate.setDate(curReportDate.getDate() - 1);
      var reportTarg = document.getElementById("report");
      var list = getReport(dataOfTeam, true, curReportDate, reportTarg);
    });

    //right click listener
    var rightDay = document.getElementById("rightDay");
    rightDay.addEventListener("click", e => {
      e.preventDefault();
      var curReportDate = document.getElementById("reportDate").classList.value;
      curReportDate = new Date(curReportDate);
      curReportDate.setDate(curReportDate.getDate() + 1);
      var reportTarg = document.getElementById("report");
      var list = getReport(dataOfTeam, true, curReportDate, reportTarg);
    });
  }
  else {
    var today = dateObj;
    today.setDate(today.getDate() + 6);
    var lastDay = new Date(today.toString());
    today.setDate(today.getDate() - 6);
    console.log(lastDay);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var list = `<table class = "reportTable" style = "width: 100%;">
                <th colspan = "5">
                <div class = "row">
                  <div class = "col-sm-1" style = "text-align: center; color: rgb(30, 144, 255); font-size: 30px;">
                  <a id = "leftDay" ><i class="fas fa-angle-left" style = "line-height: 40px;"></i></a>
                  </div>
                  <div class = "col-sm-10" style = "text-align: center;font-size: 36px;">
                    <div id = "reportDate" class = "${today.toString()}">
                      ${days[today.getDay()].substring(0, 3)} ${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()} - ${days[lastDay.getDay()].substring(0, 3)} ${lastDay.getDate()} ${months[lastDay.getMonth()]}, ${lastDay.getFullYear()}
                    </div>
                  </div>
                  <div class = "col-sm-1" style = "text-align: center; color: rgb(30, 144, 255); font-size: 30px;">
                  <a id = "rightDay" ><i class="fas fa-angle-right" style = "line-height: 40px;"></i></a>
                  </div>
                </div>

                </th>
                <tr>
                <td><b>Name</b></td>
                <td><b>Mileage</b></td>
                <td><b>Avg Pace</b></td>
                </tr>`;

    dataOfTeam.forEach(doc => {
      var totalMileage = 0;
      var paceMileage = 0;
      var totalPace = 0;
      today.setDate(today.getDate() - 6);
      for (var i = today.getTime(); i <= lastDay.getTime() + 100; i = today.setDate(today.getDate() + 1)) {
        var curDate = new Date(i);
        postsByDate.forEach(post => {
          if ((post.day == curDate.getDate() && post.month == months[curDate.getMonth()] && post.year == curDate.getFullYear())) {
            post.posts.forEach(run => {
              if (run.data().userid == doc.id) {
                console.log(run.data().totalDistance, doc.data().last);
                totalMileage += parseFloat(run.data().totalDistance);
                if (parseFloat(run.data().totalTime) != 0) {
                  paceMileage += parseFloat(run.data().totalDistance);
                  totalPace += parseInt(run.data().totalTime, 10);
                }
              }
            });
          }
        });

      }
      totalPace = getPacewithTime(paceMileage, totalPace);
      if (!totalPace || !totalMileage) totalPace = " - ";
      if (!totalMileage) totalMileage = 0;

      list += `<tr>
                 <td>
                   <img class = "reportPfp" src = "${doc.data().pfp}" width = "30px" height = "30px" style = "border-radius:50%; margin-right: 10px;"><b>${doc.data().first} ${doc.data().last}</b>
                   </td>
                 <td>${totalMileage.toFixedDown(2)}</td>
                 <td>${totalPace}</td></tr>`;
    });

    list += "</table>"
    report = list;

    target.innerHTML = report;

    //left click listener
    var leftDay = document.getElementById("leftDay");
    leftDay.addEventListener("click", e => {
      e.preventDefault();
      var curReportDate = document.getElementById("reportDate").classList.value;
      curReportDate = new Date(curReportDate);
      curReportDate.setDate(curReportDate.getDate() - 7);
      var reportTarg = document.getElementById("report");
      var list = getReport(dataOfTeam, false, curReportDate, reportTarg);
    });

    //right click listener
    var rightDay = document.getElementById("rightDay");
    rightDay.addEventListener("click", e => {
      e.preventDefault();
      var curReportDate = document.getElementById("reportDate").classList.value;
      curReportDate = new Date(curReportDate);
      curReportDate.setDate(curReportDate.getDate() + 7);
      var reportTarg = document.getElementById("report");
      var list = getReport(dataOfTeam, false, curReportDate, reportTarg);
    });



  }

}



function updateAnalysisByWeek(date, numWeeks, dataOfTeam) {
  var today = new Date(date.getTime() - (date.getDay() * 86400000));

  //get selected user
  var selectedMember = document.getElementsByClassName("selectedMember");

  var doc;

  usersData.forEach(user => {
    if (user.id == selectedMember[0].id) {
      doc = user;
    }
  });


  var weeksArr = [];
  for (var x = 0; x < numWeeks; x++) {

    var weekMileage = [];
    var weekPaceMileage = [];
    var weekPace = [];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var startTime = today.getTime() + (6 * 86400000) + 1;
    for (var i = today.getTime(); i <= startTime; i = (new Date(today.getTime())).getTime()) {
      var hasRun = false;
      var curDate = new Date(i);
      postsByDate.forEach(post => {
        if ((post.day == curDate.getDate() && post.month == months[curDate.getMonth()] && post.year == curDate.getFullYear())) {
          var todaysRuns = [];
          post.posts.forEach(run => {

            if (run.data().userid == doc.id) {
              hasRun = true;
              todaysRuns.push(run);
            }


          });
          if (hasRun) {
            var todaysMiles = 0;
            var todaysTimes = 0;
            var paceMiles = 0;
            for (var j = 0; j < todaysRuns.length; j++) {
              todaysMiles += parseFloat(todaysRuns[j].data().totalDistance);
              if (todaysRuns[j].data().totalTime != 0) {
                todaysTimes += parseFloat(todaysRuns[j].data().totalTime);
                paceMiles += parseFloat(todaysRuns[j].data().totalDistance);
              }

            }

            weekMileage.push(todaysMiles.toFixedDown(2));
            weekPace.push(todaysTimes);
            weekPaceMileage.push(paceMiles.toFixedDown(2));
          }

        }
      });
      if (!hasRun) {
        weekMileage.push(0);
        weekPace.push(0)
        weekPaceMileage.push(0);
      }
      today = new Date(today.getTime() + 86400000);
    }

    var milesTotal = 0;
    weekMileage.forEach(run => {
      milesTotal += run;
    });

    var paceMiles = 0;
    weekPaceMileage.forEach(run => {
      paceMiles += run;
    });

    var avgPace = 0;
    for (var i = 0; i < weekPace.length; i++) {
      avgPace += weekPace[i];
    }

    avgPace = avgPace / paceMiles;

    var paces = [];
    for (var i = 0; i < weekPace.length; i++) {
      if (weekPace[i] != 0)
        paces.push(weekPace[i] / weekPaceMileage[i]);
      else {
        paces.push(0);
      }
    }


    today = new Date(today.getTime() - (7 * 86400000));

    weeksArr.push({
      firstDay: new Date(today.getTime()),
      totalMileage: milesTotal,
      avgPace: avgPace,
      milesByDay: weekMileage,
      paces: paces
    });

    today = new Date(today.getTime() - (7 * 86400000));
    console.log(weeksArr);

  }

  var labels = [];
  var mileageData = [];
  var paceData = [];
  for (var i = weeksArr.length - 1; i >= 0; i--) {
    var label = ((weeksArr[i].firstDay.getMonth() + 1) + "/" + (weeksArr[i].firstDay.getDate())) + " - ";
    weeksArr[i].firstDay.setDate(weeksArr[i].firstDay.getDate() + 6);
    label += ((weeksArr[i].firstDay.getMonth() + 1) + "/" + (weeksArr[i].firstDay.getDate()));
    weeksArr[i].firstDay.setDate(weeksArr[i].firstDay.getDate() - 6);
    labels.push(label);

    mileageData.push(weeksArr[i].totalMileage);

    paceData.push(weeksArr[i].avgPace);


  }


  var ctx = document.getElementById('mileageChart').getContext('2d');
  try {
    mchart.destroy();
  } catch (e) {

  }
  mchart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

      labels: labels,
      datasets: [{
        // trendlineLinear: {
        //   style: "rgb(30, 144, 255)",
        //   lineStyle: "dotted",
        //     width: 2
        // },
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(30, 144, 255)',
        data: mileageData,
        pointRadius: 5,
        backgroundColor: "rgba(0, 83, 152, 0.1)",
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(30, 144, 255)'
      }]
    },


    // Configuration options go here
    options:
    {

      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }


    }
  });
  var paceChart = document.getElementById('paceChart').getContext('2d');
  try {
    pchart.destroy();
  } catch (e) {

  }
  pchart = new Chart(paceChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

      labels: labels,
      datasets: [{
        // trendlineLinear: {
        //   style: "rgb(30, 144, 255)",
        //   lineStyle: "dotted",
        //     width: 2
        // },
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(30, 144, 255)',
        pointRadius: 5,
        backgroundColor: "rgba(0, 83, 152, 0.1)",
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(30, 144, 255)',
        fill: "start",
        data: paceData

      }]
    },


    // Configuration options go here
    options:
    {

      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            userCallback: function (v) { return epoch_to_mm_ss(v) },
            stepSize: 30,
            reverse: true
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return epoch_to_mm_ss(tooltipItem.yLabel)
          }
        }
      }


    }
  });

  var byEachList = document.getElementById("byEachList");
  mileageData = [];
  paceData = [];
  percentDifferences = [];
  for (var i = 0; i < weeksArr.length; i++) {

    mileageData.push(weeksArr[i].totalMileage);

    paceData.push(weeksArr[i].avgPace);

    console.log(i, weeksArr.length - 1);
    if (i != weeksArr.length - 1)
      percentDifferences.push(getPercentDifference(weeksArr[i].totalMileage, weeksArr[i + 1].totalMileage));

  }



  var table = "";
  for (var i = 0; i < weeksArr.length; i++) {

    for (var j = 0; j < weeksArr[i].milesByDay.length; j++) {
      if (weeksArr[i].milesByDay[j] == 0)
        weeksArr[i].milesByDay[j] = "-";
    }

    table += `<table style = "width: 100%; margin-top: 20px;">
              <th style = "text-align:center; background: rgb(30, 144, 255); color: white; border: 1px solid rgb(30, 144, 255)" colspan = "3">Week ${labels[weeksArr.length - 1 - i]} </th>   <th style = "text-align:center; background: rgb(30, 144, 255); color: white; border: 1px solid rgb(30, 144, 255)" colspan = "1">${weeksArr[i].totalMileage.toFixedDown(2)}mi</th>   <th style = "text-align:center; background: rgb(30, 144, 255); color: white; border: 1px solid rgb(30, 144, 255)" colspan = "2">${getPaceTime(weeksArr[i].avgPace.toFixedDown(2))} min/mi</th>`
    if (i != weeksArr.length - 1) {
      if (percentDifferences[i].up)
        table += `  <th style = "text-align:center" colspan = "2"> <span style = "color: rgb(30, 144, 255)"> <i class="fas fa-arrow-circle-up"></i> ${percentDifferences[i].percent}% from last week</span></th>`;
      else {
        table += `  <th style = "text-align:center" colspan = "2"> <span style = "color: rgb(30, 144, 255)"> <i class="fas fa-arrow-circle-down"></i> ${percentDifferences[i].percent}% from last week</span></th>`;
      }
    }
    else table += ` <th style = "text-align:center" colspan = "2"></th>`

    if (window.innerWidth >= mobwidth) {
      table += `<tr><td></td><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>
                <tr><td><b>Miles</b></td><td>${weeksArr[i].milesByDay[0]}</td><td>${weeksArr[i].milesByDay[1]}</td><td>${weeksArr[i].milesByDay[2]}</td><td>${weeksArr[i].milesByDay[3]}</td><td>${weeksArr[i].milesByDay[4]}</td><td>${weeksArr[i].milesByDay[5]}</td><td>${weeksArr[i].milesByDay[6]}</td></tr>
                <tr><td><b>Pace</b></td><td>${getPaceTime(weeksArr[i].paces[0])}</td><td>${getPaceTime(weeksArr[i].paces[1])}</td><td>${getPaceTime(weeksArr[i].paces[2])}</td><td>${getPaceTime(weeksArr[i].paces[3])}</td><td>${getPaceTime(weeksArr[i].paces[4])}</td><td>${getPaceTime(weeksArr[i].paces[5])}</td><td>${getPaceTime(weeksArr[i].paces[6])}</td>

                </table>
                `;
    }

    else {
      table += `<tr><td colspan = "3" ></td><td colspan = "1"><b>Miles</b></td><td colspan = "4"><b>Pace</b></td>
                            <tr><td colspan = "3" >Sun</td><td colspan = "1">${weeksArr[i].milesByDay[0]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[0])}</td>
                            <tr><td colspan = "3" >Mon</td><td colspan = "1">${weeksArr[i].milesByDay[1]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[1])}</td>
                            <tr><td colspan = "3" >Tue</td><td colspan = "1">${weeksArr[i].milesByDay[2]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[2])}</td>
                            <tr><td colspan = "3" >Wed</td><td colspan = "1">${weeksArr[i].milesByDay[3]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[3])}</td>
                            <tr><td colspan = "3" >Thu</td><td colspan = "1">${weeksArr[i].milesByDay[4]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[4])}</td>
                            <tr><td colspan = "3" >Fri</td><td colspan = "1">${weeksArr[i].milesByDay[5]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[5])}</td>
                            <tr><td colspan = "3" >Sat</td><td colspan = "1">${weeksArr[i].milesByDay[6]}</td><td colspan = "4">${getPaceTime(weeksArr[i].paces[6])}</td>
                            </table>`;

    }
  }
  var byEachList = document.getElementById("byEachList");
  byEachList.innerHTML = table;


}

function updateAnalysisByMonth(date, numMonths, dataOfTeam) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[date.getMonth()];
  var curMonthDate = new Date(date.getFullYear(), date.getMonth() - (numMonths - 1), 1);
  console.log(curDate);


  //get selected user
  var selectedMember = document.getElementsByClassName("selectedMember");

  var doc;

  usersData.forEach(user => {
    if (user.id == selectedMember[0].id) {
      doc = user;
    }
  });

  var monthArr = [];
  for (var x = 0; x < numMonths; x++) {
    var curMonth = [];
    //console.log(curDate);
    var today = new Date();
    today.setDate(curMonthDate.getDate());
    today.setMonth(curMonthDate.getMonth());
    today.setFullYear(curMonthDate.getFullYear());
    console.log(today);
    var weekOffset = 0;
    var isEndOfMonth = false;
    while (!isEndOfMonth) {
      var weekMileage = [];
      var weekPaceMileage = [];
      var weekPace = [];
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var startTime = today.getTime();
      today.setDate(today.getDate() + 6);
      var end = new Date(today.toString());
      today.setDate(today.getDate() - 6);
      //console.log(today, end);
      for (var i = new Date(today.getFullYear(), today.getMonth(), today.getDate()); i <= end; i.setDate(i.getDate() + 1)) {
        var hasRun = false;
        var curDate = i;
        //console.log(today);
        postsByDate.forEach(post => {
          if ((post.day == curDate.getDate() && post.month == months[curDate.getMonth()] && post.year == curDate.getFullYear())) {

            post.posts.forEach(run => {
              if (run.data().userid == doc.id) {
                hasRun = true;
                weekMileage.push({ dist: parseFloat(run.data().totalDistance.toFixedDown(2)), i: new Date(i) });
                weekPace.push({ pace: parseInt(run.data().totalTime, 10), i: new Date(i) });
              }
            });

          }
        });
        if (!hasRun) {
          weekMileage.push({ dist: 0, i: new Date(i) });
          weekPace.push({ pace: 0, i: new Date(i) });
        }
        //console.log(today);
      }



      var milesTotal = 0;
      weekMileage.forEach(run => {
        milesTotal += run.dist;
      });

      var avgPace = 0;
      var paceMiles = 0;
      for (var i = 0; i < weekPace.length; i++) {
        if (weekPace[i].i.getMonth() == curMonthDate.getMonth()) {
          if (weekPace[i].pace != 0)
            paceMiles += weekMileage[i].dist;
          avgPace += weekPace[i].pace;
        }

      }

      avgPace = avgPace / paceMiles;

      var paces = [];
      for (var i = 0; i < weekPace.length; i++) {
        if (weekPace[i].pace != 0)
          paces.push(weekPace[i].pace / weekMileage[i].dist);
        else {
          paces.push(0);
        }
      }



      //console.log(today, weekOffset);


      curMonth.push({
        firstDay: new Date(today.toString()),
        totalMileage: milesTotal,
        avgPace: avgPace,
        milesByDay: weekMileage,
        paces: paces
      });
      today.setDate(today.getDate() + 7);
      if (today.getMonth() == (curMonthDate.getMonth() + 1)) {
        isEndOfMonth = true;
      }



      weekOffset++;

    }



    var milesTotal = 0;
    for (var i = 0; i < curMonth.length; i++) {
      curMonth[i].milesByDay.forEach(run => {
        if (run.i.getMonth() == curMonthDate.getMonth())
          milesTotal += run.dist;
      });
    }

    var paces = 0;
    var numPace = 0;
    for (var i = 0; i < curMonth.length; i++) {
      if (curMonth[i].avgPace) {
        paces += curMonth[i].avgPace;
        numPace++;
      }

    }
    paces /= numPace;

    monthArr.push({
      totalMileage: milesTotal,
      avgPace: paces,
      byWeek: curMonth
    });
    curMonthDate.setMonth(curMonthDate.getMonth() + 1);
  }
  console.log(monthArr);

  var labels = [];
  var mileageData = [];
  var paceData = [];
  for (var i = 0; i < monthArr.length; i++) {
    labels.push(months[monthArr[i].byWeek[0].firstDay.getMonth()]);

    mileageData.push(monthArr[i].totalMileage.toFixedDown(2));

    paceData.push(monthArr[i].avgPace);
  }

  console.log(labels, mileageData);

  var ctx = document.getElementById('mileageChart').getContext('2d');
  try {
    mchart.destroy();
  } catch (e) {

  }
  mchart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

      labels: labels,
      datasets: [{
        // trendlineLinear: {
        //   style: "rgb(30, 144, 255)",
        //   lineStyle: "dotted",
        //     width: 2
        // },
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(30, 144, 255)',
        data: mileageData,
        pointRadius: 5,
        backgroundColor: "rgba(0, 83, 152, 0.1)",
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(30, 144, 255)'
      }]
    },


    // Configuration options go here
    options:
    {

      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }


    }
  });
  var paceChart = document.getElementById('paceChart').getContext('2d');
  try {
    pchart.destroy();
  } catch (e) {

  }

  pchart = new Chart(paceChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

      labels: labels,
      datasets: [{
        // trendlineLinear: {
        //   style: "rgb(30, 144, 255)",
        //   lineStyle: "dotted",
        //     width: 2
        // },
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'rgb(30, 144, 255)',
        pointRadius: 5,
        backgroundColor: "rgba(0, 83, 152, 0.1)",
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(30, 144, 255)',
        fill: "start",
        data: paceData

      }]
    },


    // Configuration options go here
    options:
    {

      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            userCallback: function (v) { return epoch_to_mm_ss(v) },
            stepSize: 30,
            reverse: true
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return epoch_to_mm_ss(tooltipItem.yLabel)
          }
        }
      }


    }
  });

  var byEachList = document.getElementById("byEachList");
  labels = [];
  mileageData = [];
  paceData = [];
  var percentDifferences = [];
  for (var i = monthArr.length - 1; i >= 0; i--) {
    labels.push({ month: months[monthArr[i].byWeek[0].firstDay.getMonth()], week: [] });
    labels[labels.length - 1].week = [];
    for (var j = 0; j < monthArr[i].byWeek.length; j++) {
      var start = new Date(monthArr[i].byWeek[j].firstDay);
      monthArr[i].byWeek[j].firstDay.setDate(monthArr[i].byWeek[j].firstDay.getDate() + 6);
      var end = new Date(monthArr[i].byWeek[j].firstDay);
      monthArr[i].byWeek[j].firstDay.setDate(monthArr[i].byWeek[j].firstDay.getDate() - 6);
      var label = ((start.getMonth() + 1) + "/" + (start.getDate())) + " - ";
      label += ((end.getMonth() + 1) + "/" + (end.getDate()));
      labels[labels.length - 1].week.push(label);
    }

    mileageData.push(monthArr[i].totalMileage.toFixedDown(2));

    paceData.push(monthArr[i].avgPace);

    if (i != 0)
      percentDifferences.push(getPercentDifference(monthArr[i].totalMileage, monthArr[i - 1].totalMileage));

  }

  console.log(percentDifferences);
  var table = "";
  for (var i = 0; i < monthArr.length; i++) {
    table += `<table style = "width: 100%; margin-top: 20px;">
              <th style = "text-align:center; background: rgb(30, 144, 255); color: white; border: 1px solid rgb(30, 144, 255)" colspan = "1">${labels[i].month} </th>   <th style = "text-align:center; background: rgb(30, 144, 255); color: white; border: 1px solid rgb(30, 144, 255)" colspan = "1">${monthArr[monthArr.length - 1 - i].totalMileage.toFixedDown(2)}mi</th>   <th style = "text-align:center; background: rgb(30, 144, 255); color: white; border: 1px solid rgb(30, 144, 255)" colspan = "1">${getPaceTime(monthArr[monthArr.length - 1 - i].avgPace.toFixedDown(2))} min/mi</th>`
    if (i != monthArr.length - 1) {
      if (percentDifferences[i].up)
        table += `  <th style = "text-align:center" colspan = "1"> <span style = "color: rgb(30, 144, 255)"> <i class="fas fa-arrow-circle-up"></i> ${percentDifferences[i].percent}% from last month</span></th>`;
      else {
        table += `  <th style = "text-align:center" colspan = "1"> <span style = "color: rgb(30, 144, 255)"> <i class="fas fa-arrow-circle-down"></i> ${percentDifferences[i].percent}% from last month</span></th>`;
      }
    }
    else table += ` <th style = "text-align:center" colspan = "1"></th>`;
    table += `<tr>

                          <td colspan = "2"><b>Week</b></td>
                          <td colspan = "1"><b>Miles</b></td>
                          <td colspan = "1"><b>Pace</b></td>
                        </tr>`
    for (var j = 0; j < monthArr[i].byWeek.length; j++) {
      table += `<tr>

                            <td colspan = "2"><b>${labels[i].week[j]}</b></td>
                            <td colspan = "1">${monthArr[monthArr.length - 1 - i].byWeek[j].totalMileage.toFixedDown(2)}</td>
                            <td colspan = "1">${getPaceTime(monthArr[monthArr.length - 1 - i].byWeek[j].avgPace)}</td>
                          </tr>
                `;

    }
    // table += `<tr><td></td><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>
    // <tr><td>Miles</td><td>${weeksArr[i].milesByDay[0]}</td><td>${weeksArr[i].milesByDay[1]}</td><td>${weeksArr[i].milesByDay[2]}</td><td>${weeksArr[i].milesByDay[3]}</td><td>${weeksArr[i].milesByDay[4]}</td><td>${weeksArr[i].milesByDay[5]}</td><td>${weeksArr[i].milesByDay[6]}</td></tr>
    // <tr><td>Pace</td><td>${getPaceTime(weeksArr[i].paces[0])}</td><td>${getPaceTime(weeksArr[i].paces[1])}</td><td>${getPaceTime(weeksArr[i].paces[2])}</td><td>${getPaceTime(weeksArr[i].paces[3])}</td><td>${getPaceTime(weeksArr[i].paces[4])}</td><td>${getPaceTime(weeksArr[i].paces[5])}</td><td>${getPaceTime(weeksArr[i].paces[6])}</td>
    table +=
      `    </table>`;
  }
  var byEachList = document.getElementById("byEachList");
  byEachList.innerHTML = table;








}

function updateAnalysisByYear(date, numWeeks, dataOfTeam) {

}

function getPercentDifference(firstTime, secondTime) {
  percentDifference = (firstTime / secondTime);
  if (!isFinite(percentDifference)) return { percent: 0, up: true };
  if (percentDifference >= 1)
    return { percent: Math.trunc((percentDifference - 1) * 100), up: true };
  return { percent: Math.trunc((1 - percentDifference) * 100), up: false };
}

function epoch_to_mm_ss(epoch) {

  return new Date(epoch * 1000).toISOString().substr(14, 5);
}

function removeDisplayOfClass(classOfBlock) {
  var block = $(classOfBlock);
  block.css("display", "none");
}

function toggleOpacity(classOfBlock, classOfFades, displayType) {
  var fades = $(classOfFades);
  var block = $(classOfBlock);

  fades.css("opacity", "0");


  block.css("display", displayType);
  for (var i = 0; i < fades.length; i++) {
    $(fades[i]).animate({ opacity: 1.0 }, 500);
  }
  //fades.css("opacity", "1.0");

}

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

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}


function setActivities(postList, curUser, postsByDate, startDate, shouldClear, numPosts, curNum) {
  if (shouldClear)
    postList.innerHTML = "";
  //console.log(postsByDate.length, curNum);


  // console.log(postsByDate);
  //   if(gender != "both")
  //   {
  //     for(var i = 0; i < postsByDate.length; i++)
  //     {
  //       console.log(gender);

  //       for(var a = 0; a < postsByDate[i].posts.length; a++)
  //       {
  //         console.log(gender);
  //         usersData.forEach(user => {
  //           if(user.id == postsByDate[i].posts[a].data().userid)
  //           {
  //             console.log(gender);
  //             console.log(user, postsByDate[i].posts[a], postsByDate[i]);

  //             if ((gender == "male" && !user.data().isMale) || (gender == "female" && user.data().isMale))
  //             { 
  //               postsByDate[i].posts = postsByDate[i].posts.splice(a, 1);
  //               console.log(postsByDate[i].posts);
  //               console.log(a, gender, user.id, user.data().isMale);
  //             }
  //             if(postsByDate[i].posts.length == 0)
  //               postsByDate = postsByDate.splice(i, 1);
  //           }

  //         })
  //       }
  //     }
  //   }



  //filter postsByDate
  tempPosts = [];

  for (var i = 0; i < postsByDate.length; i++) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var thisDate = new Date(postsByDate[i].year, months.indexOf(postsByDate[i].month), postsByDate[i].day);

    if (thisDate <= startDate) {
      if (postsByDate[i].posts.length > 0)
        tempPosts.push(postsByDate[i]);

    }
  }

  postsByDate = tempPosts;
  console.log(numPosts, curNum, postsByDate.length);



  if (postsByDate.length < curNum) {
    if (numPosts > postsByDate.length) {
      numPosts = postsByDate.length;
      curNum = postsByDate.length;
    }
    else {
      numPosts -= curNum - postsByDate.length;
      curNum = postsByDate.length;
    }

  }

  console.log(postsByDate);




  //loop through dates
  for (var i = curNum - numPosts; i < curNum; i++) {

    console.log("hi");

    //add date to postsList and divs
    postList.innerHTML += `<div class = "dateSection" style = "  margin-bottom: 50px;">
		          <h1 class = "dateTitle">${postsByDate[i].dayName} ${postsByDate[i].month} ${postsByDate[i].day}, ${postsByDate[i].year}</h1>
		          <div class = "row">

		            <div id = "${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}selected" class = "col-sm-4 selectedRun" style = "">
		            </div>
		            <div class = "col-xl-8 activities" style = "">
		            </div>
		          </div>
		          </div>
		            `;
    postsByDate[i].posts = mergeSortAlpha(postsByDate[i].posts);
    //add posts of date to activities section
    for (var j = 0; j < postsByDate[i].posts.length; j++) {

      const post = postsByDate[i].posts[j].data();
      var li = ``





      if (post.userid != null) {
        var totalDist = 0;
        var totalTime = 0;
        var totalHours = 0;
        var totalMinutes = 0;
        var totalSeconds = 0;
        post.segments.forEach(segment => {
          if (segment.distance != 0) {
            if (!segment.miles) {
              totalDist += parseFloat(segment.distance) * 0.000621371;
            }
            else {
              totalDist += parseFloat(segment.distance);
            }
            totalTime += segment.hours * 3600;
            totalTime += segment.mins * 60;
            totalTime += segment.secs;
            totalHours = Math.trunc(totalTime / 3600);
            totalMinutes = Math.trunc((totalTime % 3600) / 60);
            totalSeconds = (totalTime % 3600) % 60;
          }

        });


        var postPfpUrl;
        usersData.forEach(user => {
          if (user.id == post.userid) {
            postPfpUrl = user.data().pfp;
          }
        });


        li = `
						<a id = "${postsByDate[i].posts[j].id}" class = "runPost ${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}" style = "cursor: pointer">
						<li class = "postItem"  id = "${post.userid}" >`;


        li += `
								<img  class = "postPfp topPfp" src = "${postPfpUrl}" width = "40px" height = "40px" style = "border-radius:50%; margin-top: 5px;">
								<div  class="postTitle topName" style = "font-size: 14px">  ${post.first} <br>${post.last} <br> </div>
								<div ></div>
								<div class = "postName"></div>
                <div id = "${postsByDate[i].posts[j].id}" class = "postDetails" style = "display: none">`;


        li += `
								<table class = "postTable" style = "border-collapse: collapse; width: 100%; position: relative; z-index: 1">
                <tr>`

        li += `<th colspan = "4" class = "topRow noBorder"><img class = "postPfp" src = "${postPfpUrl}" width = "40px" height = "40px" style = "border-radius:50%; margin-top: 5px;">`
        if (curUser.id == post.userid || curUser.data().isAdmin || curUser.data().isMod) {
          li += `<button id = "${postsByDate[i].posts[j].id}" class="editPost" style = "margin-right: 30px; padding: 10px;" > <i id="${postsByDate[i].posts[j].id}" class="fas fa-pen fa-xs"></i></button > <button id = "${postsByDate[i].posts[j].id}" class="removePost" style="padding: 10px;"><i id = "${postsByDate[i].posts[j].id}" class="far fa-trash-alt fa-sm"></i></button>`;
        }
        li += `
                  <div class="postTitle" style = "font-size: 24px; color: white;">  <span class = "postNameSpan" style = "line-height: 45px;">${post.first} ${post.last}</span> </div></th>
								</tr>
								<tr >
									<th class = "noBorder">Name</th>
									<th class = "noBorder">Distance</th>
									<th class = "noBorder">Time</th>
									<th class = "noBorder">Pace</th>
								</tr>
								`;

        post.segments.forEach(segment => {
          if (segment.distance != 0) {
            var unit = "mi";
            if (!segment.miles) {
              unit = "m"
            }

            var time = 0;
            time += segment.hours * 3600;
            time += segment.mins * 60;
            time += segment.secs;
            segment.hours = Math.trunc(time / 3600);
            segment.mins = Math.trunc((time % 3600) / 60);
            segment.secs = (time % 3600) % 60;

            var timeString = getTimeStr(segment.hours, segment.mins, segment.secs);


            var hour = 0;
            var minute = 0;
            var second = 0;
            time = 0;
            var distance = 0;
            var pace;
            var minpace;
            var secpace;

            if (segment.distance != 0) {

              if (!segment.miles) {
                distance = parseFloat(segment.distance) * 0.000621371;
              }
              else {
                distance = parseFloat(segment.distance);
              }
              time += segment.hours * 3600;
              time += segment.mins * 60;
              time += segment.secs;

              pace = time / distance;
              minpace = Math.trunc(pace / 60);
              secpace = Math.trunc(pace % 60);
              if (secpace < 10)
                secpace = "0" + secpace;
            }



            li += `
		                  <tr>
		                    <td class = "noBorder">${segment.name}</td>
		                    <td class = "noBorder">${segment.distance} ${unit}</td>
		                    <td class = "noBorder">${timeString}</td>
		                    <td class = "noBorder">${minpace}:${secpace}</td>
		                  </tr>

		                  `
          }
        });

        var timeString = getTimeStr(totalHours, totalMinutes, totalSeconds);

        var totalpace;
        var totalminpace;
        var totalsecpace;

        totalpace = totalTime / totalDist;
        totalminpace = Math.trunc(totalpace / 60);
        totalsecpace = Math.trunc(totalpace % 60);
        if (totalsecpace < 10)
          totalsecpace = "0" + totalsecpace;

        li += `
											<tr>
												<td class = "noBorder"><b>Total:</b></td>
												<td class = "noBorder"><b>${totalDist.toFixedDown(2)} mi</b></td>
												<td class = "noBorder"><b>${timeString}</b></td>
												<td class = "noBorder"><b>${totalminpace}:${totalsecpace}</b></td>
											</tr>
											</table>
											`;
        if ('elevation' in post && post.elevation) {
          li += `
												<div class="" style = "padding-top: 10px; padding-left: 15px;">Elevation Gain: ${post.elevation} ft</div>
											`
        }
        if (post.description.length) {
          li += `<div class="" style = "padding-top: 10px; padding-left: 15px;">Notes: ${post.description} </div>
										</li>
										</a>
									`;
        }

      }
      var activites = document.querySelectorAll(".activities");
      activites[i].innerHTML += li;







    }

    //var activites = document.querySelectorAll(".activities");

    //selected[i].innerHTML = postsByDate[i].posts[0]


    // = document.querySelectorAll(".postItem")[0].innerHTML;
    //document.querySelectorAll(".postDetails")[0].style.display = "block";

  }

  if (postsByDate.length > curNum) {
    var loadmorebutton = `<div style = "width: 100%; display: flex; justify-content: center">
                        <a class = "loadmorebutton formButton" style = "margin-top: 10px; color: white !important;">Load More</a>
                        </div>
                        `
    postList.innerHTML += loadmorebutton;

    var loadmorebuttons = document.getElementsByClassName("loadmorebutton");

    loadmorebuttons[loadmorebuttons.length - 1].addEventListener("click", (e) => {
      e.preventDefault();
      e.target.style.display = "none";
      if (loadmorebuttons.length > 1) {
        console.log("hi")
        loadmorebuttons[loadmorebuttons.length - 2].style.display = "none";
      }

      setActivities(postList, curUser, postsByDate, startDate, false, numPosts, curNum + numPosts)
    });

  }




  for (var i = curNum - numPosts; i < curNum; i++) {
    var runPosts = document.querySelectorAll(".runPost");

    for (var k = 0; k < runPosts.length; k++) {
      if (runPosts[k].classList.contains(`${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}`)) {
        var selected = document.querySelectorAll(".selected");
        var runPosts = document.querySelectorAll(".runPost");
        var postItems = document.querySelectorAll(".postItem");
        var topPfps = document.querySelectorAll(".topPfp");
        var topNames = document.querySelectorAll(".topName");
        var postDetails = document.querySelectorAll(".postDetails");
        postDetails[k + i].style.display = "block";
        topPfps[k + i].style.display = "none";
        topNames[k + i].style.display = "none";
        var postTitles = postItems[k].querySelectorAll(".postTitle");
        var org = postTitles[0];
        org.style.fontSize = "20px";

        var selectedRun = document.querySelector(`#${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}selected`)

        selectedRun.innerHTML = postItems[k].innerHTML;
        //if($(`#${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}selected`).find('i').length > 0)
        //  $(`#${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}selected`).find('i')[0].remove();
        selectedRun.style.borderLeft = "none";
        //document.querySelector(`#${postsByDate[i].month}${postsByDate[i].day}${postsByDate[i].year}selected`).style.borderTop = "10px solid rgb(30, 144, 255)";

        if (selectedRun.querySelectorAll(".postTable")[0].offsetWidth > selectedRun.querySelectorAll(".postDetails")[0].offsetWidth) {
          runPosts[k].parentElement.style.paddingLeft = (20 + selectedRun.querySelectorAll(".postTable")[0].offsetWidth - selectedRun.querySelectorAll(".postDetails")[0].offsetWidth) + "px";
        }

        postItems[k].classList.add("curSelected");
        org.style.fontSize = "14px";
        postDetails[k + i].style.display = "none";
        topPfps[k + i].style.display = "block";
        topNames[k + i].style.display = "block";
        break;
      }
    }
  }





  document.querySelector("#dashPostsLoading").style.display = "none";
  //document.querySelectorAll(".posts")[0].style.display = "block";

  addPostListeners();





  //click listeners to change selected post
  var runPosts = document.querySelectorAll('.runPost');



  for (var i = 0; i < runPosts.length; i++) {
    runPosts[i].addEventListener("click", function (e) {
      e.preventDefault();


      if (this.children[0].classList.length == 1) {

        for (var i = 0; i < runPosts.length; i++) {
          console.log(this.classList[1]);
          if (runPosts[i].classList.contains(this.classList[1])) {
            if (runPosts[i].children[0].classList.contains("curSelected"))
              runPosts[i].children[0].classList.remove("curSelected")
            var selectedRuns = document.querySelectorAll('.selectedRun');
            for (var j = 0; j < selectedRuns.length; j++) {
              if (selectedRuns[j].id == (this.classList[1] + "selected")) {
                var postDetails = this.querySelectorAll(".postDetails");
                var postTitles = this.querySelectorAll(".postTitle");
                var postTable = this.querySelectorAll(".postTable");
                var topPfps = this.querySelectorAll(".topPfp");
                var org = postDetails[0];
                var org2 = postTitles[0];
                var org3 = topPfps[0];
                var org4 = postTable[0];

                org2.style.display = "none";
                org3.style.display = "none";

                org.style.display = "block";

                selectedRuns[j].innerHTML = this.children[0].innerHTML;
                //if($(selectedRuns[j]).find('i').length > 0)
                //  $(selectedRuns[j]).find('i')[0].remove();
                org.style.display = "none";
                org2.style.display = "block";
                org3.style.display = "block";
                this.children[0].classList.add("curSelected");

                console.log(parseInt(this.parentElement.style.paddingLeft.substring(0, this.parentElement.style.paddingLeft.indexOf("p"))));

                if (selectedRuns[j].querySelectorAll(".postTable")[0].offsetWidth > selectedRuns[j].querySelectorAll(".postDetails")[0].offsetWidth) {
                  console.log(this.parentElement);
                  this.parentElement.style.paddingLeft = (20 + selectedRuns[j].querySelectorAll(".postTable")[0].offsetWidth - selectedRuns[j].querySelectorAll(".postDetails")[0].offsetWidth) + "px";
                }
                else if (parseInt(this.parentElement.style.paddingLeft.substring(0, this.parentElement.style.paddingLeft.indexOf("p"))) > 40) {
                  this.parentElement.style.paddingLeft = "20px"
                }

                addPostListeners();
                break;
              }
            }
          }
        }
      }

      // for (var i = 0; i < postItems.length; i++) {
      //   if(postItems[i].classList.contains("curSelected"))
      //
      // }
      // postItems[i].classList.add("curSelected");
    });

  }




}

function setUpEditSection() {
  var editpost;
  postsData.forEach(post => {
    console.log(post, editid)
    if (post.id == editid)
      editpost = post;
  });

  document.getElementById("newRunButton").style.display = "none";


  addAmPmListeners();
  document.getElementById("postTitle").innerHTML = "Edit Run";
  document.getElementById("description").value = editpost.data().description;
  document.getElementById("month").value = editpost.data().month;
  document.getElementById("day").value = editpost.data().day;
  document.getElementById("year").value = editpost.data().year;
  document.getElementById("elevation").value = editpost.data().elevation;

  document.getElementById("time").value = editpost.data().hour + ":" + editpost.data().minute;
  if (ampm) document.getElementById("am").classList.add("active")
  else document.getElementById("pm").classList.add("active");

  var segmentHTML = "";

  editpost.data().segments.forEach(doc => {
    segmentHTML = `
          <div class = "segment">
            <div class="container" style = "background: rgb(230,230,230); padding: 20px; ">
              <div class="row">
                <div class="col-sm" >
                <div class="row">

                    <div class="col-sm" style = "padding: 0" >
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                      <input autocomplete="off" value = "${doc.name}" class = "name" placeholder="&nbsp;" type = "text">
                      <span class="labeldark">Segment Name</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    <div class = "segmentNameError error">Please enter a segment name</div>

                    </div>
                  </div>
                </div>
                <div class="col-sm" >
                <div class="row">

                    <div class="col-sm" style = "padding: 0" >
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                      <input autocomplete="off" value = "${doc.distance}" class = "distance" placeholder="&nbsp;" min = "0" type = "number" step = "0.01">
                      <span class="labeldark">Distance</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    <div class = "distanceError error">Invalid distance</div>

                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                <div class="btn-group milesMetersGroup" role="group" aria-label="" style = "height: 40px; margin-top: 10px; ">`
    if (doc.miles) {
      segmentHTML += `<button type="button" class="btn btn-secondary miles active">Miles</button>
                  <button type="button" class="btn btn-secondary meters">Meters</button>`
    }
    else {
      segmentHTML += `<button type="button" class="btn btn-secondary miles">Miles</button>
                  <button type="button" class="btn btn-secondary meters active">Meters</button>`
    }
    segmentHTML += `</div>

                </div>
                <div class="col-sm">
                <div class="row">

                    <div class="col-sm" style = "padding:0">

                      <label for="inpdark" class="inpdark" style = "width: 90%">
                          <input autocomplete="off" value = "${doc.hours}"class = "hours" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                        <span class="labeldark">Hours</span>
                        <span class="focus-bgdark"></span>
                      </label>
                    </div>
                    <div class="col-sm" style = "padding:0">
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                        <input autocomplete="off" value = "${doc.mins}" class = "minutes" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                      <span class="labeldark">Minutes</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    </div>
                    <div class="col-sm" style = "padding:0">
                    <label for="inpdark" class="inpdark" style = "width: 90%">
                        <input autocomplete="off" value = "${doc.secs}" class = "seconds" placeholder="&nbsp;" value = "0"  type = "number" min = "0" >
                      <span class="labeldark">Seconds</span>
                      <span class="focus-bgdark"></span>
                    </label>
                    </div>
                  </p>
                  <div class = "runTimeError error" style = "width: 100%">Invalid Time</div>
                </div>
              </div>
              <div class="col-sm-1" style = "margin: auto 0; ">
                  <a style = "color: rgb(30, 144, 255); position: relative; cursor:pointer;  top: -3px; font-size: 30px;" class="remove">&#10006</a>
              </div>
            </div>
          </div>
          </div>
          `;
    segmentsForm.appendChild($.parseHTML(segmentHTML)[1]);
    segmentsForm.appendChild($.parseHTML(addHTML)[1]);
    addHtmls = document.querySelectorAll(".addhtml");
    addHtmls[addHtmls.length - 2].style.display = "none";
    addListeners();

  });

  document.getElementById("submitPost").innerHTML = "Save";






}

function addAmPmListeners() {
  var am = document.querySelector("#am");
  var pm = document.querySelector("#pm");
  am.addEventListener("click", e => {
    e.preventDefault();
    am = document.querySelector("#am");
    pm = document.querySelector("#pm");
    am.classList.add("active");
    pm.classList.remove("active");
  });

  pm.addEventListener("click", e => {
    e.preventDefault();
    am = document.querySelector("#am");
    pm = document.querySelector("#pm");
    pm.classList.add("active");
    am.classList.remove("active");
  });

}

function resetEditID() {
  editid = "";
}

function addGenderGroupListeners() {
  var genders = [document.getElementsByClassName("both")[0], document.getElementsByClassName("male")[0], document.getElementsByClassName("female")[0]]

  genders.forEach(gender => {
    gender.addEventListener("click", e => {
      e.preventDefault();
      refreshAll();
      e.target.classList.add("active");
    })
  });

  const refreshAll = () => {
    genders.forEach(gender => {
      gender.classList.remove("active");
    })
  }

}

function getPostsByDate(gender) {

  //postsByDate contains objects of dates and corresponding posts
  var postsByDate = [];

  //loop through all posts
  postsData.forEach(doc => {

    var isBanned = false;
    usersData.forEach(user => {
      if (doc.data().userid != null && doc.data().userid == user.id) {
        if (user.data().isBanned)
          isBanned = true;
      }
    });

    if (!isBanned) {
      //boolean if date is already put into array
      var isPut = false;

      var user;
      usersData.forEach(u => {
        if (u.id == doc.data().userid)
          user = u
      });

      //check where date is already there and add it to corresponding posts
      for (var i = 0; i < postsByDate.length; i++) {
        if ((doc.data().day == postsByDate[i].day) && (doc.data().month == postsByDate[i].month) && (doc.data().year == postsByDate[i].year)) {


          console.log(gender, user.data().isMale, doc);

          if (gender == "both" || (gender == "male" && user.data().isMale) || (gender == "female" && !user.data().isMale)) {
            postsByDate[i].posts.push(doc);
            isPut = true;

          }

        }
      }

      //if date is not already there
      if (!isPut && (gender == "both" || (gender == "male" && user.data().isMale) || (gender == "female" && !user.data().isMale))) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var newDate = new Date(doc.data().year, months.indexOf(doc.data().month), doc.data().day);
        //since date is not already there add a new object to postsByDate
        postsByDate.push({
          date: doc.data().date,
          dayName: days[newDate.getDay()],
          day: doc.data().day,
          month: doc.data().month,
          year: doc.data().year,
          posts: [doc]
        });
      }
    }


  });
  return postsByDate;
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

function handleInitialLoad() {
  var teamPosts = [];
  var teamRoutes = [];
  userTeamCode = curUser.data().teamCode;
  if (getCookie("teamCode") != userTeamCode) createCookie("teamCode", userTeamCode, 365);

  console.timeEnd('a');
  if (userTeamCode != "") {
    $("#sidebar-wrapper").css("display", "block");
    $(".pageLink").css("display", "block");
    postsData.forEach(doc => {
      if (doc.data().teamCode == curUser.data().teamCode) {
        teamPosts.push(doc);
      }
    });
    routesData.forEach(doc => {
      if (doc.data().teamCode == curUser.data().teamCode) {
        teamRoutes.push(doc);
      }
    });
    routesData = teamRoutes;
    postsData = teamPosts;
    if (!curUser.data().isBanned) {
      setPosts();
    }
    else {
      document.querySelector("#dashPostsLoading").style.display = "none";
      document.querySelectorAll(".posts")[0].style.display = "block";
      document.querySelectorAll(".posts")[0].innerHTML = `
	            <div class = "row" style = "display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 70vh;">
	            <div style = "width: 50%; background: rgb(230,230,230); padding: 100px;">
	            <h1 style = "font-weight:bold; font-size: 50px;">Welcome ${curUser.data().first}!</h1>
	            <h5 style = "margin-top: 25px; font-size: 30px;">You have been banned from your team. Please contact your Team Admin</h5>
	            </div>
	            </div>
	              `;

    }
  }
  else {
    var pfpN = document.getElementById("pfpNav");
    pfpN.style.display = "inline-block";
    $("#wrapper").css(
      "background",
      "linear-gradient(162deg, rgba(30,144,255,1) 0%, rgba(0,57,157,1) 100%)"
    );


    var joinTeamSection = document.getElementById("joinTeamSection");
    joinTeamSection.style.padding = "0";
    var banner = `
        <div class = "joinContainer" style = "display: none; padding: 0 15%; ">
					<div class = "row bannerDiv no-gutters boxShadow" style = " margin-right: 0 !important; border-radius: 20px; background: white; align-items: center; text-align: center; min-height: 70vh; margin-top:25px;">
          <div class = "col-md-6">
          <div class = "banner" style = " background: white; padding-left: 25px; width: 100%; border-radius: 20px;">
					<h1 class = "bannerHead" style = "font-weight:bold; font-size: 50px;">Welcome ${
      curUser.data().first
      }!</h1>
					<form id = "memberForm" novalidate style = "margin-left: 20%; width: 60%;">
						<h1 style = "font-size: 36px;" class = "formTitle">Join your team:</h1>
						<div class="input-field" id = "teamCodeField">
								<label for="inp" class="inpdark" style = "margin-top: 20px">
									<input autocomplete="off" type="text" for = "memberForm" id="teamcode" placeholder="&nbsp;">
									<span class="labeldark">Team Code</span>
									<span class="focus-bgdark"></span>
								</label>
								<div id = "teamCodeError" class = "error" style = "display: block"></div>
								</div>
						<button id = "teamCodeButton" type = "submit" class="formButton">Join</button>
						<a style = "width: 100%; display: block" id = "newTeam">Create a new team?</a>
					</form>
          </div>
          </div>
          <div class = "col-md-6">
            <img src = "../images/fitness.svg" style = "width: 80%;">
          </div>
          </div>
          </div>
						`;
    joinTeamSection.innerHTML = banner;

    var dashPostsLoading = document.getElementById("dashPostsLoading");
    dashPostsLoading.style.display = "none";
    joinTeamSection.style.display = "block";
    setTimeout(function () {

      toggleOpacity(".joinContainer", ".bannerDiv", "block");
    }, 100);
    var newTeam = document.getElementById("newTeam");
    newTeam.addEventListener("click", e => {
      var memberForm = document.getElementById("memberForm");
      memberForm.innerHTML = `<h1 style = "font-size: 36px;" class = "formTitle">Create Team:</h1>
					<div class="input-field" id = "teamNameField">
							<label for="inp" class="inpdark" style = "margin-top: 20px">
								<input autocomplete="off" type="text" for = "memberForm" id="teamname" placeholder="&nbsp;">
								<span class="labeldark">Team Name</span>
								<span class="focus-bgdark"></span>
							</label>
							<div id = "teamNameError" class = "error" style = "display: block"></div>
							</div>
					<button id = "teamNameButton" type = "submit" class="formButton">Create</button>`;
      memberForm.addEventListener("submit", e => {
        e.preventDefault();
        document.getElementById('teamNameButton').style.backgroundColor = "rgb(150, 150, 150)";
        document.getElementById('teamNameButton').style.borderColor = "rgb(150, 150, 150)";
        var currentTeam = "";
        var teamName;
        teamName = document.querySelector("#teamname").value.trim();

        if (teamName == "") {

          document.getElementById('teamNameButton').style.borderColor = "rgb(30, 144, 255)";
          document.getElementById('teamNameButton').style.backgroundColor = "rgb(30, 144, 255)";
          document.querySelector("#teamNameError").innerHTML = `<p style = "color:red; height: 0;">Please enter a team name</p>`;
        }
        else {
          var teamCode = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var numbers = '0123456789';
          var charactersLength = characters.length;
          for (var i = 0; i < 3; i++) {
            teamCode += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          for (var i = 0; i < 1; i++) {
            teamCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
          }
          curUser.ref.update({
            teamCode: teamCode,
            teamName: teamName,
            isAdmin: true
          }).then(function () {
            db.collection("teams")
              .add({
                name: teamName,
                teamCode: teamCode,
                adminID: "",
                members: []
              }).then(() => {
                axios.post("https://cors-anywhere.herokuapp.com/https://us-central1-teamrunsemail.cloudfunctions.net/email/email/welcome", { to: curUser.data().email, teamCode: teamCode, firstName: curUser.data().first }).then(res => {
                  window.location.href = "./dashboard";
                  document.getElementById('teamNameButton').style.borderColor = "rgb(30, 144, 255)";
                  document.getElementById('teamNameButton').style.backgroundColor = "rgb(30, 144, 255)";
                })

              })
          });

        }



        // else {
        // 	curUser.ref.update({
        // 		teamCode: teamCode,
        // 		teamName: currentTeam.name
        // 	}).then( function(){
        // 		window.location.href = "./dashboard";
        // 		document.getElementById('teamCodeButton').style.borderColor = "rgb(30, 144, 255)";
        //     document.getElementById('teamCodeButton').style.backgroundColor = "rgb(30, 144, 255)";
        //
        // 	});
        //
        //
        // }


      });
    });

    var memberForm = document.getElementById("memberForm");
    memberForm.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById('teamCodeButton').style.backgroundColor = "rgb(150, 150, 150)";
      document.getElementById('teamCodeButton').style.borderColor = "rgb(150, 150, 150)";
      var currentTeam = "";
      var teamCode;
      teamCode = document.querySelector("#teamcode").value.trim().toUpperCase();

      for (var i = 0; i < teamsData.length; i++) {
        if (teamsData[i].data().teamCode == teamCode) {

          currentTeam = teamsData[i].data();
        }

      }

      if (currentTeam == "") {

        document.getElementById('teamCodeButton').style.borderColor = "rgb(30, 144, 255)";
        document.getElementById('teamCodeButton').style.backgroundColor = "rgb(30, 144, 255)";
        document.querySelector("#teamCodeError").innerHTML = `<p style = "color:red; height: 0;">Please enter a valid team code</p>`;
      }
      else {
        curUser.ref.update({
          teamCode: teamCode,
          teamName: currentTeam.name
        }).then(function () {
          axios.post("https://cors-anywhere.herokuapp.com/https://us-central1-teamrunsemail.cloudfunctions.net/email/email/welcome", { to: curUser.data().email, teamCode: teamCode, firstName: curUser.data().first }).then(res => {
            window.location.href = "./dashboard";
            document.getElementById('teamCodeButton').style.borderColor = "rgb(30, 144, 255)";
            document.getElementById('teamCodeButton').style.backgroundColor = "rgb(30, 144, 255)";
          })
          window.location.href = "./dashboard";


        });


      }


    });
  }
}

function toggleNav() {
  document.querySelectorAll(".navbar-toggler")[0].click();
}

function addPostListeners() {
  var removePostButtons = document.querySelectorAll(".removePost");
  for (var i = 0; i < removePostButtons.length; i++) {
    removePostButtons[i].addEventListener("click", function (e) {
      console.log(e.target);
      e.preventDefault();
      Delete(e.target);

    });
  }

  var editPostButtons = document.querySelectorAll(".editPost");
  for (var i = 0; i < editPostButtons.length; i++) {
    editPostButtons[i].addEventListener("click", function (e) {
      console.log(e.target);
      e.preventDefault();
      Edit(e.target);

    });
  }
}
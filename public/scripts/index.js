// DOM elements

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');



const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().bio}</div>
      `;
      accountDetails.innerHTML = html;
    });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    //accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

$(document).ready(function() {

    $(window).scroll( function(){
      var $animation_elements = $('.fadein');
      var $animation_elements2 = $('.fadeup');
      for (var i = 0; i < $animation_elements.length; i++) {
        var $element = $($animation_elements[i]);

        var bottom_of_window = $(window).scrollTop() + window.innerHeight/3*2;
        var bottom_of_element = $element.offset().top;



        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_element ){

            $element.animate({'opacity':'1','margin-left':'0px'},1000);

        }
      }
      for (var i = 0; i < $animation_elements2.length; i++) {
        var $element = $($animation_elements2[i]);

        var bottom_of_window = $(window).scrollTop() + window.innerHeight/3*2;
        var bottom_of_element = $element.offset().top;



        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_element ){

            $element.animate({'opacity':'1','margin-bottom':'0px'},1000);

        }
      }





    });
    var $animation_elements = $('.fadein');
    for (var i = 0; i < $animation_elements.length; i++) {
      var $element = $($animation_elements[i]);

      var bottom_of_window = $(window).scrollTop() + window.innerHeight/3*2;
      var bottom_of_element = $element.offset().top;



      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_element ){

          $element.animate({'opacity':'1','margin-left':'0px'},1000);

      }
    }
    var $animation_elements2 = $('.fadeup');
    for (var i = 0; i < $animation_elements2.length; i++) {
      var $element = $($animation_elements2[i]);

      var bottom_of_window = $(window).scrollTop() + window.innerHeight/3*2;
      var bottom_of_element = $element.offset().top;



      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_element ){

          $element.animate({'opacity':'1', bottom: '0'},200);

      }
    }

    if(window.innerWidth < 1200)
    {
      $(".outerBox").css("padding", "0");
      //$(".outerBox").css("margin", "auto");
      $(".outerBox").css("marginTop", "0");
      $(".outerBox").css("paddingBottom", "13vh");
      $(".heroTagBox").css({
    margin: "auto"});
    $(".heroTagBox").css({height: "74vh"});
    $(".heroTagBox").css({width: "75%"});
    $(".homeimgside").css({
      width: "100%",
      padding: "0"

    });



    }

});

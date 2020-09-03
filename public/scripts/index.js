//check safari
if(isSafari || isIE)
{
  console.log("safari");
  $(".bottomBackground").css({ "background": "url(\"./images/eluid.jpg\") no-repeat", "background-position": "bottom", "background-size": "cover"});
  $(".background").css({ "background": "url(\"./images/xcphoto.jpeg\") no-repeat", "background-position": "bottom", "background-size": "cover" });
  $(".centerContainer").css("height", "inherit");
}

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

  heroFades();

    $(window).scroll( function(){
      var $animation_elements = $('.fadein');
      var $animation_elements2 = $('.fadeup');
      for (var i = 0; i < $animation_elements.length; i++) {
        var $element = $($animation_elements[i]);

        var bottom_of_window = $(window).scrollTop() + window.innerHeight/3*2;
        var bottom_of_element = $element.offset().top;



        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_element ){

            $element.animate({'opacity':'1','margin-left':'0px'},750);

        }
      }
      for (var i = 0; i < $animation_elements2.length; i++) {
        var $element = $($animation_elements2[i]);

        var bottom_of_window = $(window).scrollTop() + window.innerHeight/3*2;
        var bottom_of_element = $element.offset().top;



        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_element ){

            $element.animate({'opacity':'1','margin-top':'0px'},750);

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

    if(window.innerWidth < 700)
    {
      $(".outerBox").css("padding", "0");
      $(".bottomBackground").css("display", "none");
      $("#mobquote").css("display", "block");
      $("#mobquote").css("margin-left", "10%");
      $("#mobquote").css("margin-right", "10% !important");
      $("#mobquote").css("width", "80%");
      $(".centerContainer").css("height", "auto");
      $("#mobquotetext").css("padding", "0");
      //$(".outerBox").css("margin", "auto");
      $(".outerBox").css("marginTop", "0");
      $(".outerBox").css("paddingBottom", "13vh");
      $(".signupback").css("clip-path", "none");
      $(".signupback").css("margin-top", "0");
      $(".heroTagBox").css({margin: "auto"});
    $(".heroTagBox").css({height: "74vh"});
    $(".heroTagBox").css({width: "75%"});
    $(".homeimgside").css({
      width: "100%",
      padding: "0"

    });



    }

});

function heroFades(){
  $('#tagLineTextText1').css('opacity', '0');
  $('#tagLineText2').css('opacity', '0');
  $('#tagLineText3').css('opacity', '0');
  $('.tagText').css('opacity', '0');
  $('.tagTitle').css('opacity', '1');
  $('#tagLineText1').animate({ opacity: '1'}, 750);
  setTimeout(() => {
    $('#tagLineText2').animate({ opacity: '1' }, 750);
  }, 750)
  setTimeout(() => {
    $('#tagLineText3').animate({ opacity: '1' }, 750);
  }, 1500)
  setTimeout(() => {
    $('.tagtext').animate({ opacity: '1' }, 750);
  }, 2250)
}



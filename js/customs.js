function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

function login(){
                $(document).ready(function(){
                $("button").click(function(){
                $("#login").load("login.html");
                    });
                });
              }



  // With JQuery
$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
});

// Without JQuery
var slider = new Slider("#ex6");
slider.on("slide", function(sliderValue) {
	document.getElementById("ex6SliderVal").textContent = sliderValue;
});


$(document).on("pagecreate", function () {
  $("#foo").on("click", function () {
      // close button
      var closeBtn = $('<a href="#" data-rel="back" class="ui-btn-right ui-btn ui-btn-b ui-corner-all ui-btn-icon-notext ui-icon-delete ui-shadow">Close</a>');

      // text you get from Ajax
      var content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing. Morbi convallis sem et dui sollicitudin tincidunt.</p>";

      // Popup body - set width is optional - append button and Ajax msg
      var popup = $("<div/>", {
          "data-role": "popup"
      }).css({
          width: $(window).width() / 2.5 + "px",
          padding: 5 + "px"
      }).append(closeBtn).append(content);

      // Append it to active page
      $.mobile.pageContainer.append(popup);

      // Create it and add listener to delete it once it's closed
      // open it
      $("[data-role=popup]").popup({
          dismissible: false,
          history: false,
          theme: "b",
          /* or a */
          positionTo: "window",
          overlayTheme: "b",
          /* "b" is recommended for overlay */
          transition: "pop",
          beforeposition: function () {
              $.mobile.pageContainer.pagecontainer("getActivePage")
                  .addClass("blur-filter");
          },
          afterclose: function () {
              $(this).remove();
              $(".blur-filter").removeClass("blur-filter");
          },
          afteropen: function () {
              /* do something */
          }
      }).popup("open");
  });
});


$(function () {
  $("div").slice(0, 4).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $("div:hidden").slice(0, 4).slideDown();
      if ($("div:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 1500);
  });
});

$('a[href=#top]').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 600);
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('.totop a').fadeIn();
  } else {
      $('.totop a').fadeOut();
  }
});
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
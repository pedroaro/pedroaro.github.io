document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

var lastWindowWidth;


// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

/*Preloader*/
$(window).on('load', function() {
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 200);
});

$(document).ready(function($){
  $(".clickable-row").click(function() {
      window.location = $(this).data("href");
  });
  $('.datepicker').datepicker({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dd-mm-yyyy',
    container: 'body'
  });

  $('select').formSelect();
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  $('.fixed-action-btn').floatingActionButton();
  $('select').formSelect();
  $('.sidenav').sidenav({
    closeOnClick: true
    });
  $(window).resize(function() {
    var $window = $(this),
        windowWidth = $window.width();
    if( lastWindowWidth <= 992 && windowWidth > 992){
      $('.sidenav-overlay').css("display", "none");
    }
    lastWindowWidth = windowWidth;
  }); 
});


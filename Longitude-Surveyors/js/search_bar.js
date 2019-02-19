$(document).ready(function(){
   $("#search-input").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $(".all_card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
   });
 });
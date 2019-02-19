/*
* Form Validation
*/
$(function() {
  $("#formValidate").validate({
    rules: {
      hours: {
        required: true
      },
      dtp: {
        required: true
      },
      autocomplete_input: {
        required: true
      }
    },
    //For custom messages
    errorElement: 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });
});
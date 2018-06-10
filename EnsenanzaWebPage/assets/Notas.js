function VerNota(cantidad){
  var count = 0;
  console.log("hello");
  console.log(cantidad);

  if($('input[name=optradio1]:checked').val() == 1)
    count++;
  if($('input[name=optradio2]:checked').val() == 1)
    count++;
  if($('input[name=optradio3]:checked').val() == 1)
    count++;
  if($('input[name=optradio4]:checked').val() == 1)
    count++;
  if($('input[name=optradio5]:checked').val() == 1)
    count++;
  if($('input[name=optradio6]:checked').val() == 1)
    count++;
  if(cantidad == 7){
    if($('input[name=optradio7]:checked').val() == 1)
      count++;
    if (count > 5){
      $('#verygood-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'block');
      $('#good').css('display', 'none');
      $('#bad').css('display', 'none');
    }
    else if (count > 2 && count <= 5){
      $('#good-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'none');
      $('#good').css('display', 'block');
      $('#bad').css('display', 'none');
    }else{
      $('#bad-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'none');
      $('#good').css('display', 'none');
      $('#bad').css('display', 'block');
    }
  }else if(cantidad == 8){
    if($('input[name=optradio8]:checked').val() == 1)
      count++;
    if (count > 6){
      $('#verygood-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'block');
      $('#good').css('display', 'none');
      $('#bad').css('display', 'none');
    }
    else if (count > 3 && count <= 6){
      $('#good-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'none');
      $('#good').css('display', 'block');
      $('#bad').css('display', 'none');
    }else{
      $('#bad-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'none');
      $('#good').css('display', 'none');
      $('#bad').css('display', 'block');
    }
  }else if(cantidad == 6){
    console.log(count);
    if (count > 4){
      $('#verygood-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display','block');
      $('#good').css('display', 'none');
      $('#bad').css('display', 'none');
    }
    else if (count > 2 && count <= 4){
      $('#good-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'none');
      $('#good').css('display','block');
      $('#bad').css('display', 'none');
    }else{
      $('#bad-text').html("Tuviste "+ count + " de "+ cantidad+" preguntas buenas");
      $('#verygood').css('display', 'none');
      $('#good').css('display', 'none');
      $('#bad').css('display', 'block');
    }
  }
}
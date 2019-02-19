var data_autocomplete = {data: {
   "E87128": "images/profile_pics/8-Luis-Suarez-Marketing-Director.jpg",
   "E12993": "images/profile_pics/10-Daniel-Rodriguez-Senior-CADD-Technician.jpg",
   "E12I32": "images/profile_pics/3-Jackie-Subia-Comptroller.jpg"
 }
}

var data_autocomplete2 = {data: {
   "E14444": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Peter_Tauber_Portrait.jpg",
   "E98833": "https://digital.gov.ru/preview/c/fd5f5563c30e980b0228190cab3e4efa/256/x/256/uploaded/photos/1kuz_1.jpg",
   "E82930": "https://upload.wikimedia.org/wikipedia/commons/7/70/Soledad_Onetto-cuadrado.jpg"
 }
}

var projects_data = { 
 data: [
   {"id": "E87128", "name": "Pedro Alejandro", "last_name": "Rodriguez"},
   {"id": "E12993", "name": "Carlos Miguel", "clast_nameity": "Mora"},
   {"id": "E12I32", "name": "Cristina Iglesias", "last_name": "Medina"}
 ]
}

var employees_data2 = { 
   data: [
     {"id": "E14444", "name": "Esteban Miguel", "last_name": "Ramirez"},
     {"id": "E98833", "name": "Jose Machado", "clast_nameity": "Hurtado"},
     {"id": "E82930", "name": "Karol Alejandra", "last_name": "De Vivo"}
   ]
  }

$(document).ready(function($){
   $('#autocomplete-input_pm').autocomplete(data_autocomplete2);
   $('#autocomplete-input').autocomplete(data_autocomplete);
   $('#autocomplete-input_client').autocomplete(data_autocomplete2);
});
 
function add_project_manager(){
   var name = $('#autocomplete-input_pm').val()
   if(typeof data_autocomplete2.data[name] != null){
     var aux;
     $.each(employees_data2.data, function(i, v) {

       if (v.id == name) {
         aux = v;
         return;
       }
     });
     $("#projectm").val(aux.name+" "+aux.last_name)

     delete data_autocomplete2.data[name];
     $('#autocomplete-input_pm').val('');
     $('#autocomplete-input_pm').next().next().removeClass('active');

     $('#modal-manager').modal('close');

   }else{
     alert("This employee doesn't exist or is already taken")
   }
 }

 function add_client(){
   var name = $('#autocomplete-input_client').val()
   if(typeof data_autocomplete2.data[name] != null){
     var aux;
     $.each(employees_data2.data, function(i, v) {

       if (v.id == name) {
         aux = v;
         return;
       }
     });
     $("#client").val(aux.name+" "+aux.last_name)

     delete data_autocomplete2.data[name];
     $('#autocomplete-input_client').val('');
     $('#autocomplete-input_client').next().next().removeClass('active');
     $('#modal-client').modal('close');

   }else{
      alert("This employee doesn't exist or is already taken")
   }
 }

 function add_project_staff(){
   var name = $('#autocomplete-input').val()
   var occupation = $('#occupation').val()
   var timeP = $('#timeP').val()
   var error= 0;
   if(occupation == 1){
     occupation = "Field Crew";
   }else if (occupation == 2){
     occupation = "Field Manager";
   }else if (occupation == 3){
     occupation = "Drafter";
   }else if (occupation == 4){
     occupation = "Project Manager";
   }else{
     error = 1;
   }
 
   if(timeP<=0 || timeP>100 ){
     error = 1;
   }
 
   if(typeof data_autocomplete.data[name] != null){
     if(!error){
       $('.dataTables_empty').parent().remove();
       var aux;
       $.each(projects_data.data, function(i, v) {
         if (v.id == name) {
           aux = v;
           return;
         }
       });
       $("#datatable").find('tbody')
         .append($('<tr id="'+aux.id+'">')
             .append($('<td>')
               .text(aux.name+" "+aux.last_name)
             )
             .append($('<td>')
               .text(aux.id)
             )
             .append($('<td>')
               .text(occupation)
             )
             .append($('<td>')
               .text(timeP + "%")
             )
             .append($('<td>')
                 .append($('<a onclick="delete_project('+name+');" class="waves-effect btn-flat nopadding">')
                     .append($('<i class="material-icons">')
                         .text('remove_circle_outline')
                     )
                 )
             )
         );
 
       delete data_autocomplete.data[name];
       $('#autocomplete-input').val('');
       $('#autocomplete-input').next().next().removeClass('active');
       $('#occupation').val('');
       $('#occupation').formSelect();
 
       $('#add-project-modal').modal('close');
     }else{
       alert("Please fill all the fields correctly before assign project")
     }
   }else{
     alert("That project doesn't exist or is already assigned")
   }
 }
 
 function delete_project(val){
   console.log(val.id);
   var modal = "delete-project-modal"
   $('#'+modal).modal('open');
   $('#' + modal + '_YesBtn').click(function(){
     var aux;
     $.each(projects_data.data, function(i, v) {
       if (v.id == val.id) {
         aux = v;
         return;
       }
     });  
     if(aux){
       $('#datatable tr#'+val.id).remove();
       data_autocomplete.data[aux.name] = null;
     }
   })
   setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
 
 }
var data_autocomplete = {data: {
   "Cinemall": null,
   "Avila Burger": null,
   "Downtown Mall": null
 },
}

var projects_data = { 
 data: [
   {"id": "67829", "name": "Cinemall", "city": "Miami", "status": "QA"},
   {"id": "99872", "name": "Avila Burger", "city": "Orlando", "status": "Field"},
   {"id": "99428", "name": "Downtown Mall", "city": "Atlanta", "status": "Proposal"}
 ]
}
$(document).ready(function($){
   $('input.autocomplete').autocomplete(data_autocomplete);
});

function add_project(){
   var name = $('#autocomplete-input').val()
   if(typeof data_autocomplete.data[name] != 'undefined'){
     $('.dataTables_empty').parent().remove();
     var aux;
     $.each(projects_data.data, function(i, v) {
       if (v.name == name) {
         aux = v;
         return;
       }
     });
     $("#datatable").find('tbody')
       .append($('<tr id="'+aux.id+'">')
           .append($('<td>')
                   .text(aux.id)
               )
           .append($('<td>')
               .text(name)
           )
           .append($('<td>')
                   .text(aux.city)
               )
           .append($('<td>')
               .append($('<a onclick="delete_project('+aux.id+')" class="waves-effect btn-flat nopadding">')
                   .append($('<i class="material-icons">')
                       .text('remove_circle_outline')
                   )
               )
           )
       );
 
     delete data_autocomplete.data[name];
     var name = $('#autocomplete-input').val('')
   }else{
     alert("That project doesn't exist or is already taken")
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
 
   if(typeof data_autocomplete.data[name] != 'undefined'){
     if(!error){
       $('.dataTables_empty').parent().remove();
       var aux;
       $.each(projects_data.data, function(i, v) {
         if (v.name == name) {
           aux = v;
           return;
         }
       });
       $("#datatable").find('tbody')
         .append($('<tr id="'+aux.id+'">')
             .append($('<td>')
               .text(aux.id)
             )
             .append($('<td>')
               .text(name)
             )
             .append($('<td>')
               .text(occupation)
             )
             .append($('<td>')
               .text(timeP + "%")
             )
             .append($('<td>')
                 .append($('<a onclick="delete_project('+aux.id+')" class="waves-effect btn-flat nopadding">')
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
   console.log(val);
   var modal = "delete-project-modal"
   $('#'+modal).modal('open');
   $('#' + modal + '_YesBtn').click(function(){
     var aux;
     $.each(projects_data.data, function(i, v) {
       if (v.id == val) {
         aux = v;
         return;
       }
     });  
     if(aux){
       $('#datatable tr#'+val).remove();
       data_autocomplete.data[aux.name] = null;
     }
   })
   setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
 
 }
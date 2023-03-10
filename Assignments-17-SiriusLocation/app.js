// function Start
$(document).ready( function() {
    $( "#tabs" ).tabs();
    $( "#accordion" ).accordion();

$table = $("<table>");
$.getJSON('styles/assets/locations.json',function(element){
    element.forEach(data =>{
        $row = $(`<tr class = 'row' ><td><img src=${data.countryImage}></td>`+`<td>${data.state}</td>`+`<td>${data.city}</td>`+`<td>${data.contact}</td> </tr>` );
        $table.append($row);
    });
});

$("#tabs-3").append($table);

} );
console.log('Js rendered login');
'use strict'

$(document).ready(function() {
    console.log(' ready event fired');

    
$('#btnLogin').on('click', function(){
    var textValue = $('[name="uname"]').val();
    alert('Welcome  : ' + textValue);

});

});


function changeDialogBackGround(selectedColor) {
  switch(selectedColor){    
    case 'red':
      $('#btnLogin').css("background-color", 'red')
    break;
    case 'green':
      $('#btnLogin').css("background-color", '#4CAF50')
      break;
  }
}
changeDialogBackGround();
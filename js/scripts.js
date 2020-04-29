$(document).ready(function() {
  var height = parseInt(prompt("Please enter your height in inches."));

  if (height >= 60) {
    $("#Everyone").show();
    $("#Adults-Only").show();
  } else if (height >=48 && height <60) {
    $("#Everyone").show();
    $("#Kids-Only").show();
    $("#Babies-Only").show();
  } else if (height >=42 && height <48) {
    $("#Kids-Only").show();
    $("#Babies-Only").show();
  } else {
      $("#Babies-Only").show()
    }
});
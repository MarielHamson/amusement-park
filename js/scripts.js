$(document).ready(function() {
  var height = parseInt(prompt("Please enter your height in inches."));

  if (height >= 60) {
    $("#Everyone").addClass("allowed");
    $("#Adults-Only").addClass("allowed");
  } else if (height >=48 && height <60) {
    $("#Everyone").addClass("allowed");
    $("#Kids-Only").addClass("allowed");
    $("#Babies-Only").addClass("allowed");
  } else if (height >=42 && height <48) {
    $("#Kids-Only").addClass("allowed");
    $("#Babies-Only").addClass("allowed");
  } else {
      $("#Babies-Only").addClass("allowed")
    }
});
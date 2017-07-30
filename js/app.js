$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });
});

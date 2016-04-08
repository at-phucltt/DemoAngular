$(document).ready(function () {
  $(".menu_nav ul li").click(function(){
    $('li').removeClass('active');
    $(this).addClass("active");
  });
});
$(".scrollTop").click(function(){
  console.log("Hello");
  $('body, html').animate({scrollTop:0}, 600, 'swing');
  return false;
});
$(".About").click(function(){
  $('body, html').animate({scrollTop:$('#About').offset().top - 100}, 600, 'swing');
  return false;
});
$(".Menu").click(function(){
  $('body, html').animate({scrollTop:$('#Menu').offset().top - 100}, 600, 'swing');
  return false;
});
$(".Adress").click(function(){
  $('body, html').animate({scrollTop:$('#Adress').offset().top - 100}, 600, 'swing');
  return false;
});
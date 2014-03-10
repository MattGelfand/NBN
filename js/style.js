$(document).ready(function() { 
  $(".aside a").bind("click",function(event){ 
    event.preventDefault(); 

    var target = $(this).attr("href"); 
    
    $("html, body").stop().animate({ 
      scrollLeft: $(target).offset().left, scrollTop: $(target).offset().top }, 500); }); }); 
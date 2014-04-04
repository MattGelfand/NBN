$(function(){
  $('li a').on('click', function() {
    $('li a').css('background-color', '#2a2a2a');
    $(this).css('background-color', 'black');
  });

  $('#chev-left').on('hover', function(){
    $('.drawer-left').toggleClass('active');
  });

   $('#chev-right').on('hover', function(){
    $('.drawer-right').toggleClass('active');
  });

});

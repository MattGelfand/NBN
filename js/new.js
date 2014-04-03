$(function(){

 /* var offset = 90;
  var first = $('#main > div').first();

  // any time you click a section, run this code
  $('#main > div').on('click', function(){
    var width = $(this).width() - offset;
    var index = $(this).prevAll().length;

    // shift first element left
    first.css({ marginLeft: -(width*index) });
    // make all other ones lighter
    $('#main > div').css({ opacity: .5 })
    // make the current one darker
    $(this).css({ opacity: 1 })
  });*/

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

$(function(){

  var offset = 70;
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
  });

});

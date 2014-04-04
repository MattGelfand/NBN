 $(function(){

  var offset = 70;
  var first = $('#inner > div').first();

  // any time you click a section, run this code
  $('#inner > div').on('mouseover', function(){
    var width = $(this).width() - offset;
    var index = $(this).prevAll().length;

    // shift first element left
    first.css({ marginLeft: -(width*index) });
    // make all other ones lighter
    $('#inner > div').css({ opacity: .5 })
    // make the current one darker
    $(this).css({ opacity: 1 })
  });

    $("nav li:first-child").click(function(){
    $('#viewport h4').html("Latest");
    });

    $("nav li:nth-child(2)").click(function(){
    $('#viewport h4').html("Features");
    });

    $("nav li:nth-child(3)").click(function(){
    $('#viewport h4').html("Politics");
    });

    $("nav li:nth-child(4)").click(function(){
    $('#viewport h4').html("Sports");
    });

    $("nav li:nth-child(5)").click(function(){
    $('#viewport h4').html("Entertainment");
    });

    $("nav li:nth-child(6)").click(function(){
    $('#viewport h4').html("Life & Style");
    });

    $("nav li:nth-child(7)").click(function(){
    $('#viewport h4').html("Opinion");
    });

    $("nav li:nth-child(8)").click(function(){
    $('#viewport h4').html("Multimedia");
    });

    $("nav li:nth-child(9)").click(function(){
    $('#viewport h4').html("Writer's Spotlight");
    });

});




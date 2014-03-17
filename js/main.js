$(document).ready(function() {

  // set all main panel to window height
  size_panels();

  // reset panel height on resize
  $(window).on('resize', size_panels);

  function size_panels(){
    $('body > div').css('height', window.innerHeight);
  }

  $(".aside a").on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr("href");

    $("html, body").stop().animate({
      scrollLeft: $(target).offset().left - 200,
      scrollTop: $(target).offset().top
    }, 500);

  });

});

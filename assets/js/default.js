//Wait until all assets are loaded (images, fonts, etc...)
$(window).on('load', function () {
  setupFixedNav();
  $(window).resize(function () {
    setupFixedNav();
  });

  //Setup complete, reveal the page to the user. 
  makeVisible();
});

/**
 *Account for the space taken up by the nav bar and move content down accordingly
 **/
function setupFixedNav() {
  $('.wrapper_alex').css('margin-top', $('.header_alex').outerHeight(true));
}

/**
 *Avoid screen flash upon loading by hiding content by default and showing it once JS is finished.
 **/
function makeVisible() {
  //Fancy fade effect for the index page
  $('.home-template').css('opacity', '0');
  $('body').css('visibility', 'visible');
  $('.home-template').fadeTo(800, 1);
}

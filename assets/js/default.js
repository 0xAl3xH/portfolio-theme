var show = false;
//Wait until all assets are loaded (images, fonts, etc...)
$(window).on('load', function () {
  setupFixedNav();
  setupHeaderTabMobile();
  $(window).resize(function () {
    setupFixedNav();
    setupHeaderTabMobile();
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
 * Account for the height of the nav bar for the mobile header tab container
 **/
function setupHeaderTabMobile() {
  $('.header_tab_container_mobile_alex').css('top', $('.header_alex').outerHeight(false));
  //Unbind otherwise multiple handlers might be attached upon resize
  $('.header_tab_button_mobile_alex').unbind().on('click',toggleMenuMobile);
}

/**
 * Function for toggling visibility of the mobile navigation menu
 **/
function toggleMenuMobile() {
  var menu = '.header_tab_container_mobile_alex';
  var animated = $(menu).is(':animated')  
  console.log(animated);
  if (!animated) {
    show = !show;
    if (show) {
      $(menu).css('overflow','scroll');
      //TODO: Find a better solution for taking into account of the nav bar height
      $(menu).animate({height: window.innerHeight -$('.header_alex').outerHeight(false) + 100});
    } else {
      $(menu).css('overflow','hidden');
      $(menu).animate({height: 0});
    } 
  }
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

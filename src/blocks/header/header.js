jQuery(function ($) {
  $(window).on('scroll', function (e) {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('is-light');
    } else {
      $('.header').removeClass('is-light');
    }
  });
});

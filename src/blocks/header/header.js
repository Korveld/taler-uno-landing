jQuery(function ($) {
  /*$(window).on('scroll', function (e) {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('is-light');
    } else {
      $('.header').removeClass('is-light');
    }
  });*/
  
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.menu').fadeToggle(300);
    if ($('body').css('overflow') === 'hidden') {
      $('body').css('overflow', '');
    } else {
      $('body').css('overflow', 'hidden');
    }
  });
});

jQuery(function ($) {

  if (!$.cookie('cookiesAccepted') || $.cookie('cookiesAccepted') === 'false') {
    $('.cookie-banner').fadeIn(300);
  }
  
  $('#accept-cookies').on('click', function (e) {
    e.preventDefault();
    $.cookie('cookiesAccepted', 'true', { expires: 365, path: '/' });
    $('.cookie-banner').fadeOut(300);
  });

  $('#reject-cookies').on('click', function (e) {
    e.preventDefault();
    $.cookie('cookiesAccepted', 'false', { expires: 365, path: '/' });
    $('.cookie-banner').fadeOut(300);
  });
  
});

jQuery(function ($) {
  $(window).on('scroll', function (e) {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('is-light');
    } else {
      $('.header').removeClass('is-light');
    }
  });
});

jQuery(function ($) {
  $('.lang-switcher__active').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.lang-switcher__dropdown').fadeToggle(500);
  });
  
  $(document).on('click', function (e) {
    if (!$(e.target).hasClass('lang-switcher') && $(e.target).parents('.lang-switcher').length === 0) {
      $('.lang-switcher__active').removeClass('is-active');
      $('.lang-switcher__dropdown').fadeOut(300);
      $('.header__overlay').fadeOut(300);
    }
  });
});

jQuery(function ($) {
});

jQuery(function ($) {
});

jQuery(function ($) {
  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();

    var $container = $('html, body'),
      $scrollTo = $($($(this).attr('href')));
    
    /*$container.scrollTop(
      $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
    );*/
    $container.animate({
      scrollTop: $scrollTo.offset().top
    }, 500);
  });
});

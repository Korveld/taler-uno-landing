jQuery(function ($) {
  $('.faq__question').on('click', function(e) {
    e.preventDefault();
    if ($(this).parent().hasClass('is-open')) {
      $(this).parent().removeClass('is-open');
      $(this).next().slideUp({
        duration: 300,
        start: function() {
          $(this).find('.faq__answer-wrapper').css('opacity', '0');
        }
      });
    } else {
      $(this).parent().addClass('is-open');
      $(this).next().slideDown({
        duration: 300,
        // complete: function() {
        //   $(this).find('.faq__answer-wrapper').css('opacity', '1');
        // },
        progress: function(animation, progress, remainingMs) {
          if (remainingMs < 50) {
            $(this).find('.faq__answer-wrapper').css('opacity', '1');
          }
        }
      });
    }
  });
});

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

jQuery(function ($) {
  var mq = window.matchMedia( "(min-width: 767.98px)" );
  var mqMob = window.matchMedia( "(max-width: 768px)" );
  
  $('.lang-switcher__active').on('click', function (e) {
    e.preventDefault();
    $('.header__burger').removeClass('is-active');

    if (mqMob.matches) {
      $('.menu').fadeOut(300);
    }
    
    $('body').css('overflow', '');
    $(this).toggleClass('is-active');
    $('.lang-switcher__dropdown').fadeToggle(500);
    $('.lang-switcher__overlay').fadeToggle(300);
  });

  $('.lang-switcher__overlay').on('click', function (e) {
    $('.lang-switcher__active').removeClass('is-active');
    $('.lang-switcher__dropdown').fadeOut(300);
    $('.lang-switcher__overlay').fadeOut(300);
  });
  
  $(document).on('click', function (e) {
    if (!$(e.target).hasClass('lang-switcher') && $(e.target).parents('.lang-switcher').length === 0) {
      $('.lang-switcher__active').removeClass('is-active');
      $('.lang-switcher__dropdown').fadeOut(300);
      $('.lang-switcher__overlay').fadeOut(300);
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

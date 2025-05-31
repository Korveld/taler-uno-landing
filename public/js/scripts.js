jQuery(function ($) {
  const canvas1 = document.getElementById("card-rive-canvas-1");
  const canvas2 = document.getElementById("card-rive-canvas-2");
  const canvas3 = document.getElementById("card-rive-canvas-3");
  const canvas4 = document.getElementById("card-rive-canvas-4");
  
  const layout = new rive.Layout({
    fit: rive.Fit.contain,
    alignment: rive.Alignment.Center,
  });

  const riveCard1 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 01',
    canvas: canvas1,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard1.resizeDrawingSurfaceToCanvas();
    },
  });

  const riveCard2 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 02',
    canvas: canvas2,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard2.resizeDrawingSurfaceToCanvas();
    },
  });

  const riveCard3 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 03',
    canvas: canvas3,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard3.resizeDrawingSurfaceToCanvas();
    },
  });

  const riveCard4 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 04',
    canvas: canvas4,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard4.resizeDrawingSurfaceToCanvas();
    },
  });

  window.addEventListener('resize', () => {
    riveCard1.resizeDrawingSurfaceToCanvas();
    riveCard2.resizeDrawingSurfaceToCanvas();
    riveCard3.resizeDrawingSurfaceToCanvas();
    riveCard4.resizeDrawingSurfaceToCanvas();
  });
});

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
  
  var HeaderColorHandler = function () {
    var offset = 60; // Offset for earlier trigger

    if ($("#header_color_trigger").length) {
      var changeColorTrigger = $("#header_color_trigger").offset().top - $(window).scrollTop() - offset;

      if (changeColorTrigger <= 0) {
        $(".header").addClass("is-light");
        $(".header").addClass("is-animated-fixed");
        $('.header__logo--light').hide();
        $('.header__logo--dark').show();
      } else {
        $(".header").removeClass("is-light");
        $(".header").removeClass("is-animated-fixed");
        $('.header__logo--light').show();
        $('.header__logo--dark').hide();
      }
    }

    if ($("#header_fixed_trigger").length) {
      var changeFixedTrigger = $("#header_fixed_trigger").offset().top - $(window).scrollTop() - offset;

      if (changeFixedTrigger <= 0) {
        $(".header").addClass("is-animated-fixed");
      } else {
        $(".header").removeClass("is-animated-fixed");
      }
    }
  }

  $(window).on('scroll', function () {
    HeaderColorHandler();
  });
  $(window).on('load', function () {
    HeaderColorHandler();
  });
});

jQuery(function ($) {
  const canvas = document.getElementById("hero-rive-canvas");

  const riveInstance = new rive.Rive({
    src: "./src/riv_animations/index_anim.riv",
    canvas: canvas,
    autoplay: true,
    layout: new rive.Layout({
      fit: rive.Fit.contain,
      alignment: rive.Alignment.CenterLeft,
    }),
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
  });

  window.addEventListener('resize', () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  });
});

jQuery(function ($) {
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

jQuery(function ($) {
});

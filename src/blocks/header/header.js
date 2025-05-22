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

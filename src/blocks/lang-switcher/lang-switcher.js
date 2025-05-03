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

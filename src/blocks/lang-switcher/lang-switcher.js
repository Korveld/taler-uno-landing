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

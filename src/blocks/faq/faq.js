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

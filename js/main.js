// Popup Window
var scrollTop = '';
var newHeight = '100';

$(window).bind('scroll', function () {
  scrollTop = $(window).scrollTop();
  newHeight = scrollTop + 100;
});

$('.popup-trigger').click(function (e) {
  e.stopPropagation();
  if (jQuery(window).width() < 767) {
    $(this).after($(".popup"));
    $('.popup').show().addClass('popup-mobile').css('top', 0);
    $('html, body').animate({
      scrollTop: $('.popup').offset().top
    }, 500);
  } else {
    $('.popup').removeClass('popup-mobile').css('top', newHeight).toggle();
  };
});

$('html').click(function () {
  $('.popup').hide();
});

$('.popup-btn-close').click(function (e) {
  $('.popup').hide();
});

$('.popup').click(function (e) {
  e.stopPropagation();
});

// BEGIN FORM
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// END FORM
// nav

var nav = {
  open: function(links, btn, container, modifier) {
    btn.on('click', function(e) {
      e.preventDefault();
      container.toggleClass(modifier);
    });

    links.on('click', function(e) {
      container.toggleClass(modifier);
    });
  },

  scroll_to: function(links) {
    links.on('click', function(e) {
      e.preventDefault();

      var href = $(this).attr('href');

      $('html, body').animate({ scrollTop: $(href).offset().top }, 500);
    });
  }
}

$(function(){
  nav.open(
    $('.nav__link'),
    $('.nav__btn'),
    $('html'),
    'nav--opened'
  );
});

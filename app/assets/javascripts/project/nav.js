// nav

var nav = {
  open: function(container, links, btn, modifier) {
    btn.on('click', function(e) {
      e.preventDefault();
      container.toggleClass(modifier);
    });

    links.on('click', function(e) {
      container.toggleClass(modifier);
    });
  }
}

// page

var page = {
  scroll_start: function(element, container, modifier) {
    container.on('scroll', function() {
      var scroll = container.scrollTop();

      if (scroll > 400) {
        element
          .addClass(modifier);
      } else {
        element
          .removeClass(modifier);
      }
    });
  }
}

$(function(){
  
});

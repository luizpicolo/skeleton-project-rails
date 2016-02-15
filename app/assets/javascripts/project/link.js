// link

var link = {
  back: function() {
    var link = $('.link--back');

    if (link.length) {
      link.click(function(e) {
        e.preventDefault();
        window.history.back(-1);
      });
    }
  },

  current: function() {
    var path = window.location.pathname.split('/');
    var url = '';

    for (var i = 1; i < path.length; i++) {
      url += '/' + path[i];

      $('a[href="'+ url +'"]').addClass('link--current');
    }
  },

  prevent: function() {
    var link = $('.link--prevent');

    if (link.length) {
      link.click(function(e) {
        e.preventDefault();
      });
    }
  }
}

$(function(){
  link.back();
  link.current();
  link.prevent();
});

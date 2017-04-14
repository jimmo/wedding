
function init() {
  $('.content').html(soy.content());

  var selected = $('#home');
  $('.photo-frame, .horizontal-menu-item').on('click', function(event) {
    var target = $(event.currentTarget);
    if (target.data('target')) {
      target = $('#' + target.data('target'));
    }
    selected.css('z-index', '');
    selected = target.css('z-index', 200);
  });
}

// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.
 */

if (typeof soy == 'undefined') { var soy = {}; }


soy.card = function(opt_data, opt_ignored) {
  return '<div tabindex="0" class="photo-frame" id="' + soy.$$escapeHtml(opt_data.id) + '">' + soy.$$filterNoAutoescape(opt_data.imageHtml) + '<div class="photo-title"><a name="' + soy.$$escapeHtml(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.titleStr) + '</a></div><div class="photo-text">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div><div class="photo-tab"><div class="photo-flag">' + soy.$$escapeHtml(opt_data.tabName) + '</div></div></div>';
};
if (goog.DEBUG) {
  soy.card.soyTemplateName = 'soy.card';
}


soy.content = function(opt_data, opt_ignored) {
  return '' + soy.card({imageHtml: '<img src="photos/ferry_sm.jpg">', id: 'home', titleStr: 'Eddy and Jim', contentHtml: 'September 23, 2017', tabName: 'Home'}) + soy.card({imageHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.013663977963!2d151.151001015087!3d-33.86353873065775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afefea677fd9%3A0xf017d68f9f0a2a0!2sRodd+Island!5e0!3m2!1sen!2sau!4v1491142369141" frameborder="0" style="border:0" allowfullscreen></iframe>', id: 'where', titleStr: 'Rodd Island', contentHtml: '<div class="photo-subtitle">Iron Cove, Sydney</div>We\'ll be shuttling guests to the island via water taxi starting at 11am from Leichhardt Park Wharf.<br>There is a small amount of free parking at Leichhardt Oval.<br>If you miss us, please get a water taxi from Rodd Point to Rodd Island.<br><a href="http://www.h2owatertaxis.com.au">H20 Water Taxis</a>', tabName: 'Venue info'}) + soy.card({imageHtml: 'None', id: 'travel', titleStr: 'Visiting Sydney', contentHtml: '<div class="photo-subtitle">Hotels we recommend</div><ul><li><a href="https://www.rydges.com/accommodation/sydney-nsw/camperdown" target="blank">Rydges Camperdown</a></li><li><a href="http://www.adarahotelsapartments.com.au/adara-camperdown" target="blank">Adara Camperdown Serviced Apartments</a></li></ul><div class="photo-subtitle">Stuff to do in Sydney</div><ul><li><a href="https://taronga.org.au/taronga-zoo" target="blank">Take a ferry to Taronga Zoo</a></li><li><a href="http://www.bonditocoogeewalk.com.au" target="blank">Take a beautiful coastal walk from Bondi to Coogee</a></li></ul>', tabName: 'Visiting Sydney'}) + soy.card({imageHtml: 'None', id: 'registry', titleStr: 'Registry', contentHtml: 'Our house is full, so we don\'t need any gifts! If you feel like you must give us something, please contribute to our honeymoon or donate to charity. TODO(Write better blurb about donations)', tabName: 'Registry'});
};
if (goog.DEBUG) {
  soy.content.soyTemplateName = 'soy.content';
}

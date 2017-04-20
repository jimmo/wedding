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
  return '' + soy.card({imageHtml: '<div class="photo photos-ferry"></div>', id: 'home', titleStr: 'Eddy and Jim', contentHtml: 'September 23, 2017', tabName: 'Home'}) + soy.card({imageHtml: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvTCId3RG0bBXZROWaQk3ViMVcEgOUXLppNr1SSPxuDFGmow/viewform"></iframe>', id: 'rsvp', titleStr: '', contentHtml: '', tabName: 'RSVP'}) + soy.card({imageHtml: '<div id="map"></div>', id: 'where', titleStr: 'Rodd Island', contentHtml: '<div class="photo-subtitle">Iron Cove, Sydney</div><ul><li>We\'re a casual bunch, so don\'t get too formal \uD83D\uDD74\uFE0F</li><li>We\'ll be ferrying guests from Leichhardt Park Wharf \u26F4\uFE0F</li><li>The island is mostly grass, so we recommend against pointy shoes \uD83D\uDC60</li></ul>', tabName: 'Venue info'}) + soy.card({imageHtml: 'TODO', id: 'schedule', titleStr: 'Our Wedding', contentHtml: '11:30 - Guest ferry from Leichhardt Park Wharf<br>12:30 - Eddy and Jim say nice things to each other<br>13:00 - Food and fun and friends<br>16:00 - Ferries back to Leichhardt Park Wharf<br><br>If you are late, or need to leave early, please get a water taxi<br><a href="https://yellowwatertaxis.com.au">Yellow Water Taxis</a>', tabName: 'Our Wedding'}) + soy.card({imageHtml: '<img src="photos/whitsundays_sm.jpg">', id: 'travel', titleStr: 'Visiting Sydney', contentHtml: '<div class="photo-subtitle">Hotels we recommend</div><ul><li><a href="https://www.rydges.com/accommodation/sydney-nsw/camperdown" target="blank">Rydges Camperdown</a></li></ul><div class="photo-subtitle">Stuff to do in Sydney</div><ul><li><a href="https://taronga.org.au/taronga-zoo" target="blank">Take a ferry to Taronga Zoo</a></li><li><a href="http://www.bonditocoogeewalk.com.au" target="blank">Take a beautiful coastal walk from Bondi to Coogee</a></li></ul>', tabName: 'Visiting Sydney'}) + soy.card({imageHtml: '<div class="photo photos-beach"></div>', id: 'registry', titleStr: 'Registry', contentHtml: 'Our house is full, so we don\'t need any gifts! If you feel like you must give us something, please donate to charity, print the receipt and put it in an envelope.<br>We suggest one of these (or an equivalent in your country):<ul><li><a href="https://www.thesmithfamily.com.au">The Smith Family</a></li><li><a href="https://unwomen.org.au">UN Women National Committee Australia</a></li><li><a href="http://www.wateraid.org/au">WaterAid Australia</a></li><li><a href="http://www.doctorswithoutborders.org">Doctors Without Borders</a></li></ul>', tabName: 'Registry'});
};
if (goog.DEBUG) {
  soy.content.soyTemplateName = 'soy.content';
}

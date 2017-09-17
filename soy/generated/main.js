// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.
 */

if (typeof soy == 'undefined') { var soy = {}; }


soy.card = function(opt_data, opt_ignored) {
  return '<div tabindex="0" class="photo-frame" id="' + soy.$$escapeHtml(opt_data.id) + '">' + soy.$$filterNoAutoescape(opt_data.imageHtml) + '<div class="photo-title">' + soy.$$filterNoAutoescape(opt_data.titleHtml) + '</div><div class="photo-text">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div><div class="photo-tab"><div class="photo-flag">' + soy.$$escapeHtml(opt_data.tabName) + '</div></div></div>';
};
if (goog.DEBUG) {
  soy.card.soyTemplateName = 'soy.card';
}


soy.content = function(opt_data, opt_ignored) {
  return '' + soy.card({imageHtml: '<img src="photos/ferry_sm.jpg">', id: 'home', titleHtml: 'Eddy and Jim<div class="home-subtitle">are getting married!</div>', contentHtml: 'September 23, 2017', tabName: 'Home'}) + soy.card({imageHtml: '<img src="photos/japan_sm.jpg">', id: 'schedule', titleHtml: 'Our Wedding', contentHtml: '11:00 - Guest ferry from <a href="https://goo.gl/maps/r9WgFpKyrpJ2">Leichhardt Park Wharf</a><br>12:30 - Eddy and Jim say nice things to each other<br>13:00 - Food and fun and friends<br>14:30 - Speeches<br>15:30 - First ferry back to Leichhardt Park Wharf<br>&bull; Any problems, please call Nicky at <a href="tel:+61407020099">0407 020 099</a><br>&bull; If you are late, or need to leave early, please get a water taxi<br><a href="https://yellowwatertaxis.com.au" target="_blank">Yellow Water Taxis</a>', tabName: 'Schedule'}) + soy.card({imageHtml: '<div id="map"></div>', id: 'where', titleHtml: 'Rodd Island - Iron Cove, Sydney', contentHtml: '<ul><li>We\'re a casual bunch, so don\'t get too formal \uD83D\uDD74\uFE0F</li><li>We\'ll be ferrying guests from <a href="https://goo.gl/maps/r9WgFpKyrpJ2">Leichhardt Park Wharf</a> at 11am \u26F4\uFE0F</li><li>The island is mostly grass, so we recommend against pointy shoes \uD83D\uDC60</li><li>There is a small amount of free parking at Leichhardt Oval \uD83D\uDE97</li><li>The wharf is 15 minutes walk from Leichhardt North light rail station \uD83D\uDE83</li></ul>', tabName: 'Venue info'}) + soy.card({imageHtml: '<img src="photos/boathouse_sm.jpg">', id: 'contact', titleHtml: 'Contact us', contentHtml: 'Email: <a href="mailto:eddyandjim@gmail.com">eddyandjim@gmail.com</a><br>On the day (Nicky): <a href="tel:+61407020099">0407 020 099</a><br>Phone (Eddy): <a href="tel:+61411799957">0411 799 957</a><br>Phone (Jim): <a href="tel:+61417913600">0417 913 600</a>', tabName: 'Contact us'}) + soy.card({imageHtml: '<img src="photos/whitsundays_sm.jpg">', id: 'travel', titleHtml: 'Visiting Sydney', contentHtml: '<div class="photo-subtitle">Hotels we recommend</div><ul><li><a href="https://www.rydges.com/accommodation/sydney-nsw/camperdown" target="_blank">Rydges Camperdown</a></li></ul><div class="photo-subtitle">Stuff to do in Sydney</div><ul><li><a href="https://taronga.org.au/taronga-zoo" target="_blank">Take a ferry to Taronga Zoo</a></li><li><a href="http://www.bonditocoogeewalk.com.au" target="_blank">Take a beautiful coastal walk from Bondi to Coogee</a></li></ul>', tabName: 'Visiting Sydney'}) + soy.card({imageHtml: '<img src="photos/beach_sm.jpg">', id: 'registry', titleHtml: 'Registry', contentHtml: 'We don\'t need any gifts - we\'re just grateful if you are able to attend! However, if gift-giving is your thing, we\'d love it if you donate to one of these charities instead (or an equivalent in your country):<ul><li><a href="https://www.thesmithfamily.com.au" target="_blank">The Smith Family</a></li><li><a href="http://www.ozharvest.org" target="_blank">OzHarvest</a></li><li><a href="https://unwomen.org.au" target="_blank">UN Women National Committee Australia</a></li><li><a href="http://www.wateraid.org/au" target="_blank">WaterAid Australia</a></li><li><a href="http://www.doctorswithoutborders.org" target="_blank">Doctors Without Borders</a></li></ul>', tabName: 'Registry'}) + soy.card({imageHtml: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvTCId3RG0bBXZROWaQk3ViMVcEgOUXLppNr1SSPxuDFGmow/viewform"></iframe>', id: 'rsvp', titleHtml: '', contentHtml: '', tabName: 'RSVP'});
};
if (goog.DEBUG) {
  soy.content.soyTemplateName = 'soy.content';
}

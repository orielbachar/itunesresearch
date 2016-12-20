var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  id: Number
  appId: Number
  title: app['im:name'].label,
  icon: app['im:image'][app['im:image'].length - 1].label,
  url: app.link.attributes.href,
  price: price,
  currency: app['im:price'].attributes.currency,
  free: price === 0,
  description: app.summary.label,
  developer: app['im:artist'].label,
  developerUrl: developerUrl,
  developerId: developerId,
  genre: app.category.attributes.label,
  genreId: app.category.attributes['im:id'],
  released: app['im:releaseDate'].label
});


var Gamedb = mongoose.model('Gamedb', gameSchema);

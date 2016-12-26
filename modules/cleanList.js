function cleanList (results) {
  return results.feed.entry.map(function (app) {
    var developerUrl, developerId;
    if (app['im:artist'].attributes) {
      developerUrl = app['im:artist'].attributes.href;
      developerId = app['im:artist'].attributes.href.split('/id')[1].split('?mt')[0];
    }
    var price = parseFloat(app['im:price'].attributes.amount);
    return {
      id: app.id.attributes['im:id'],
      appId: app.id.attributes['im:bundleId'],
      title: app['im:name'].label,
      icon: app['im:image'][app['im:image'].length - 1].label,
      url: app.link.attributes.href,
      price: price,
      currency: app['im:price'].attributes.currency,
      free: price === 0,
      description: app.summary ? app.summary.label : "",
      developer: app['im:artist'].label,
      developerUrl: developerUrl,
      developerId: developerId,
      genre: app.category.attributes.label,
      genreId: app.category.attributes['im:id'],
      released: app['im:releaseDate'].label
    };
  });
}

module.exports = cleanList;

//npm's
var express = require('express');
var bodyParser = require('body-parser');
var store = require('app-store-scraper');
var mongoose = require('mongoose');
var request = require('request');

//modules
var cleanList = require('./modules/cleanList');


//start express and mongoose
var app = express();
mongoose.connect('mongodb://localhost/itunes');

//useful tools
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

// Get Methods
app.get('/games/:category', function(req, res){
  request('https://itunes.apple.com/us/rss/topfreeapplications/limit=15/genre='+ req.params.category +'/json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      var dataApi = cleanList(info);
      res.send(dataApi)
    }
  });
});

//Functions

app.listen(8000);


// store.list({
//   collection: store.collection.NEW_FREE_IOS,
//   category: store.category.GAMES_ACTION,
//   num: 2
// })
// .then(console.log)
// .catch(console.log);



// { TOP_MAC: 'topmacapps',
//   TOP_FREE_MAC: 'topfreemacapps',
//   TOP_GROSSING_MAC: 'topgrossingmacapps',
//   TOP_PAID_MAC: 'toppaidmacapps',
//   NEW_IOS: 'newapplications',
//   NEW_FREE_IOS: 'newfreeapplications',
//   NEW_PAID_IOS: 'newpaidapplications',
//   TOP_FREE_IOS: 'topfreeapplications',
//   TOP_FREE_IPAD: 'topfreeipadapplications',
//   TOP_GROSSING_IOS: 'topgrossingapplications',
//   TOP_GROSSING_IPAD: 'topgrossingipadapplications',
//   TOP_PAID_IOS: 'toppaidapplications',
//   TOP_PAID_IPAD: 'toppaidipadapplications' }

// { BOOKS: 6018,
//   BUSINESS: 6000,
//   CATALOGS: 6022,
//   EDUCATION: 6017,
//   ENTERTAINMENT: 6016,
//   FINANCE: 6015,
//   FOOD_AND_DRINK: 6023,
//   GAMES: 6014,
//   GAMES_ACTION: 7001,
//   GAMES_ADVENTURE: 7002,
//   GAMES_ARCADE: 7003,
//   GAMES_BOARD: 7004,
//   GAMES_CARD: 7005,
//   GAMES_CASINO: 7006,
//   GAMES_DICE: 7007,
//   GAMES_EDUCATIONAL: 7008,
//   GAMES_FAMILY: 7009,
//   GAMES_MUSIC: 7011,
//   GAMES_PUZZLE: 7012,
//   GAMES_RACING: 7013,
//   GAMES_ROLE_PLAYING: 7014,
//   GAMES_SIMULATION: 7015,
//   GAMES_SPORTS: 7016,
//   GAMES_STRATEGY: 7017,
//   GAMES_TRIVIA: 7018,
//   GAMES_WORD: 7019,
//   HEALTH_AND_FITNESS: 6013,
//   LIFESTYLE: 6012,
//   MAGAZINES_AND_NEWSPAPERS: 6021,
//   MAGAZINES_ARTS: 13007,
//   MAGAZINES_AUTOMOTIVE: 13006,
//   MAGAZINES_WEDDINGS: 13008,
//   MAGAZINES_BUSINESS: 13009,
//   MAGAZINES_CHILDREN: 13010,
//   MAGAZINES_COMPUTER: 13011,
//   MAGAZINES_FOOD: 13012,
//   MAGAZINES_CRAFTS: 13013,
//   MAGAZINES_ELECTRONICS: 13014,
//   MAGAZINES_ENTERTAINMENT: 13015,
//   MAGAZINES_FASHION: 13002,
//   MAGAZINES_HEALTH: 13017,
//   MAGAZINES_HISTORY: 13018,
//   MAGAZINES_HOME: 13003,
//   MAGAZINES_LITERARY: 13019,
//   MAGAZINES_MEN: 13020,
//   MAGAZINES_MOVIES_AND_MUSIC: 13021,
//   MAGAZINES_POLITICS: 13001,
//   MAGAZINES_OUTDOORS: 13004,
//   MAGAZINES_FAMILY: 13023,
//   MAGAZINES_PETS: 13024,
//   MAGAZINES_PROFESSIONAL: 13025,
//   MAGAZINES_REGIONAL: 13026,
//   MAGAZINES_SCIENCE: 13027,
//   MAGAZINES_SPORTS: 13005,
//   MAGAZINES_TEENS: 13028,
//   MAGAZINES_TRAVEL: 13029,
//   MAGAZINES_WOMEN: 13030,
//   MEDICAL: 6020,
//   MUSIC: 6011,
//   NAVIGATION: 6010,
//   NEWS: 6009,
//   PHOTO_AND_VIDEO: 6008,
//   PRODUCTIVITY: 6007,
//   REFERENCE: 6006,
//   SHOPPING: 6024,
//   SOCIAL_NETWORKING: 6005,
//   SPORTS: 6004,
//   TRAVEL: 6003,
//   UTILITIES: 6002,
//   WEATHER: 6001 }

// store.search({
//   term: 'Baseball',
//   num: 100,
//   device: store.device.IOS
// })
// .then(console.log)
// .catch(console.log)

//https://itunes.apple.com/us/rss/newapplications/limit=200/genre=7001/json
//https://rss.itunes.apple.com/?at=
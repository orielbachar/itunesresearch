var express = require('express');
var router = express.Router();

var gplay = require('google-play-scraper');

router.get('/:category:state', function(req,res,next){
  gplay.list({
      category: gplay.category.GAME_ADVENTURE,
      collection: gplay.collection.TOP_FREE,
      num: 10
    })
    .then(function(body){
      res.json(body);
    })
})

module.exports = router;


// TOP_FREE: 'topselling_free',
// TOP_PAID: 'topselling_paid',
// NEW_FREE: 'topselling_new_free',
// NEW_PAID: 'topselling_new_paid',
// GROSSING: 'topgrossing',
// TRENDING: 'movers_shakers'

 // GAME: 'GAME',
 // GAME_ACTION: 'GAME_ACTION',
 // GAME_ADVENTURE: 'GAME_ADVENTURE',
 // GAME_ARCADE: 'GAME_ARCADE',
 // GAME_BOARD: 'GAME_BOARD',
 // GAME_CARD: 'GAME_CARD',
 // GAME_CASINO: 'GAME_CASINO',
 // GAME_CASUAL: 'GAME_CASUAL',
 // GAME_EDUCATIONAL: 'GAME_EDUCATIONAL',
 // GAME_MUSIC: 'GAME_MUSIC',
 // GAME_PUZZLE: 'GAME_PUZZLE',
 // GAME_RACING: 'GAME_RACING',
 // GAME_ROLE_PLAYING: 'GAME_ROLE_PLAYING',
 // GAME_SIMULATION: 'GAME_SIMULATION',
 // GAME_SPORTS: 'GAME_SPORTS',
 // GAME_STRATEGY: 'GAME_STRATEGY',
 // GAME_TRIVIA: 'GAME_TRIVIA',
 // GAME_WORD: 'GAME_WORD',
 // FAMILY: 'FAMILY',
 // FAMILY_ACTION: 'FAMILY_ACTION',
 // FAMILY_BRAINGAMES: 'FAMILY_BRAINGAMES',

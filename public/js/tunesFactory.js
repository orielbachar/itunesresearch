app.factory('tunesFactory', function($http){

var treasure = {};
var tunesCategories = {
     ACTION: 7001,
     ADVENTURE: 7002,
     ARCADE: 7003,
     BOARD: 7004,
     CARD: 7005,
     CASINO: 7006,
     DICE: 7007,
     EDUCATIONAL: 7008,
     FAMILY: 7009,
     MUSIC: 7011,
     PUZZLE: 7012,
     RACING: 7013,
     ROLEPLAYING: 7014,
     SIMULATION: 7015,
     SPORTS: 7016,
     STRATEGY: 7017,
     TRIVIA: 7018,
     WORD: 7019
};

var googCategories = {
  GAME: 'GAME',
  ACTION: 'GAME_ACTION',
  ADVENTURE: 'GAME_ADVENTURE',
  ARCADE: 'GAME_ARCADE',
  BOARD: 'GAME_BOARD',
  CARD: 'GAME_CARD',
  CASINO: 'GAME_CASINO',
  CASUAL: 'GAME_CASUAL',
  EDUCATIONAL: 'GAME_EDUCATIONAL',
  MUSIC: 'GAME_MUSIC',
  PUZZLE: 'GAME_PUZZLE',
  RACING: 'GAME_RACING',
  ROLE_PLAYING: 'GAME_ROLE_PLAYING',
  SIMULATION: 'GAME_SIMULATION',
  SPORTS: 'GAME_SPORTS',
  STRATEGY: 'GAME_STRATEGY',
  TRIVIA: 'GAME_TRIVIA',
  WORD: 'GAME_WORD',
  FAMILY: 'FAMILY',
  FAMILY2: 'FAMILY_ACTION',
  BRAIN: 'FAMILY_BRAINGAMES'
}


var gameStates = {
    "ItunestrueisFreetrueNewtrueGrossingfalse": 'newfreeapplications',
    "ItunestrueisFreefalseNewtrueGrossingfalse": 'newpaidapplications',
    "ItunestrueisFreetrueNewfalseGrossingfalse": 'topfreeapplications',
    "ItunestrueisFreefalseNewfalseGrossingtrue": 'topgrossingapplications',
    "ItunestrueisFreefalseNewfalseGrossingfalse": 'toppaidapplications',
    "ItunesfalseisFreetrueNewfalseGrossingfalse": 'topselling_free',
    "ItunesfalseisFreefalseNewfalseGrossingfalse": 'topselling_paid',
    "ItunesfalseisFreetrueNewtrueGrossingfalse": 'topselling_new_free',
    "ItunesfalseisFreefalseNewtrueGrossingfalse": 'topselling_new_paid',
    "ItunesfalseisFreefalseNewfalseGrossingtrue": 'topgrossing',
    itunesTrueTRENDING: 'movers_shakers',
    TOP_PAID_IPAD: 'toppaidipadapplications',
    TOP_FREE_IPAD: 'topfreeipadapplications',
    TOP_GROSSING_IPAD: 'topgrossingipadapplications',
    NEW_IOS: 'newapplications'
};

function getAll (categoryKey, gameStates, isItunes){
  return $http.get('/games/' + categoryKey + '/' + gameStates + '/' + isItunes).then(function(data){
    treasure.games = data;
  });
}

function gameInfo (gameId, isItunes){
  return $http.get('/game/' + gameId + '/' + isItunes).then(function(data){
    return data;
  });
}

function googGame (gameId){
  return $http.get('/game/' + gameId.id).then(function(data){
    return data;
  });
}

function setFilter (categoryKey, costState, rankState, isGrossing, isItunes){
  return getAll(categoryKey, gameStates["Itunes" + isItunes.toString() + "isFree" + costState.toString() + "New" + rankState.toString() + "Grossing" + isGrossing.toString()], isItunes);
};

  return{
    getAll: getAll,
    treasure: treasure,
    tunesCategories: tunesCategories,
    setFilter: setFilter,
    gameStates: gameStates,
    googCategories: googCategories,
    gameInfo: gameInfo
  }

});

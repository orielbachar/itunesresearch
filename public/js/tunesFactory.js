app.factory('tunesFactory', function($http){

var treasure = {};
var gameCategories = {
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

function sum(a,b){
  return a+b;
}
var x = sum(1,2);

var gameStates = {
    NEW_IOS: 'newapplications',
    "isFreetrueNewtrue": 'newfreeapplications',
    "isFreefalseNewtrue": 'newpaidapplications',
    "isFreetrueNewfalse": 'topfreeapplications',
    TOP_FREE_IPAD: 'topfreeipadapplications',
    TOP_GROSSING_IOS: 'topgrossingapplications',
    TOP_GROSSING_IPAD: 'topgrossingipadapplications',
    "isFreefalseNewfalse": 'toppaidapplications',
    TOP_PAID_IPAD: 'toppaidipadapplications'
};

function getAll (categoryNumber, gameStates){
  return $http.get('/games/' + categoryNumber + '/' + gameStates).then(function(data){
    treasure.games = data;
  });
}

function setFilter (categoryNumber, costState, rankState){
  return getAll(categoryNumber, gameStates["isFree" + costState.toString() + "New" + rankState.toString()]);
};

  return{
    getAll: getAll,
    treasure: treasure,
    gameCategories: gameCategories,
    setFilter: setFilter,
    gameStates: gameStates
  }

});

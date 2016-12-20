app.factory('tunesFactory', function($http){

var sports = {};
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

function getAll (categoryNumber){
  return $http.get('/games/' + categoryNumber).then(function(data){
    sports.games = data;
  });
};

  return{
    getAll: getAll,
    sports: sports,
    gameCategories: gameCategories
  }

});

app.controller('tunesCtrl', function($scope, tunesFactory){


$scope.setGameCategories = function(){
  if($scope.isItunes){
      $scope.gameCategories = tunesFactory.tunesCategories;
  }else{
      $scope.gameCategories = tunesFactory.googCategories;
  }
};

 $scope.setCategory = function(categoryKey){
     $scope.categorySelected = categoryKey;
     $scope.getAll();
   };

$scope.setPlatform = function(isItunes){
  $scope.isItunes = isItunes;
  if (!isItunes){$scope.categorySelected = 'GAME_ACTION'}
  else {$scope.categorySelected = 7001}
  $scope.setGameCategories();
  $scope.getAll();
}

 $scope.setIsFree = function (costState){
   $scope.isFree = costState;
   $scope.isGrossing = false
   $scope.getAll();
 };

 $scope.setIsNew = function(rankState){
   $scope.isNew = rankState;
   $scope.isGrossing = false;
   $scope.getAll();
 };

 $scope.setIsGrossing = function(grossingState){
   $scope.isGrossing = grossingState;
   $scope.isFree = false;
   $scope.isNew = false;
   $scope.getAll();
 };

  $scope.getAll = function(){
    tunesFactory.setFilter($scope.categorySelected, $scope.isFree, $scope.isNew, $scope.isGrossing, $scope.isItunes).then(function(){
      $scope.treasure = tunesFactory.treasure.games.data;

      // The first selected game to be displayed on the right side of the screen
      if ($scope.treasure.length > 0) {
        $scope.gameSelected = $scope.treasure[0];
      };
    });
  };

$scope.gameList = function(game){
  if ($scope.isItunes){
    tunesFactory.gameInfo(game.id, $scope.isItunes).then(function(gameInfo){
      $scope.gameSelected = gameInfo.data;
      console.log(gameInfo.data);
    });
  }
  else {
    tunesFactory.gameInfo(game.appId).then(function(gameInfo){
      $scope.gameSelected = gameInfo.data;
      console.log(gameInfo.data);
    });
  };
};

  // The first game list that should appear on the screen
  $scope.categorySelected = 7001;
  $scope.isFree = true;
  $scope.isNew = false;
  $scope.isGrossing = false;
  $scope.isItunes = true;
  $scope.setGameCategories();
  $scope.getAll();

});

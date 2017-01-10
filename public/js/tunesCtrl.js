app.controller('tunesCtrl', function($scope, tunesFactory){

$scope.gameCategories = tunesFactory.gameCategories;

 $scope.setCategory = function(categoryNumber){
   $scope.categorySelected = categoryNumber;
   $scope.getAll();
 };

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

//NEEDS TO RETURN THE PROMISE TO THE CALLING FUNCTION!
  $scope.getAll = function(){
    tunesFactory.setFilter($scope.categorySelected, $scope.isFree, $scope.isNew, $scope.isGrossing).then(function(){
      $scope.treasure = tunesFactory.treasure.games.data;

      // The first selected game to be displayed on the right side of the screen
      if ($scope.treasure.length > 0) {
        $scope.gameSelected = $scope.treasure[0];
      };
    });
  };

  // The first game list that should appear on the screen
$scope.setInitialGame = function(){
  $scope.categorySelected = 7001;
  $scope.isFree = true;
  $scope.isNew = false;
  $scope.isGrossing = false;
  $scope.getAll();
};

$scope.setInitialGame();

$scope.gameCategories = tunesFactory.gameCategories;

$scope.gameList = function(game){
    tunesFactory.gameInfo(game).then(function(gameInfo){
      $scope.gameSelected = gameInfo.data;
      console.log(gameInfo);
    })
  }
});

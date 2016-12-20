app.controller('tunesCtrl', function($scope, tunesFactory){

  $scope.gameCategories = tunesFactory.gameCategories;

  $scope.getByCategory = function(categoryNumber){
    tunesFactory.getAll(categoryNumber).then(function(){
      $scope.sports = tunesFactory.sports.games.data;

      // The first game to be displayed on the home screen
      if ($scope.sports.length > 0) {
        $scope.gameSelected = $scope.sports[0];
      };
    });
  };

  // The first game list that should appear on the screen
  $scope.getByCategory(7001);

  $scope.gameList = function(game){
    $scope.gameSelected = game;
    console.log(game);
  }
});

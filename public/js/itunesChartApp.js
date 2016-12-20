var app = angular.module('itunesChartApp', ['ui.router']);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'tunesCtrl'
    })

    $urlRouterProvider.otherwise('/home');

}]);

// .state('game', {
//   url: '/game/:id',
//   templateUrl: '/templates/game.html',
//   controller: 'gameCtrl'

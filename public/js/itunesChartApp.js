var app = angular.module('itunesChartApp',  ['ui.router', 'ui.bootstrap']);
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
    .state('game', {
      url: '/game',
      templateUrl: '/templates/game.html',
      controller: 'gameCtrl'
    })

    $urlRouterProvider.otherwise('/home');

}]);

// .state('game', {
//   url: '/game/:id',
//   templateUrl: '/templates/game.html',
//   controller: 'gameCtrl'

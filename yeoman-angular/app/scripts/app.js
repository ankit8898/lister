'use strict';

angular.module('angularDemoApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/users', {templateUrl: 'views/user.html', controller: 'UsercontrollerCtrl'})
      .otherwise({
        redirectTo: '/'
      });
  });

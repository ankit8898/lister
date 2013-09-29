'use strict';

angular.module('angularDemoApp')
  .controller('UsercontrollerCtrl', function ($scope,Datum) {
    $scope.factory = Datum.query();

    // $scope.reversedArray = function(arr){
    // 	var v = {message: "From Method", bb: arr.reverse()};
    // 	return v;
    // }
  });

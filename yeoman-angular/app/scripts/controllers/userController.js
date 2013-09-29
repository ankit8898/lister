'use strict';

angular.module('angularDemoApp')
.controller('UsercontrollerCtrl', function ($scope,User) {
	$scope.users = User.query();
	
	$scope.create = function(name, age) {
		User.save({name: name, age: age}, function(user) {
			$scope.users.push(user);
		});
	};
});

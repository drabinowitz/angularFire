var app = angular.module('angularfire',['firebase']);

app.controller('fireCtrl',['$scope','$firebase',function($scope,$firebase){

	var ref = new Firebase('https://burning-fire-8322.firebaseio.com');

	var sync = $firebase(ref);

	var syncObject = sync.$asObject();

	syncObject.$bindTo($scope, "fireBindings");

	var childRef = new Firebase('https://burning-fire-8322.firebaseio.com').child('fireVals');

	$scope.fireVals = $firebase(childRef).$asObject();

/*	this.savefireVal = function(){

		$scope.fireVals.$save();

	};*/

}]);
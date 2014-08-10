var app = angular.module('angularfire',['firebase']);

app.controller('fireCtrl',['$firebase',function($firebase){

	this.fireVal = 'sometext';

}]);
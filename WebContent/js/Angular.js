var app = angular.module('myApp',['ngRoute']);

app.controller('homeCtrl',function($scope){
	$scope.hello=true;
	$scope.xrt=false;
	$scope.prnt=function(){
		$scope.hello=false;
		$scope.xrt=true;
		var d = new Date();
		var hr =d.getHours();
		if (hr<12){
			$scope.dayti="Morning"
		}
		else{
			$scope.dayti="Evning"
		}	
	}
	
	
});
app.controller('bioCtrl',function($scope){
	$scope.cvc='home.html'
	
});
app.controller('contactCtrl',function($scope){
});

app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeCtrl'
	}).when('/bio', {
		templateUrl: 'Biographic.html',
		controller: 'bioCtrl'
	}).when('/contact', {
		templateUrl: 'Contact.html',
		controller: 'contactCtrl'
	}).otherwise({ redirectTo: '/home' });
});
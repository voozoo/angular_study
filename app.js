/**
 * 
 */
var app = angular.module("myApp", []);

app.run(function($rootScope) {
	$rootScope.color = "RED";
});

app.controller("smallCtrl", function($scope) {
	$scope.color = "BLUE";
});

app.controller("myCtrl", function($scope) {
	$scope.firstName = "LianCheng";
	$scope.lastName = "Wang";

	$scope.changeNum = function() {
		$scope.number = Math.random();
	}
});

app.service("hexUtil", function() {
	this.toHex = function(x) {
		return x.toString(16);
	};
});

app.controller("srvCtl", function($scope, $location, $http, $timeout, $interval, hexUtil) {
	$scope.absURL = $location.absUrl();
	$http.get("index.html").then(function(response) {
		$scope.resHTML = response.data;
		$scope.resStatus = response.status;
		$scope.resText = response.statusText;
	}, function(response){
		$scope.resHTML = response.data;
		$scope.resStatus = response.status;
		$scope.resText = response.statusText;
	});
	$timeout(function() {
		$scope.absURL += " Write in timeout!";
	}, 2000);
	$interval(function() {
		$scope.thisTime = new Date().toLocaleTimeString();
	}, 1000);
	$scope.hexOut = hexUtil.toHex(255);
});

app.controller("httpCtrl", function($scope, $http){
	$http.get("customers.json").then(function(response){
		$scope.customers = response.data.records;
	});
});

app.controller("optCtrl", function($scope) {
	$scope.fooNames = ["Tom", "Cat", "Jack"];
});

app.filter("myLangFlt", function() {
	return function(lang) {
		var starText = "";
		for (var i = 0; i < lang.star; i++) {
			starText += "*";
		}
		return "LANGUAGE:" + lang.name + ", STAR:" + starText;
	};
});

app.directive("testDirective", function() {
	console.log("in the testDirective.");
	return {
		restrict : "M",
		replace : true,
		template : "<span>This text is made by user directive!</span>"
	}
});

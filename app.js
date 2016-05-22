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

app.filter("myLangFlt", function() {
	return function(lang) {
		var starText = "";
		for(var i = 0; i < lang.star; i++) {
			starText += "*";
		}
		return "LANGUAGE:" + lang.name + ", STAR:" + starText;
	};
});

app.directive("testDirective", function() {
	console.log("in the testDirective.");
	return {
		restrict: "M",
		replace: true,
		template : "<span>This text is made by user directive!</span>"
	}
});

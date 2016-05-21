/**
 * 
 */
var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
	$scope.firstName = "LianCheng";
	$scope.lastName = "Wang";
});

app.directive("testDirective", function() {
	console.log("in the testDirective.");
	return {
		restrict: "M",
		replace: true,
		template : "<span>This text is made by user directive!</span>"
	}
});

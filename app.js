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
	}, function(response) {
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

app.controller("httpCtrl", function($scope, $http) {
	$http.get("customers.json").then(function(response) {
		$scope.customers = response.data.records;
	});
});

app.controller("optCtrl", function($scope) {
	$scope.fooNames = [ "Tom", "Cat", "Jack" ];
	$scope.cars = [ {
		model : "BMW X1",
		color : "White"
	}, {
		model : "BMW X5",
		color : "Black"
	}, {
		model : "XiaLi",
		color : "Red"
	} ];
	$scope.carsObj = {
		car01 : "c01",
		car02 : "c02",
		car03 : "c03"
	};
	$scope.carsComplex = {
		car01 : {
			type : "A",
			name : "BMW X1",
			color : "RED"
		},
		car02 : {
			type : "B",
			name : "BMW X2",
			color : "BLUE"
		},
		car03 : {
			type : "C",
			name : "XiaLi",
			color : "YELLOW"
		}
	};
});

app.controller("eventCtrl", function($scope) {
	$scope.mousemoveCount = 0;

	$scope.coord = {
		x : 0,
		y : 0
	};
	$scope.myClickEvent = function(ev) {
		$scope.coord.x = ev.clientX;
		$scope.coord.y = ev.clientY;
	};
});

app.controller("validationCtrl", function($scope){
	
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

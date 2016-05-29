/**
 * 
 */

var app = angular.module("shopping.list",[]);

app.controller("main.controller", function($scope){
	$scope.itemList = ["Apple","Book","Cup"];
	
	$scope.addItem = function(item) {
		if(!item) return;
		
		if($scope.itemList.indexOf(item) != -1){
			$scope.errorText = "Item is already in your shopping list!";
			return;
		}
		
		$scope.itemList.push(item);
	};
	
	$scope.removeItem = function(index) {
		$scope.itemList.splice(index, 1);
		$scope.errorText = "";
	}
});

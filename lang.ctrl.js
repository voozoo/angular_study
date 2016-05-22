/**
 * 
 */

app.controller("langCtrl", function($scope) {
	$scope.languages = [ {
		name : 'Java',
		star : 5
	}, {
		name : 'JS',
		star : 4
	}, {
		name : 'VB',
		star : 1
	}, {
		name : "C",
		star : 3
	}, {
		name : "C++",
		star : 2
	}, {
		name : "C#",
		star : 4
	}];
});

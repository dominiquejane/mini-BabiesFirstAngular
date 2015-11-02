var app = angular.module('friendsList').controller('mainCtrl', function($scope) {
	$scope.friendsList = ['Jordyn', 'Ryan', 'Chelsey'];
	$scope.addFriend = function(newFriend) {
		$scope.friendsList.push(newFriend);
		$scope.newFriendInput = ''; //reset the input box to show as empty
	};


});
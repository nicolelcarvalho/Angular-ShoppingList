var app = angular.module("shoppingList", []);
// Set up the controller. Scope is the model that binds the data between the controller and view (html)

app.controller("myCtrl", function($scope) {
	
	$scope.products = ["Milk", "Bread", "Cheese"];

	// Add an item to the products array 
	$scope.addItem = function() {
		$scope.errortext = "";
		// If the input field doesn't have a value, don't let it be added
		if(!$scope.addMe) {return;}
		// If the input field does have a value, check to see if the item is already in the list
		// If it's not in the list (not in the array is checked using -1), then push it into the products array
		if ($scope.products.indexOf($scope.addMe) == -1) {
			$scope.products.push($scope.addMe);
		// Else, fill the errortext variable with text to notify the user that the item is already in the shopping list
		} else {
			$scope.errortext = "The item is already in your shopping list.";
		}
	}

	// Remove an item from the products array 
	$scope.removeItem = function(i) {
		$scope.products.splice(i, 1);
	}

});
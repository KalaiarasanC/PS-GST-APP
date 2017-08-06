function userController($scope,$http){
	$scope.item = {};

	$scope.insertItem=function(){
		
		/*$http({
			method :"GET",
			path:"index.html",
			payload : $scope.item,
			 headers: {'Content-Type': 'application/'}
		});
	}*/

	console.log("called");
	console.log("items:",$scope.item);

 myLocalStorage = window.localStorage;

 myLocalStorage.setItem($scope.item);

 console.log(myLocalStorage.getItem(item);)
}

}
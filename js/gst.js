var app = angular.module("myApp", []);
	 app.controller('ColumnsCtrl', function($scope){
  var getdata = function(){
      $http({
            method: "GET",
            path: "loaclhost:8000/getProducts",
            success: function(data){
              console.log(data);
            }
          });
}
    $scope.persons = obj;
 });


var obj =[{
        "id" : "2322333",
        "name" : "ssssss",
        "price" :56,
        "tax" : 10
    },{
        "id" : "2322333",
        "name" : "ssssss",
        "price" :56,
        "tax" : 10
    },{
        "id" : "2322333",
        "name" : "ssssss",
        "price" :56,
        "tax" : 10
    },{
        "id" : "2322333",
        "name" : "ssssss",
        "price" :56,
        "tax" : 10
    },{
        "id" : "2322333",
        "name" : "ssssss",
        "price" :56,
        "tax" : 10
    },{
        "id" : "2322333",
        "name" : "ssssss",
        "price" :56,
        "tax" : 10
    }];

app.controller("userController",function($scope,$http){
  $scope.item = {};
  $scope.insertItem=function(){
    
    $http({
      method :"GET",
      path:"",
      payload : $scope.item,
       headers: {'Content-Type': 'application/'}
    });
  }
  console.log("items:",$scope.item);

});

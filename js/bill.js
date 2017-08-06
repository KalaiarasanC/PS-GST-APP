 var app = angular.module("myApp", []);
 app.controller('ListCtrl', function($scope){
    $scope.products = [{
        id : "34353",
        name : "abcd",
        price : 20,
        tax : 10
    },{
        id : "87364",
        name : "efghi",
        price : 15,
        tax : 10
    },{
        id: "67867",
        name: "jklmn",
        price : 40,
        tax : 10
    },{
        "id" : "55642",
        "name" : "klmno",
        "price" : 79,
        "tax" : 10
    }];
 });


/*app.controller('ListCtrl',function($scope){

  $scope.grand_total= grand_total+quantity * products[$index].price+((quantity * products[$index].price)*(products[$index].tax/100)); 
  console.log($scope.grand_total)
});
*/
app.directive("removeMe", function($rootScope) {
      return {
            link:function(scope,element,attrs)
            {
                element.bind("click",function() {
                    element.parent().parent().remove();
                });
            }
      }

});
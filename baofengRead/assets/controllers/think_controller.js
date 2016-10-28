var arr =JSON.parse(localStorage.myData);

app.controller('thinkController',['$scope',function($scope,thinkController){
  $scope.bookTypes = arr;
}]);

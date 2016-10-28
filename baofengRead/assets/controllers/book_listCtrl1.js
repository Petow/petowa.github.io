app.controller('booklistCtrl1', ['$scope', 'commonService', function($scope, commonService) {
    commonService.getData('wanben' ,function(res) {
      $scope.bookData=res.data;
    });
}]);

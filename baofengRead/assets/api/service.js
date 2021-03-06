app.factory('commonService', ['$http', function($http) {
    var service = {};
    // 根据分类信息取数据
    service.getData = function(type, callBack) {
        $http({
            url: '/petowa.github.io/baofengRead/data/B_' + type + '.json',
            method: 'get'
        }).then(function(res) {
            console.log('数据获取到了');
            callBack(res);
        }, function(err) {
            console.log(err);
        });
    };
    return service;
}]);

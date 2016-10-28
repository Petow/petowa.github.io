var app = angular.module('app',['ngRoute']);

// 配置路由信息
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl:'./assets/tpl/index.html',
          controller:'bookController'
        })
        .when('/wanb',{
          templateUrl:'./assets/tpl/wanb.html',
          controller:'booklistCtrl1'
        })
        .when('/think',{
          templateUrl:'./assets/tpl/think.html',
          controller:'thinkController'
        })
        .when('/book_detail/:id', {
        templateUrl:'./assets/tpl/book_detail.html',
        controller:'booklistCtrl'
      })
        .otherwise({
          redirectTo:'/',
        });
}]);

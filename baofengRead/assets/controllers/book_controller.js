app.controller('bookController',['$scope',function($scope,bookController){
  $scope.bookTypes = [
    {id:'dushi',name:'都市言情',describtion:'总排行榜'},
    {id:'kehuan',name:'科幻灵异',describtion:'总排行榜'},
    {id:'lishi',name:'历史军事',describtion:'总排行榜'},
    {id:'nvping',name:'女生频道',describtion:'总排行榜'},
    {id:'wangyou',name:'网游竞技',describtion:'总排行榜'},
    {id:'wuxia',name:'武侠仙侠',describtion:'总排行榜'},
    {id:'xuanhuan',name:'玄幻奇幻',describtion:'总排行榜'},
  ];
}]);

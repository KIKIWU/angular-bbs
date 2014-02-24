angular.module('bbsCtrl').controller('homePostListController',['rfPostFactory','$scope','alertBoxFactory',function(rfPost,$scope,alertBoxFactory){
    rfPost.list(function(data){
        $scope.postList = data.result;
    });
    $scope.deletePostOk = function(config,attr){
        console.log('confirm:' + config);
    }
    $scope.show = function(){
        alertBoxFactory('收藏成功',{textAlign : 'center',width: 200});
    }
}]);
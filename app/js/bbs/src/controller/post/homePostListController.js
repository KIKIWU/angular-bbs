/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlPost').controller('homePostListController',['rfPostFactory','$scope','alertBoxFactory',function(rfPost,$scope,alertBoxFactory){
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
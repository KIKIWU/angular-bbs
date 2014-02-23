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
    $scope.popupObj = {
        title : '确定删sddsdssd收到第三方第三方史蒂夫方法的撒除？',
        okFn : function(){
            console.log('ok');
        },
        cancelFn : function(){
            console.log('cancel');
        }
    }
    $scope.show = function(){
        alertBoxFactory('收藏成功',{textAlign : 'center',width: 200});
    }
}]);
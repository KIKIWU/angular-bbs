/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlPost').controller('homePostListCtrl',['rfPostFactory','$scope',function(rfPost,$scope){
    rfPost.list(function(data){
        $scope.postList = data.result;
    });
}]);
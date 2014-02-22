/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlUser').controller('homeUserListController',['rfUserFactory','$scope',function(rfUser,$scope){
    rfUser.list(function(data){
        $scope.userList = data.result;
    });
}]);
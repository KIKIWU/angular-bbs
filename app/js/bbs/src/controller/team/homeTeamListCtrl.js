/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlTeam').controller('homeTeamListCtrl',['rfTeamFactory','$scope',function(rfTeam,$scope){
    rfTeam.list(function(data){
        $scope.teamList = data.result;
    });
}]);
angular.module('bbsCtrl').controller('homeTeamListController',['rfTeamFactory','$scope',function(rfTeam,$scope){
    rfTeam.list(function(data){
        $scope.teamList = data.result;
    });
}]);
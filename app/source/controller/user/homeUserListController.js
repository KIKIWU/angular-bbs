angular.module('bbsCtrl').controller('homeUserListController',['rfUserFactory','$scope',function(rfUser,$scope){
    rfUser.list(function(data){
        $scope.userList = data.result;
    });
}]);
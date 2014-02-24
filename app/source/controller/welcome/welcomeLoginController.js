angular.module('bbsCtrl')
    .controller('welcomeLoginController',
        ['$scope','$http',function($scope,$http){
    $scope.login = function(){
        $scope.runValidate = true;
        if($scope.loginForm.$valid){
            $http.post('login_in',
               {
                   name : $scope.name,
                   pwd : $scope.pwd
               },
               {responseType : 'json'}
            ).success(function(data){
                if(data.code != 1000){
                    $scope.loginSign = '用户名或密码错误!';
                }else{
                    window.location.href = '/home';
                }
            });
        }

    };

}]);
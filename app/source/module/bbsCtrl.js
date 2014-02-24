angular.module('bbsCtrl', ['bbsServer', 'ngRoute']);
angular.module('bbsCtrl').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'tpl/post.html',
        controller: 'homePostListController'
    }).when('/team', {
            templateUrl: 'tpl/team.html',
            controller: 'homeTeamListController'
        }).when('/userList', {
            templateUrl: 'tpl/userList.html',
            controller: 'homeUserListController'
        }).when('/userEdit', {
            templateUrl: 'tpl/userEdit.html',
            controller: 'userEditController'
        }).when('/userInfo', {
            templateUrl: 'tpl/userInfo.html',
            controller: 'userInfoController'
        })
        .when('/pub', {
            templateUrl: 'tpl/userInfo.html',
            controller: 'userInfoController'
        });
}]);
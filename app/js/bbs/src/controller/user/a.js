/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlUser',['ngRoute','bbsServiceRESTful']);
angular.module('bbsCtrlUser').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/userList',{
        templateUrl : 'tpl/userList.html',
        controller : 'homeUserListCtrl'
    }).when('/userEdit',{
        templateUrl : 'tpl/userEdit.html',
        controller : 'userEditCtrl'
    }).when('/userInfo',{
        templateUrl : 'tpl/userInfo.html',
        controller : 'userInfoCtrl'
    });
}]);

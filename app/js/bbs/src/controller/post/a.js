/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlPost',['ngRoute','bbsServerRESTful']);
angular.module('bbsCtrlPost').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'tpl/post.html',
        controller : 'homePostListController'
    });
}]);

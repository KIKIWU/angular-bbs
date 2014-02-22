/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-13
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsCtrlTeam',['ngRoute','bbsServiceRESTful']);
angular.module('bbsCtrlTeam').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/team',{
        templateUrl : 'tpl/team.html',
        controller : 'homeTeamListController'
    });
}]);

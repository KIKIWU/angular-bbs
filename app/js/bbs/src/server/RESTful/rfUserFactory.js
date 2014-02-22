/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsServiceRESTful').factory('rfUserFactory',['$resource',function($resource){
    var url = '/api/user/:userId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var user = $resource(url,{},actions);

    return user;
}]);
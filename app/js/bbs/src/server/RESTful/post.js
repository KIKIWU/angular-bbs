/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午1:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsServiceRESTful').factory('rfPost',['$resource',function($resource){
    var url = '/api/post/:postId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var post = $resource(url,{},actions);

    return post;
}]);
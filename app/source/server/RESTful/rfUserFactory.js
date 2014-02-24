angular.module('bbsServerRESTful').factory('rfUserFactory',['$resource',function($resource){
    var url = '/api/user/:userId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var user = $resource(url,{},actions);

    return user;
}]);
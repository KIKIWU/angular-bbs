angular.module('bbsServerRESTful').factory('rfPostFactory',['$resource',function($resource){
    var url = '/api/post/:postId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var post = $resource(url,{},actions);

    return post;
}]);
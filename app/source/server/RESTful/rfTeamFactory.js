angular.module('bbsServerRESTful').factory('rfTeamFactory',['$resource',function($resource){
    var url = '/api/team/:teamId';
    var actions = {
        list : {
            method : 'get'
        }
    };
    var team = $resource(url,{},actions);

    return team;
}]);
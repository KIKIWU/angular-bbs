/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-17
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsDire')
    .directive('timeDirective',['$filter','$timeout',function($filter,$timeout){
    function schedule( element, attrs){
        element.text($filter('timeFilter')(attrs.value));
        $timeout(function(){
            schedule( element, attrs);
        },60000);
    }
    return function($scope,element,attr){
        schedule(element,attr);
    };
}]);
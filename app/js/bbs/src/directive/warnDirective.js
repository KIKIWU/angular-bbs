/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-17
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsDire')
    .directive('warnDirective',['$timeout',function($timeout){
    return {
        restrict : 'E',
        template : '<div class="alert warn-dire" ></div>',
        replace : true,
        controller : function(){
          console.log('sdf');
        },
        link : function(scope,ele,attr,controller){
            var timeout = 3000;
            scope.warnShow = function(obj){
                if(!obj || !obj.text) return;
                angular.isNumber(obj.timeout) && (timeout = obj.timeout);
                ele.text(obj.text);
                ele.addClass('alert-' + (obj.sign ? obj.sign : 'warning'));
                ele.show();
                window.setTimeout(function(){
                    ele.hide();
                },timeout);
            }
        }
    };
}]);
/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-14
 * Time: 下午10:33
 * To change this template use File | Settings | File Templates.
 */
angular.module('bbsFilter').filter('timeFilter',['$filter',function($filter){
    var dateFormat = $filter('date');

    return function(time){
        var timeStr;
        var currTime = (new Date()).getTime();
        var dValue = currTime - time;

        if((dValue = parseInt(dValue/1000)) < 60){
            timeStr = dValue + "秒前";
        }else if((dValue = parseInt(dValue/60)) < 60){
            timeStr = dValue + "分钟前";
        }else if((dValue = parseInt(dValue/60)) < 24){
            timeStr = dValue + "小时前";
        }else if((dValue = parseInt(dValue/24)) < 30){
            timeStr = dValue + "天前";
        }else{
            timeStr = dateFormat(time,'yyyy-MM-dd HH:mm:ss');
        }
        return timeStr;
    };
}]);
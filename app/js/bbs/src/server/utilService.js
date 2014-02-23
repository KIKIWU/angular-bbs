angular.module('bbsServer').service('utilService',[function(){

    this.fetch = function(firstObj,secondObj,defaultObj,obj){
        var resultObj = angular.isObject(obj) ? obj : {};

        for(var key in defaultObj){
            if(firstObj && firstObj[key]){
                resultObj[key] = firstObj[key];
            }else if(secondObj && secondObj[key]){
                resultObj[key] = secondObj[key];
            }else{
                resultObj[key] = defaultObj[key];
            }
        }

        if(!angular.isObject(obj)){
            return resultObj;
        }
    }
}]);
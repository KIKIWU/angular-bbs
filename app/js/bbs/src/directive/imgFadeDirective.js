angular.module('bbsDire').directive('imgFadeDirective',['$window','$log',function(window,log){
    return {
        restrict : 'E',
        scope : {list : '='},
        template : '<div style="overflow: hidden;position: relative"></div>',
        replace : true,
        link : function(scope,element,attr){
            if(!scope.list || scope.list.length < 1 ){
                return log.error('list must gt 2');
            }

            var navSize = 10,timePollFn,isAnimate,currImg;
            var imgTag = '<img style="position: absolute;top:0px;left:0px;width:'+ attr.width +'px;height:'+ attr.height +'px;">';
            var navTag = '<div class="pull-left" style="text-align:center;margin:0px;padding:0px;width:'+ (navSize * 2) +'px;height:'+ (navSize * 2) +'px;cursor:pointer;"></span>';
            var navPanelTag = '<div class="clearfix" style="position: relative;z-index: 100;margin:0px;padding:0px;"></div>';
            var list = scope.list;
            var speed = attr.speed ? attr.speed * 1000 : 4000;

            element[0].style.width = attr.width + 'px';
            element[0].style.height = attr.height + 'px';
            element.append(angular.element(imgTag).attr('src',list[0]));
            element.append(angular.element(imgTag).hide().attr('src',list[1]));

            var navPanel = angular.element(navPanelTag);
            navPanel.css('top',attr.height - (navSize * 2) - 5 + 'px');
            navPanel.css('left',attr.width - (list.length * (navSize * 2)) - 5 + 'px');
            angular.forEach(list,function(val,index){
                var nav = angular.element(navTag);
                nav.text(index + 1);
                nav.data('index',index);
                nav.on('click',navClickFn);
                navPanel.append(nav);
            });
            element.append(navPanel);

            function navClickFn(){
                if(!isAnimate){
                    if(timePollFn) window.clearTimeout(timePollFn);
                    currImg = angular.element(this).data('index');
                    element.children('img:eq(1)').attr('src',list[currImg]);
                    pollFn();
                }
            }

            function pollFn(){
                if(currImg !== undefined){
                    isAnimate = true;

                    navPanel.children().css({'color':'black','border':''});
                    navPanel.children(':eq('+ currImg +')').css({'color':'red','border':'solid 1px gray'});
                    angular.element(element.children('img:eq(1)')).fadeIn("slow",function(){
                        isAnimate = false;
                        var imgEle = angular.element(element.children('img:eq(0)'));
                        imgEle.hide().attr('src',list[currImg]);
                        imgEle.remove();
                        element.append(imgEle);
                    });
                }else{
                    currImg = 0;
                }

                (++currImg >= list.length) && (currImg = 0);
                timePollFn = window.setTimeout(pollFn,speed);
            }
            pollFn();
        }
    };
}]);


angular.module('bbsDire').directive('imgSlideDirective',['$window','$log','utilService',function(window,log,utilService){
    var defaultConfig = {
        list : [],
        width : 650,
        height : 100,
        speed : 4,
        direction : 'h'
    };

    return {
        restrict : 'E',
        scope : {
            list : '=',
            width : '@',
            height : '@',
            speed : '@',
            direction : '@'
        },
        template : '<div style="overflow: hidden;position: relative"></div>',
        replace : true,
        link : linkFn
    };
    function linkFn(scope, element, attr) {
        if (!angular.isObject(scope.config)) scope.config = {};
        utilService.fetch(scope, scope.config, defaultConfig, scope.config);
        if (!scope.config.list || scope.config.list.length < 1) {
            return log.error('list must gt 2');
        }

        var navSize = 10, timePollFn, isAnimate, currImg;
        var imgTag = '<img style="position: absolute;width:' + scope.config.width + 'px;height:' + scope.config.height + 'px;">';
        var navTag = '<div class="pull-left" style="text-align:center;margin:0px;padding:0px;width:' + (navSize * 2) + 'px;height:' + (navSize * 2) + 'px;cursor:pointer;"></span>';
        var navPanelTag = '<div class="clearfix" style="position: relative;z-index: 100;margin:0px;padding:0px;"></div>';
        var list = scope.config.list;
        var speed = scope.config.speed * 1000;

        var position = scope.config.direction == 'h' ? 'left' : 'top';
        var positionNum = position == 'left' ? scope.config.width : -scope.config.height;

        element[0].style.width = scope.config.width + 'px';
        element[0].style.height = scope.config.height + 'px';
        element.append(angular.element(imgTag).css(position, '0px').css((position == 'left' ? 'top' : 'left'), '0px').attr('src', list[0]));
        element.append(angular.element(imgTag).css(position, positionNum + 'px').css((position == 'left' ? 'top' : 'left'), '0px').attr('src', list[1]));

        var navPanel = angular.element(navPanelTag);
        navPanel.css('top', scope.config.height - (navSize * 2) - 5 + 'px');
        navPanel.css('left', scope.config.width - (list.length * (navSize * 2)) - 5 + 'px');
        angular.forEach(list, function (val, index) {
            var nav = angular.element(navTag);
            nav.text(index + 1);
            nav.data('index', index);
            nav.on('click', navClickFn);
            navPanel.append(nav);
        });
        element.append(navPanel);

        function navClickFn() {
            if (!isAnimate) {
                if (timePollFn) window.clearTimeout(timePollFn);
                currImg = angular.element(this).data('index');
                element.children('img:eq(1)').attr('src', list[currImg]);
                pollFn();
            }
        }

        function pollFn() {
            if (currImg !== undefined) {
                var animateProp = {};
                animateProp[position] = '0px';
                isAnimate = true;
                navPanel.children().css({'color': 'black', 'border': ''});
                navPanel.children(':eq(' + currImg + ')').css({'color': 'red', 'border': 'solid 1px gray'});
                angular.element(element.children('img:eq(1)')).animate(animateProp, 600, null, function () {
                    isAnimate = false;
                    var imgEle = angular.element(element.children('img:eq(0)'));
                    imgEle.css(position, positionNum + "px").attr('src', list[currImg]);
                    imgEle.remove();
                    element.append(imgEle);
                });
            } else {
                currImg = 0;
            }

            (++currImg >= list.length) && (currImg = 0);
            timePollFn = window.setTimeout(pollFn, speed);
        }

        pollFn();
    }
}]);


angular.module('bbsDire').directive('popupBoxDirective', ['domService', 'utilService','$compile','$http', function (domService, utilService,$compile,$http) {
    var defaultConfig = {
        width: 190,
        event: 'mouseenter',
        direction: 'top',
        template: '#',
        templateUrl: '#',
        controller: '#'
    };

    return {
        scope: {
            config: '=?popupBoxDirective',
            width: '=',
            event: '=',
            template: '=',
            templateUrl: '=',
            controller: '=',
            direction: '='
        },
        link: linkFn
    }

    function linkFn(scope, element, attr) {
        if (!angular.isObject(scope.config)) scope.config = {};
        utilService.fetch(scope, scope.config, defaultConfig, scope.config);

        element.on(scope.config.event, eventListener);

        function eventListener() {
            if (element.data('isShow')) return;
            else element.data('isShow', true);

            if (element.data('popupBox')) {
                element.data('popupBox').show();
                return;
            }

            var elementPosition = domService.position(element[0]);

            var panelHtml = '<div style="z-index:100;border-radius:4px;position:absolute;overflow: hidden;width:' + scope.config.width + 'px"></div>';
            var bodyHtml = '<div style="display:none;padding:3px;background:url(/img/layer_bg.png);"></div>';
            var contentHtml = '<div style="padding:10px 20px;background-color: #ffffff;text-align: center;">加载中...</div>';
            var panelEle = angular.element(panelHtml);
            var bodyEle = angular.element(bodyHtml);
            var contentEle = angular.element(contentHtml);
            bodyEle.append(contentEle);
            panelEle.append(bodyEle);
            document.body.appendChild(panelEle[0]);

            var panelEleHeight = parseInt(panelEle.css('height'));
            var panelElePosition = getPosition(
                {top: elementPosition.top, left: elementPosition.left, width: parseInt(element.css('width')), height: parseInt(element.css('height'))},
                {top: 0, left: 0, width: parseInt(panelEle.css('width')), height: parseInt(panelEle.css('height'))},
                scope.config.direction
            );
            panelEle.css({top: panelElePosition.top + 'px', left: panelElePosition.left + 'px'});
            bodyEle.fadeIn('fast');

            panelEle.one('mouseenter', function () {
                panelEle.data('enter', true);
            });
            panelEle.one('mouseleave', function () {
                panelEle.data('enter', false);
                removeFn();
            });
            element.one('mouseleave', removeFn);

            function removeFn(event) {
                window.setTimeout(function () {
                    if (!panelEle.data('enter')) {
                        bodyEle.fadeOut('fast',null,function(){
                            panelEle.remove();
                            element.data('isShow', false);
                        });
                    }
                }, 300);
            }

            if(scope.config.template && scope.config.template != '#') compileContent();
            else loadContent();

            function loadContent(){
                $http({url : scope.config.templateUrl,method:'get'}).success(function(data){
                    scope.config.template = data;
                    compileContent();
                });
            }

            function compileContent(){
                contentEle.html(scope.config.template);
                contentEle.attr('ng-controller',scope.config.controller);
                $compile(contentEle)(scope);
                scope.$digest();
            }
        }

        function getPosition(dist, tag, direction) {
            if (direction == 'top') {
                return {top: dist.top - tag.height + tag.top, left: dist.left + tag.left};
            } else if (direction == 'left') {
                return {top: dist.top + tag.top, left: dist.left - tag.width + tag.left};
            } else if (direction == 'right') {
                return {top: dist.top + tag.top, left: dist.left + dist.width + tag.left};
            } else if (direction == 'bottom') {
                return {top: dist.top + dist.height + tag.top, left: dist.left + tag.left};
            } else {
                return {top: 0, left: 0};
            }
        }
    }
}]);
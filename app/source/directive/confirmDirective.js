angular.module('bbsDire').directive('confirmDirective',['domService','utilService',function(domService,utilService){
    var defaultConfig = {
        okText : '确定',
        cancelText : '取消',
        title : '标题',
        okFn : angular.noop,
        cancelFn : angular.noop,
        width : 190
    };
    var popupPanelHtml = '<div style="width:$width$px;z-index:100;border-radius:4px;margin:0px;overflow: hidden;position: relative;"></div>';
    var popupBodyHtml = '<div style="padding:3px;background:url(/img/layer_bg.png);position: relative;"><div style="line-height:30px;padding:12px;background-color:white;"><div style="margin-bottom:4px;text-align: center;">$title$</div><div style="text-align: center;"><span class="btn btn-success popup-ok">$okText$</span>&nbsp;&nbsp;<span class="btn btn-default popup-cancel">$cancelText$</span></div></div></div>';

    return {
        scope : {
            config : '=?confirmDirective',
            okText : '@',
            cancelText : '@',
            title : '@',
            okFn : '&',
            cancelFn : '&',
            width : '@'
        },
        link : linkFn
    };
    function linkFn(scope, element, attr) {
        if (!angular.isObject(scope.config)) scope.config = {};
        utilService.fetch(scope, scope.config, defaultConfig, scope.config);

        element.on('click', function () {
            if (element.data('popup')) return;
            else element.data('popup', true);

            var pos = domService.position(element[0]);
            var popupPanelEle = angular.element(popupPanelHtml.replace('$width$',scope.config.width));
            var popupBodyEle = angular.element(popupBodyHtml.replace('$title$',scope.config.title)
                .replace('$okText$',scope.config.okText)
                .replace('$cancelText$',scope.config.cancelText));
            popupPanelEle.append(popupBodyEle);
            document.body.appendChild(popupPanelEle[0]);

            var popupEleHeight = parseInt(popupPanelEle.css('height'));
            var elementWidth = parseInt(element.css('width'));

            popupPanelEle.css({position: 'absolute', top: (pos.top - popupEleHeight) + 'px', left: pos.left - Math.abs(scope.config.width - elementWidth) / 2 + 'px'});
            popupBodyEle.remove();

            popupBodyEle = angular.element(popupBodyHtml.replace('$title$',scope.config.title)
                .replace('$okText$',scope.config.okText)
                .replace('$cancelText$',scope.config.cancelText)
            ).css('top', popupEleHeight + 'px');
            popupPanelEle.append(popupBodyEle);
            popupBodyEle.animate({top: '0px'}, 'fast');

            popupBodyEle.find('.popup-ok').on('click', function () {
                popupBodyEle.animate({top: popupEleHeight + 'px'}, 'fast', null, function () {
                    removeEle();
                    scope.config.okFn({config : scope.config,attr : attr});
                });
            });

            popupBodyEle.find('.popup-cancel').on('click', function () {
                popupBodyEle.animate({top: popupEleHeight + 'px'}, 'fast', null, function () {
                    removeEle();
                    scope.config.cancelFn({config : scope.config,attr : attr});
                });
            });

            function removeEle() {
                popupPanelEle.remove();
                element.data('popup', false);
            }
        });

    }
}]);
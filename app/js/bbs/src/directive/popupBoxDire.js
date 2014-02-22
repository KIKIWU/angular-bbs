angular.module('bbsDire').directive('popupBoxDire',['domService',function(domService){
    return {
        scope : {popupObj : '=popupBoxDire'},
        link: function(scope,element,attr){
            if(!angular.isObject(scope.popupObj)) scope.popupObj = {};
            initData(scope.popupObj);
            var popupEleWidth = attr.width ? parseInt(attr.width) : 190;
            var popupPanelHtml = '<div style="width:'+ popupEleWidth +'px;z-index:100;border-radius:4px;margin:0px;overflow: hidden;position: relative;"></div>';
            var popupBodyHtml = '<div style="padding:3px;background:url(/img/layer_bg.png);position: relative;"><div style="line-height:30px;padding:12px;background-color:white;"><div style="margin-bottom:4px;text-align: center;">'+ scope.popupObj.title +'</div><div style="text-align: center;"><span class="btn btn-success popup-ok">' + scope.popupObj.okText + '</span>&nbsp;&nbsp;<span class="btn btn-default popup-cancel">'+ scope.popupObj.cancelText +'</span></div></div></div>';

            element.on('click',function(){
                if(element.data('popup')) return;
                else element.data('popup',true);

                var pos = domService.position(element[0]);
                var popupPanelEle = angular.element(popupPanelHtml);
                var popupBodyEle = angular.element(popupBodyHtml);
                popupPanelEle.append(popupBodyEle);
                document.body.appendChild(popupPanelEle[0]);

                var popupEleHeight = parseInt(popupPanelEle.css('height'));
                var elementWidth = parseInt(element.css('width'));

                popupPanelEle.css({position: 'absolute',top : (pos.top - popupEleHeight) + 'px',left : pos.left - Math.abs(popupEleWidth - elementWidth)/2 + 'px'});
                popupBodyEle.remove();

                popupBodyEle = angular.element(popupBodyHtml).css('top',popupEleHeight + 'px');
                popupPanelEle.append(popupBodyEle);
                popupBodyEle.animate({top : '0px'},'fast');

                popupBodyEle.find('.popup-ok').on('click',function(){
                    removeEle();
                    scope.popupObj.okFn(element,attr);
                });

                popupBodyEle.find('.popup-cancel').on('click',function(){
                    removeEle();
                    scope.popupObj.cancelFn(element,attr);
                });

                function removeEle(){
                    popupPanelEle.remove();
                    element.data('popup',false);
                }
            });


            function initData(obj){
                !obj.okText && (obj.okText = '确定');
                !obj.cancelText && (obj.cancelText = '取消');
                attr.title && (obj.title = attr.title);
                !obj.okFn && (obj.okFn = angular.noop);
                !obj.cancelFn && (obj.cancelFn = angular.noop);
            }
        }
    };
}]);
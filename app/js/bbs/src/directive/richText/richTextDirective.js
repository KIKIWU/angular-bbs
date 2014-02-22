angular.module('bbsDire')
    .directive('richTextDirective',[function(){
        return {
            link : function($scope,$element){
                $($element[0]).wysihtml5({
                    color : true,
                    size : 'default',
                    stylesheets : ['/css/bbs_0.0.0.css']
                });

                var caretBookmark;

                $($element[0]).prev().attr('id','richTextImageQueueID');

                $($element[0]).prev().find('a[data-wysihtml5-command=insertImage]').uploadify({
                    swf : '/resource/uploadify.swf',
                    uploader : '/upload',
                    multi : false,
                    buttonClass : 'glyphicon glyphicon-picture btn btn-default',
                    width : 40,
                    height : 33,
                    queueID : 'richTextImageQueueID',
                    buttonText : ' ',
                    onDialogOpen : function(){
                        $($element).data('wysihtml5').editor.currentView.element.focus(false);
                        caretBookmark = $($element).data('wysihtml5').editor.composer.selection.getBookmark();
                    },
                    onDialogClose : function(){
                        $($element).data('wysihtml5').editor.currentView.element.focus();
                    },
                    onUploadSuccess : function(file, data, response){
                        data = JSON.parse(data);
                        $($element).data('wysihtml5').editor.currentView.element.focus();
                        if (caretBookmark) {
                            $($element).data('wysihtml5').editor.composer.selection.setBookmark(caretBookmark);
                            caretBookmark = null;
                        }
                        $($element).data('wysihtml5').editor.composer.commands.exec("insertImage", data.url);
                    }
                });

            }
        };
    }]);

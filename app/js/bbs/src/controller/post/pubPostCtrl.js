angular.module('bbsCtrlPost').controller('pubPostCtrl',['$scope',function($scope){
    $scope.fileUploadList = [];

    $scope.removeFileUpload = function(index){
        $scope.fileUploadList.splice(index,1);
    }

    $('#upload-file').uploadify({
        swf : '/resource/uploadify.swf',
        uploader : '/upload',
        multi : false,
        buttonClass : 'btn btn-default',
        width : 100,
        height : 33,
        buttonText : '上传附件',
        onUploadSuccess : function(file, data, response){
            $scope.$apply(function(){
                $scope.fileUploadList.push({name : 'dddd'});
            });
        }
    });
}]);
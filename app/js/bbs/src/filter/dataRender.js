angular.module('bbsFilter').filter('dataRender', [function () {
    return function (data, label, select, array) {
        var labelValue = 'value';
        var selectValue = 'id';

        if (angular.isArray(label)) {
            array = label;
            label = labelValue;
            select = selectValue;
        }
        var viewValue = '';
        for (var i = 0; i < array.length; i++) {
            if (!angular.isArray(data)) {
                if (array[i][select] == data) return array[i][label];
            } else {
                for (var j = 0; j < data.length; j++) {
                    if (array[i][select] == data[j]) viewValue += (',' + array[i][label]);
                }
            }
        }
        return viewValue.length ? viewValue.substr(1) : '';
        return '';
    }
}]);
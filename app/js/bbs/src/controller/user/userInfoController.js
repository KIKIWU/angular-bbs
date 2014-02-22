angular.module('bbsCtrlUser').controller('userInfoController',['$scope',function($scope){
    $scope.userInfo = {
        name: '刘顺顺',
        nickName: 'liuss',
        sex: 'woman',
        age: 18,
        hobby: [1,2],
        allHobbies : [{value : '运动',id : 1},{value : '阅读',id : 2},{value : '看电视',id : 3},{value : '旅游',id : 4}],
        email : 'liuss@visionet.com.cn',
        homePage : 'http://liuss.com',
        introduction : '我是一个程序员',
        education: 2,
        allEducations : [{value : '小学',id : 1},{value : '初中',id : 2},{value : '高中',id : 3},{value : '本科',id : 4},{value : '本科以上',id : 5}],
        birthday : '09-09',
        allColors : [{value : '黑色',id : 1},{value : '黄色',id : 2},{value : '白色',id : 3},{value : '蓝色',id : 4}],
        skinColor : 4,
        allProfessions : [{value : '医生',id : 1},{value : '老师',id : 2},{value : '工人',id : 3},{value : '司机',id : 4},{value : '厨师',id : 5},{value : '演员',id : 6}],
        profession : [1,4,3],
        allProvinces : [{value : '请选择'},{value : '上海', id : 2},{value : '北京', id : 3},{value : '河南', id : 4},{value : '江西', id : 5},{value : '四川', id : 6}],
        province : 4
    };
}]);
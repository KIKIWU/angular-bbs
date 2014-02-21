/**
 * Created with JetBrains WebStorm.
 * User: liuss
 * Date: 13-10-10
 * Time: 下午9:30
 * To change this template use File | Settings | File Templates.
 */
var globalData = require('../globalData.json');
exports.in = function(req,res){
    var success = false;

    for(var i in globalData.userList){
        if(globalData.userList[i].name == req.body.name
            && globalData.userList[i].pwd == req.body.pwd){
            res.json({code : 1000,status : 'ok',result : '登陆成功'});
            success = true;
            break;
        }
    }

    if(!success){
        res.json({code : 1001,status : 'error',result : '登陆失败'});
    }
}
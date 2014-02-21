
/*
 * GET home page.
 */
var globalData = require('../globalData.json');
exports.index = function(req, res){
  res.render('index', { title: 'Express' ,gd : globalData});
};

/**
 * Module dependencies.
 */
var globalData = require('./globalData.json');
var express = require('express');
var routes = require('./routes');
var login = require('./routes/login');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/login_in',login.in);
app.get('/home',function(req,res){
   res.render('home',{gd : globalData});
});

app.get('/api/post',function(req,res){
    res.json({
        code : 10000,
        status : 'ok',
        result : globalData.postList
    });
});
app.get('/api/team',function(req,res){
    res.json({
        code : 10000,
        status : 'ok',
        result : globalData.teamList
    });
});
app.get('/api/user',function(req,res){
    res.json({
        code : 10000,
        status : 'ok',
        result : globalData.userList
    });
});
app.get('/pub',function(req,res){
    res.render('pub',{gd : globalData});
});

app.post('/upload',function(req,res){
    res.json({url : '/uploadimg'});
});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var express = require('express');
var http = require('http');
var app = express();



app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
	res.sendFile(__dirname + "/" + "index.htm")
});

app.get('/post', function (req, res){
	console.log(req.query.name);
});





http.createServer(app).listen(app.get('port'), function(){
	console.log('PORT:' + app.get('port'));
});
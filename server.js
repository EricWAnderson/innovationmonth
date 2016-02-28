var express = require('express');

var app = express();

app.use(express.static('public'));
app.get('/', function(request, response){
  response.sendFile('/public/index.html');
});

var server = app.listen(process.env.PORT || 3000, function(){
   var port = server.address().port;
   console.log('listening on port', port);
});

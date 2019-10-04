var express = require("express");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8082;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(__dirname + '/app/public'));

 //set up routes
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

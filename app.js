var express = require('express');
var bodyParser = require('body-parser');
var Database = require('./db/database');
var routes = require('./routes/controller');
var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', routes);

app.listen(port, function () {
    console.log("Starting at port 3000...");
});

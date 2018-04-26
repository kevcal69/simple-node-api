var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

var Hero 	= require('./app/models/heroes')
var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});


router.get('/hero', function(req, res) {
		var length = Hero.length;
		var index = Math.floor(Math.random() * (length - 0)) + 0;
		res.json({'hero': Hero[index]});
	});
router.get('/justiceleague', function(req, res) {
		res.json(Hero);
	});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

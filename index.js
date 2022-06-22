var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

// home page
app.get('/', function(request, response) {
  response.render('index');
});

// Check password strength
app.get('/check', function(request, response) {
	response.render('check');
});

// Generate secure password
app.get('/generate', function(request, response) {
	response.render('generate.ejs');
});

// tips page
app.get('/tips', function(request, response) {
	response.render('tips');
});

// quiz page
app.get('/quiz', function(request, response) {
	response.render('quiz');
});


var quiz = {
	1: { // Google
		image: "/google.png",
		answer: 'real'
	},
	2: { // Paypal
		image: "/paypal.png",
		answer: 'fake'
	},
	3: { // Facebook
		image: "/facebook.png",
		answer: 'real'
	},
	4: { // Apple
		image: "/sms.png",
		answer: 'fake'
	},
	5: { // university.png
		image: "/university.png",
		answer: 'fake'
	},
	6: { // email.png
		image: "/email.png",
		answer: 'fake'
	},
	7: { // winnaar.png
		image: "/winnaar.png",
		answer: 'fake'
	},
	8: { // figma.png
		image: "/figma.png",
		answer: 'real'
	},
}

// quiz id
app.get('/quiz/:id', function(request, response) {
	const regex = new RegExp('^[0-9]+$');

	var id = request.params.id

	// check if id is a number
	if (regex.test(id)) {

		if (Number(id) > Object.keys(quiz).length) {
			response.redirect('/quiz');
			return
		}

		response.render('quiz_page', {
			id: id,
			json: quiz[id]
		});
	} else {
		response.status(500).json({
			error: "id is not a number"
		})
	}


});



app.listen(80);
console.log('Server is listening on port 80');
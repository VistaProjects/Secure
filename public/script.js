// active btn btn-warning
var url = '/' + window.location.href.split('/').pop()

switch (url) {
	case '/':
		document.getElementById(url).classList.add('nav-active');
		break;
	case '/check':
		document.getElementById('password-nav').classList.add('nav-active');
		break;
	case '/generate':
		document.getElementById('password-nav').classList.add('nav-active');
		break;
	case '/tips':
		document.getElementById(url).classList.add('nav-active');
		break;
	case url.includes('/quiz'):
		document.getElementById(url).classList.add('nav-active');
		break;
}
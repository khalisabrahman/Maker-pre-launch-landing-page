const email = document.getElementById('email');

function checkEmail(input) {
	const emailValidation =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailValidation.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, `Oops! That doesn't look like an email address`);
	}
}

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';

	const small = formControl.querySelector('small');
	small.innerText = message;

	email.classList.add('errorBorder');
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	if (email.classList.contains('errorBorder')) {
		email.classList.remove('errorBorder');
	}
	console.log('success');
}

//Event Listeners
form.addEventListener('submit', function (e) {
	e.preventDefault();
	checkEmail(email);
});

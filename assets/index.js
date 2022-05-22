const form = document.getElementById('gform');
const username = document.getElementById('fname');
const subject = document.getElementById('subject');
const text = document.getElementById('text');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});



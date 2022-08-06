const loginButton = document.querySelector('#login-btn');
const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');
const textLength = document.querySelector('#counter');
const text = document.querySelector('#textarea');

const loginVerify = () => {
  if (emailForm.value === 'tryber@teste.com'
  && passwordForm.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
};

const textCount = () => {
  textLength.innerHTML = 500 - text.value.length;
};

loginButton.addEventListener('click', loginVerify);

function submitButtun() {
  const submit = document.querySelector('#submit-btn');
  const valueCheckBox = document.querySelector('#agreement').checked;
  submit.disabled = true;
  if (valueCheckBox === true) {
    submit.disabled = false;
  }
}

const checkBox = document.querySelector('#agreement');

checkBox.addEventListener('click', submitButtun);

text.addEventListener('keyup', textCount);

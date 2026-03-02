const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(fieldId, message) {
  const element = document.getElementById(fieldId);
  if (element) {
    element.textContent = message;
  }
}

function setStatus(statusId, message, type) {
  const status = document.getElementById(statusId);
  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.remove('success', 'error');
  if (type) {
    status.classList.add(type);
  }
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');

    setError('login-email-error', '');
    setError('login-password-error', '');
    setStatus('login-status', '', null);

    if (!emailPattern.test(email.value.trim())) {
      setError('login-email-error', 'Inserisci un indirizzo email valido.');
      valid = false;
    }

    if (password.value.length < 8) {
      setError('login-password-error', 'La password deve contenere almeno 8 caratteri.');
      valid = false;
    }

    if (valid) {
      setStatus('login-status', 'Login simulato con successo.', 'success');
      loginForm.reset();
    } else {
      setStatus('login-status', 'Controlla i campi evidenziati e riprova.', 'error');
    }
  });
}

const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById('register-name');
    const email = document.getElementById('register-email');
    const password = document.getElementById('register-password');
    const terms = document.getElementById('register-terms');

    setError('register-name-error', '');
    setError('register-email-error', '');
    setError('register-password-error', '');
    setError('register-terms-error', '');
    setStatus('register-status', '', null);

    if (name.value.trim().length < 2) {
      setError('register-name-error', 'Inserisci almeno 2 caratteri per il nome.');
      valid = false;
    }

    if (!emailPattern.test(email.value.trim())) {
      setError('register-email-error', 'Inserisci un indirizzo email valido.');
      valid = false;
    }

    if (password.value.length < 8) {
      setError('register-password-error', 'La password deve contenere almeno 8 caratteri.');
      valid = false;
    }

    if (!terms.checked) {
      setError('register-terms-error', 'Devi accettare i termini per continuare.');
      valid = false;
    }

    if (valid) {
      setStatus('register-status', 'Registrazione simulata con successo.', 'success');
      registerForm.reset();
    } else {
      setStatus('register-status', 'Correggi gli errori nel modulo e riprova.', 'error');
    }
  });
}

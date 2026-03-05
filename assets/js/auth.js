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

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');

    let valid = true;

    setError('contact-name-error', '');
    setError('contact-email-error', '');
    setError('contact-message-error', '');
    setStatus('contact-status', '', null);

    if (!name.value.trim() || name.value.trim().length < 2) {
      setError('contact-name-error', 'Inserisci nome e cognome (minimo 2 caratteri).');
      valid = false;
    }

    if (!emailPattern.test(email.value.trim())) {
      setError('contact-email-error', 'Inserisci un indirizzo email valido.');
      valid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      setError('contact-message-error', 'Inserisci un messaggio di almeno 10 caratteri.');
      valid = false;
    }

    if (valid) {
      setStatus('contact-status', 'Richiesta inviata (simulazione). Ti contatteremo presto.', 'success');
      contactForm.reset();
    } else {
      setStatus('contact-status', 'Controlla i campi evidenziati e riprova.', 'error');
    }
  });
}

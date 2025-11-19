const form = document.getElementById('contactForm');
const textarea = document.querySelector('textarea');
const radios = form.querySelectorAll('input[name="support-type"]');
const radioField = document.getElementById('queryField');
const successDiv = document.querySelector('.form--success');
const radioGroup = document.getElementById('query-radiogroup');
const radioError = document.getElementById('query-error');

//validation for name and emails and aria-invaid
form.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', () => {
    const error = document.getElementById(field.id + '-error');
    const isValid = field.checkValidity();

    field.classList.toggle('invalid', !isValid);
    field.setAttribute('aria-invalid', isValid ? 'false' : 'true');

    if (error) {
      error.hidden = isValid;
    }
  });
});

//check message textarea
textarea.addEventListener('focusout', () => {
  const error = document.getElementById('message-error');

  if (textarea.value.trim() === '') {
    textarea.classList.add('invalid');
    textarea.setAttribute('aria-invalid', 'true');
    error.hidden = false;
  } else {
    textarea.classList.remove('invalid');
    textarea.setAttribute('aria-invalid', 'false');
    error.hidden = true;
  }
});

// When any radio is selected, remove invalid styling
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    radioField.classList.remove('invalid');
    radioGroup.setAttribute('aria-invalid', 'false');
    radioError.hidden = true;
  });
});

//submition & check radio
form.addEventListener('submit', (e) => {
  const isChecked = [...radios].some((r) => r.checked);

  if (!isChecked) {
    e.preventDefault();
    radioField.classList.add('invalid');
    radioGroup.setAttribute('aria-invalid', 'true');
    radioError.hidden = false;

    return;
  } else {
    radioField.classList.remove('invalid');
    radioGroup.setAttribute('aria-invalid', 'false');
    radioError.hidden = true;
  }

  // Check entire form validity
  if (!form.reportValidity()) {
    e.preventDefault();
    return;
  }

  // form is valid
  e.preventDefault(); // Prevent real submit
  successDiv.hidden = false;
  successDiv.focus();
  clearInputs();
  //remove sucess div after 5 seconds
  setTimeout(() => {
    successDiv.hidden = true;
  }, 5000);
});

function clearInputs() {
  const fields = form.querySelectorAll('input, textarea, select');

  fields.forEach((field) => {
    if (field.type === 'submit' || field.type === 'button') return;
    // Clear text fields + textarea
    if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') {
      // uncheck radios/checkboxes
      if (field.type === 'radio' || field.type === 'checkbox') {
        field.checked = false;
      } else {
        //names,email
        field.value = '';
      }
    }
  });
}

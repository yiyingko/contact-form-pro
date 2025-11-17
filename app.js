const form = document.getElementById('contactForm');
const textarea = document.querySelector('textarea');
const radios = form.querySelectorAll('input[name="support-type"]');
const radioField = document.getElementById('queryField');
const isChecked = [...radios].some((r) => r.checked);
const successDiv = document.querySelector('.form--success');

//validation for name and emails
form.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', () => {
    if (field.checkValidity()) {
      field.classList.remove('invalid');
    } else {
      field.classList.add('invalid');
    }
  });
});

//check message textarea
textarea.addEventListener('focusout', () => {
  if (textarea.value.trim() === '') {
    textarea.classList.add('invalid');
  } else {
    textarea.classList.remove('invalid');
  }
});

// When any radio is selected, remove invalid styling
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    radioField.classList.remove('invalid');
  });
});

//submition & check radio
form.addEventListener('submit', (e) => {
  if (!isChecked) {
    e.preventDefault();
    radioField.classList.add('invalid');
    return;
  } else {
    radioField.classList.remove('invalid');
  }

  // Check entire form validity
  if (!form.reportValidity()) {
    e.preventDefault();
    return;
  }

  // form is valid
  e.preventDefault(); // Prevent real submit
  successDiv.classList.add('show');
  clearInputs();
  //remove sucess div after 5 seconds
  setTimeout(() => {
    successDiv.classList.remove('show');
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

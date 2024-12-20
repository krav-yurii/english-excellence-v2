document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll(
    'input[name^="user-"], textarea[name^="user-"]'
  );
  const form = document.getElementById('leaveForm');

  const updateFeedbackState = () => {
    const feedbackState = {};
    inputs.forEach(input => {
      feedbackState[input.name.split('-')[1]] = input.value.trim();
    });
  };

  const validateInput = input => {
    if (input.value.trim() === '') {
      input.classList.add('invalid');
      input.classList.remove('valid');
      return false;
    } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
      return true;
    }
  };

  inputs.forEach(input => {
    input.addEventListener('input', updateFeedbackState);

    input.addEventListener('blur', () => {
      validateInput(input);
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      alert('Form submitted successfully!');
      form.reset();
      inputs.forEach(input => input.classList.remove('valid', 'invalid'));
    }
  });
});

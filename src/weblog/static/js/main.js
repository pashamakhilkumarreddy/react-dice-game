document.addEventListener('DOMContentLoaded', () => {
  const _navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
  if (_navbarBurgers.length) {
    _navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const _target = document.getElementById(target);
        el.classList.toggle('is-active');
        _target.classList.toggle('is-active');
      });
    });
  }
});

const isValidUsername = (username) => {
  const usernameRegex = /^[A-za-z]{6,30}$/;
  const isValid = usernameRegex.test(username);
  if (username.trim() && isValid) {
    return {
      text: 'Valid username',
      match: isValid
    };
  }
  return {
    text: 'Invalid username. The username should a minimum of 6 characters and a maximum of 30 characters',
    match: isValid
  };
}

const isValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailRegex.test(email);
  if (email.trim() && isValid) {
    return {
      text: 'Valid Email',
      match: isValid
    };
  }
  return {
    text: 'Invalid email! Please enter the format john@doe.com',
    match: isValid
  };
};

const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  const isValid = passwordRegex.test(password);
  if (password.trim() && isValid) {
    return {
      text: 'Valid Password',
      match: isValid
    };
  }
  return {
    text: 'Invalid Password. Password should be of minimum of 8 eight characters with atleast one capital letter, \
        one number and a special character',
    match: isValid
  };
};

const isValidMessage = (message) => {
  const messageRegex = /^\S+.{10,}/;
  const isValid = messageRegex.test(message);
  if (message.trim() && isValid) {
    return {
      text: 'Valid Message',
      match: isValid
    };
  }
  return {
    text: 'Invalid Message description. Description should be atleast 10 character long',
    match: isValid
  };
}

const validateField = (inputElement, parentElement, validateFunction, childLength = 5) => {
  const inputElementValue = inputElement.value;
  const {
    match: validElementMatch,
    text: validElementText
  } = validateFunction(inputElementValue);
  const inputElementContainer = getQuerySelector(parentElement);
  const inputSelector = inputElementContainer.querySelector('.control > input');
  const validationElement = document.createElement('p');
  validationElement.classList.add('help');
  if (validElementMatch) {
    validationElement.innerText = validElementText;
    validationElement.classList.add('is-success');
    validationElement.classList.remove('is-danger');
    inputSelector.classList.add('is-success');
    inputSelector.classList.remove('is-danger');
  } else {
    validationElement.innerText = validElementText;
    validationElement.classList.add('is-danger');
    validationElement.classList.remove('is-success');
    inputSelector.classList.add('is-danger');
    inputSelector.classList.remove('is-success');
  }
  const childNodes = inputElementContainer.childNodes;
  if (childNodes.length <= childLength) {
    inputElementContainer.appendChild(validationElement);
  } else {
    childNodes[childLength].remove();
    inputElementContainer.appendChild(validationElement);
  }
  return validElementMatch;
}
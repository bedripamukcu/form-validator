const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// SHOW INPUT ERROR MESSAGE
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = " form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//SHOW SUCCESS OUTLİNE
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = " form-control success";
}

// Check email is valid
function isValidEmail(input) {
  const re = /\S+@\S+\.\S+/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check input length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters  `);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters  `);
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match ");
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// EVENT LİSTENERS
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  isValidEmail(email);
  checkPasswordsMatch(password, password2);
});

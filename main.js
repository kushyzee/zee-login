const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const createBtn = document.querySelector("#create-btn");
const userExist = document.querySelector("#username-exists");
const emailExist = document.querySelector("#email-exists");
const formError = document.querySelector("#form-error");

let isValidateEmail = false;
let isValidateUsername = false;

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    username: "jsmith",
    email: "johnsmith@gmail.com",
    password: "081385Zeena",
  },

  {
    id: 2,
    firstName: "Rita",
    lastName: "Ora",
    username: "riri",
    email: "ritaora@gmail.com",
    password: "0810888Riri",
  },
];

function changeInputStyle(input, output) {
  input.style.outlineColor = "#c10019";
  input.style.borderColor = "#c10019";
  input.style.marginBottom = "4px";
  output.style.color = "#c10019";
  output.parentElement.style.color = "#c10019";
}

function resetInputStyle(input, output) {
  input.style = "";
  output.textContent = "";
  output.parentElement.style.color = "";
}

function enableCreateButton() {
  createBtn.disabled = false;
  createBtn.style = "";
}

function disableCreateButton() {
  createBtn.disabled = true;
  createBtn.style.backgroundColor = "grey";
  createBtn.style.cursor = "initial";
}

function checkUsername(username) {
  return users.find((user) => user.username === username);
}

function validateUsername() {
  this.value = this.value.toLowerCase();
  let user = checkUsername(this.value);

  if (user) {
    changeInputStyle(this, userExist);
    userExist.textContent = `${this.value} isn't available`;
    isValidateUsername = true;
  } else {
    resetInputStyle(this, userExist);
    isValidateUsername = false;
  }

  if (!isValidateEmail && !isValidateUsername) {
    enableCreateButton();
  } else {
    disableCreateButton();
  }
}

function checkEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function validateEmail() {
  let email = this.value;
  if (!checkEmail(email)) return;

  let user = users.find((user) => user.email === email);

  if (user) {
    changeInputStyle(this, emailExist);
    emailExist.textContent = "Email has already been taken.";
    isValidateEmail = true;
  } else {
    resetInputStyle(this, emailExist);
    isValidateEmail = false;
  }

  if (!isValidateEmail && !isValidateUsername) {
    enableCreateButton();
  } else {
    disableCreateButton();
  }
}

function validatePassword(userPassword) {
  let isUpperCase = false;
  let isNumber = false;
  const minLength = 7;
  let paragraph = password.parentElement.children[1];

  if (userPassword.length < minLength) {
    changeInputStyle(password, paragraph);
    return false;
  }

  for (let i = 0; i < userPassword.length; i++) {
    let char = userPassword[i];
    if (isNaN(char) && char === char.toUpperCase()) {
      isUpperCase = true;
    } else if (!isNaN(char)) {
      isNumber = true;
    }
  }

  if (!(isUpperCase && isNumber)) {
    changeInputStyle(password, paragraph);
    return false;
  } else {
    resetInputStyle(password, paragraph);
    return true;
  }
}

function createUserId() {
  return users[users.length - 1].id + 1;
}

function createNewAccount(e) {
  e.preventDefault();

  const inputs = Array.from(document.querySelectorAll("input[type]"));
  inputs.map((input) => {
    input.addEventListener("focus", () => (formError.textContent = ""));
  });

  const inputsValue = inputs.map((input) => input.value);

  let [userFirstName, userLastName, userUsername, userEmail, userPassword] =
    inputsValue;

  if (
    !userFirstName ||
    !userLastName ||
    !userUsername ||
    !userEmail ||
    !userPassword
  ) {
    formError.textContent = "Please fill all the fields";
    return;
  }

  if (!checkEmail(userEmail)) {
    changeInputStyle(email, emailExist);
    emailExist.textContent = "Please enter a real email address";
    return;
  } else {
    resetInputStyle(email, emailExist);
  }

  if (!validatePassword(userPassword)) {
    return
  }

  let newUserId = createUserId();
  const newUser = {
    id: newUserId,
    firstName: userFirstName,
    lastName: userLastName,
    username: userUsername,
    email: userEmail,
    password: userPassword,
  };

  users.push(newUser);

  document.body.innerHTML = `
  <h1>Hello ${newUser.firstName}, Welcome to Zeetech</h1>
  <p style="font-size:20px">Your full name is ${newUser.firstName} ${newUser.lastName}. Your username is ${newUser.username} and your email address is ${newUser.email}</p>
  `;
}

function loginUser() {
  function checkPassword() {
    return currentUser.password === password ? true : false;
  }

  const username = prompt("Username");
  if (!username) return;

  let currentUser = checkUsername(username);
  if (!currentUser) {
    alert("Account doesn't exist, sign up?");
    return;
  }

  const password = prompt("Password");
  if (!password) return;
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
createBtn.addEventListener("click", createNewAccount);

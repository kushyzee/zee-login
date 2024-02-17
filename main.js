const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const createBtn = document.querySelector("#create-btn");
const userExist = document.querySelector("#username-exists");
const emailExist = document.querySelector("#email-exists");
const formError = document.querySelector("#form-error");

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

function changeInputStyle(input) {
  input.style.outlineColor = "#ff3232";
  input.style.borderColor = "#ff3232";
  input.style.marginBottom = "4px";
  createBtn.disabled = true;
  createBtn.style.backgroundColor = "grey";
  createBtn.style.cursor = "initial";
}

function resetInputStyle(input) {
  input.style = "";
  createBtn.disabled = false;
  createBtn.style = "";
}

function checkUsername(username) {
  return users.find((user) => user.username === username);
}

function confirmUser() {
  this.value = this.value.toLowerCase();
  let user = checkUsername(this.value);

  if (user) {
    changeInputStyle(this);
    userExist.textContent = `${this.value} isn't available`;
  } else {
    resetInputStyle(this);
    userExist.textContent = "";
  }
}

function checkEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function confirmEmail() {
  let email = this.value;
  if (!checkEmail(email)) return;

  let user = users.find((user) => user.email === email);

  if (user) {
    changeInputStyle(this);
    emailExist.textContent = "Email already exists";
  } else {
    resetInputStyle(this);
    emailExist.textContent = "";
  }
}

function checkPassword(password) {
  let upperCase = false;
  let number = false;
  const minLength = 7;

  if (password.length < minLength) {
    return;
  }

  for (let i = 0; i < password.length; i++) {}
}

function createNewAccount(e) {
  e.preventDefault();
  let userFirstName = firstName.value;
  let userLastName = lastName.value;
  let userUsername = username.value;
  let userEmail = email.value;
  let userPassword = password.value;

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

  formError.textContent = ''

  if (!checkEmail(userEmail)) {
    changeInputStyle(email);
    emailExist.textContent = "Please enter a real email address";
    return;
  } else {
    resetInputStyle(email);
    emailExist.textContent = "";
  }

  console.log("pass");

  // checkPassword(userPassword);
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

username.addEventListener("input", confirmUser);
email.addEventListener("input", confirmEmail);
createBtn.addEventListener("click", createNewAccount);
// password.addEventListener("input", checkPassword);

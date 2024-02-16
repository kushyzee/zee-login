const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const createBtn = document.querySelector("#create-btn");
const userExist = document.querySelector("#username-exists");

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
}

function resetInputStyle(input) {
  input.style.outlineColor = "";
  input.style.borderColor = "";
}

function confirmUser() {
  let user = checkUsername(this.value);

  if (user) {
    changeInputStyle(this);
    userExist.textContent = `${this.value} isn't available`;
  } else {
    resetInputStyle(this);
    userExist.textContent = "";
  }
}

function checkUsername(username) {
  return users.find((user) => user.username === username);
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

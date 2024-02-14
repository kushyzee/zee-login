const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    username: 'jsmith',
    email: 'johnsmith@gmail.com',
    password: '081385Zeena',
  },

  {
    id: 2,
    firstName: 'Rita',
    lastName: 'Ora',
    username: 'riri',
    email: 'ritaora@gmail.com',
    password: '0810888Riri',
  },
]

function checkUsername(username) {
  return users.find(user => user.username === username)
}

function loginUser() {
  function checkPassword() {
    return currentUser.password === password ? true : false
  }

  const username = prompt('Username')
  if (!username) return

  let currentUser = checkUsername(username)
  if (!currentUser) {
    alert("Account doesn't exist, sign up?")
    return
  }

  const password = prompt('Password')
  if (!password) return

  checkPassword() ? alert(`Login successful. Hello ${currentUser.firstName}!`) : alert('incorrect password')
}

function welcomePage() {  
  const userSelection = prompt('Enter 1 to signup, 2 to login')

  if (userSelection === '1') {
    alert('Sign up!')
  }

  else if (userSelection === '2') {
    alert('Login!')
    loginUser()
  }

  else if (userSelection === null) {
    alert('cancelled!')
  }

  else {
    alert('Please select 1 or 2')
    welcomePage()
  }
}

alert('welcome!')
welcomePage()
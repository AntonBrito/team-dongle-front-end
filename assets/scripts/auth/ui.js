'use strict'
// remove signIn and signOut
const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in succes!')
  }
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
}

const changePasswordSuccess = (data) => {
  console.log('Password Successfully Changed.')
}
const changePasswordFailure = (error) => {
  console.log(error)
}

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
  console.log('something is wrong with!')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess
}

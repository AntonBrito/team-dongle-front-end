'use strict'
const app = require('../app.js')
// const events = require('./events.js')

const signUpSuccess = (data) => {
  console.log(data)
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  app.user = data.user
  const titles = app.user.pages.title
  for (let i = 0; i < titles.length; i++) {
    $('#pages-dropdown').append(titles[i])
  }
  console.log('signed in!')
  console.log(app.user)
}

const signInFailure = (error) => {
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordfailure = (error) => {
  console.log(error)
}

const logOutSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const logOutFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordfailure,
  changePasswordSuccess,
  logOutFailure,
  logOutSuccess
}

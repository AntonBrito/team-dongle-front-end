// required files //

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// page funtionality //

// events //

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onGetAllPosts = function (event) {
  event.preventDefault()
  api.getAllPosts()
    .then(ui.getAllPostsSuccess)
    .catch(ui.getAllPostsFailure)
}

const onGetAllPages = function (event) {
  event.preventDefault()
  api.getAllPages()
    .then(ui.getAllPagesSuccess)
    .catch(ui.getAllPagesFailure)
}

const onGetAllMyPosts = function (event) {
  event.preventDefault()
  api.getAllMyPosts()
    .then(ui.getAllMyPostsSuccess)
    .catch(ui.getAllMyPostsFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetAllPosts,
  onGetAllPages,
  onGetAllMyPosts
}

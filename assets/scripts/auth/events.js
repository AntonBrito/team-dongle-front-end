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

const onGetAllMyPages = function () {
  // event.preventDefault()
  api.getAllMyPages()
    .then(ui.getAllMyPagesSuccess)
    .catch(ui.getAllMyPagesFailure)
}

const onGetOnePage = function (event) {
  const data = getFormFields(this)
  api.getOnePage(data)
    .then(ui.getOnePageSuccess)
    .catch(ui.getOnePageFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(onGetAllMyPages)
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

const onGetAllMyPosts = function (event) {
  event.preventDefault()
  api.getAllMyPosts()
    .then(ui.getAllMyPostsSuccess)
    .catch(ui.getAllMyPostsFailure)
}

const onCreatePost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onEditPost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.editPost(data)
    .then(ui.onEditPostSuccess)
    .catch(ui.onEditPostFailure)
}

const onGetAllPages = function (event) {
  event.preventDefault()
  api.getAllPages()
    .then(ui.getAllPagesSuccess)
    .catch(ui.getAllPagesFailure)
}

// TODO add promise to call getAllMyPages
const onCreatePage = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPage(data)
    .then(ui.createPageSuccess)
    .catch(ui.createPageFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetAllPosts,
  onGetAllMyPosts,
  onCreatePost,
  onEditPost,
  onGetAllPages,
  onGetAllMyPages,
  onCreatePage,
  onGetOnePage
}

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

const onUpdatePostSaveId = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log('onUpdatePostSaveId = ' + dataId)
  event.preventDefault()
  $('#update_posts_form').attr({
    'data-id': dataId
  })
}

const onUpdatePost = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  console.log('onUpdatePost dataId = ' + dataId)
  event.preventDefault()
  api.updatePost(data, dataId)
    .then(ui.editPostSuccess)
    .catch(ui.editPostFailure)
}

const onDeletePost = function (event) {
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.deletePost(dataId)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFailure)
}

const onGetAllPages = function (event) {
  event.preventDefault()
  api.getAllPages()
    .then(ui.getAllPagesSuccess)
    .catch(ui.getAllPagesFailure)
}

const onGetAllMyPages = function () {
  // event.preventDefault()
  api.getAllMyPages()
    .then(ui.getAllMyPagesSuccess)
    .catch(ui.getAllMyPagesFailure)
}

const onGetOnePage = function (event) {
  console.log('onGetOnePage called')
  const dataId = this.getAttribute('data-id')
  console.log('dataId = ' + dataId)
  api.getOnePage(dataId)
    .then(ui.getOnePageSuccess)
    .catch(ui.getOnePageFailure)
}

const onCreatePage = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPage(data)
    .then(ui.createPageSuccess)
    .then(onGetAllMyPages)
    .catch(ui.createPageFailure)
}

const onUpdatePage = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.updatePage(data, dataId)
    .then(ui.updatePageSuccess)
    .catch(ui.updatePageFailure)
}

const onDeletePage = function (event) {
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.deletePage(dataId)
    .then(ui.deletePageSuccess)
    .then(onGetAllMyPages)
    .catch(ui.deletePageFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetAllPosts,
  onGetAllMyPosts,
  onCreatePost,
  onUpdatePostSaveId,
  onUpdatePost,
  onDeletePost,
  onGetAllPages,
  onGetAllMyPages,
  onCreatePage,
  onUpdatePage,
  onGetOnePage,
  onDeletePage
}

'use strict'
const app = require('../app.js')
const template = require('../handlebars-data')
// const events = require('./events.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('signed up Successfully')
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
  console.log('failed to signUp')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log('signed in!')
  console.log(app.user)
  $('#signfo').hide()
  $('#message').html('You Have Signed In!')
}

const signInFailure = (error) => {
  console.log(error)
  console.log('failure in signInFailure')
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordfailure = (error) => {
  console.log(error)
}

const logOutSuccess = (data) => {
  console.log(data)
  console.log('Succeded in logOutSuccess')
  $('#signfo').show()
  $('#message').html('You Have Signed Out!')
}

const logOutFailure = (error) => {
  console.log(error)
  console.log('Failed in logOutFailure')
}
const getAllPostsSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all posts by all users')
  $('#post-div').empty()
  for (let i = 0; i < data.posts.length; i++) {
    const title = data.posts[i].title
    const body = data.posts[i].body
    const dataId = data.posts[i]._id
    template.postsHandlebars(title, body, dataId)
  }
}
const getAllPostsFailure = (err) => {
  console.log(err)
  console.log('Failed retieving all posts by all users')
  $('#post-div').html('These Are Not The Posts You Are Looking For')
}

// we can dry this code out after crud functionality is done
const getAllMyPostsSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all MY posts')
  $('#post-div').empty()
  for (let i = 0; i < data.posts.length; i++) {
    const title = data.posts[i].title
    const body = data.posts[i].body
    const dataId = data.posts[i]._id
    template.postsHandlebars(title, body, dataId)
  }
}

// not being called by .catch in events.js
const getAllMyPostsFailure = (error) => {
  console.log('Failed')
  $('#post-div').html('These Are Not The Posts You Are Looking For')
  console.log(error)
}

const getAllPagesSuccess = (data) => {
  app.pages = data.pages
  console.log(app.pages)
  console.log('Succeded in getAllPagesSuccess')
}

const getOnePageSuccess = (data) => {
  console.log('succeeded in getOnePageSuccess')
  // assign for edit or delete
  app.page = data.page
  console.log(app.page)
  $('#pages-div').empty()
  const title = data.page.title
  const heading = data.page.sections.heading
  const body = data.page.sections.body
  const footer = data.page.sections.footer
  const dataId = data.page._id
  console.log(title + heading + body + footer + dataId)
  template.pagesHandlebars(title, heading, body, footer, dataId)
}

const getAllPagesFailure = (error) => {
  console.log(error)
  console.log('Failed in getAllPagesFailure')
}

const getAllMyPagesSuccess = (data) => {
  console.log('I am getAllMyPagesSuccess')
  console.log(data)
  console.log('app === ' + app.page)
  console.log('Succeded')
  $('#listOfPages').empty()
  for (let i = 0; i < data.pages.length; i++) {
    // data-id = data.pages[i]._id
    const dataId = data.pages[i]._id
    console.log('dataId === ' + dataId)
    const title = data.pages[i].title
    template.dropdownHandlebars(title, dataId)
  }
}

const getAllMyPagesFailure = (error) => {
  console.log(error)
  console.log('Failed in getAllMyPagesFailure')
}

const createPageSuccess = (data) => {
  console.log(data)
  console.log('Succeded in createPageSuccess')
}

const createPageFailure = (error) => {
  console.log(error)
  console.log('Failed in createPageFailure')
}

const deletePageSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deletePageSuccess')
  $('#pages-div').empty()
}

const deletePageFailure = (error) => {
  console.log(error)
  console.log('Failed in deletePageFailure')
}

const deletePostSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deletePostSuccess')
}

const deletePostFailure = (error) => {
  console.log(error)
  console.log('Failed in deletePostFailure')
}

const updatePageSuccess = (data) => {
  console.log(data)
  console.log('Succeded in updatePageSuccess')
  $('#pages-div').empty()
  const title = data.page.title
  const heading = data.page.sections.heading
  const body = data.page.sections.body
  const footer = data.page.sections.footer
  const dataId = data.page._id
  console.log(title + heading + body + footer + dataId)
  template.pagesHandlebars(title, heading, body, footer, dataId)
}

const updatePageFailure = (error) => {
  console.log(error)
  console.log('Failed in updatePageFailure')
}

const updatePostSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deletePageSuccess')
  $('#post-div').empty()
  for (let i = 0; i < data.posts.length; i++) {
    const title = data.posts[i].title
    const body = data.posts[i].body
    template.postsHandlebars(title, body)
  }
}

const updatePostFailure = (error) => {
  console.log(error)
  console.log('Failed in deletePageFailure')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordfailure,
  changePasswordSuccess,
  logOutFailure,
  logOutSuccess,
  getAllPostsSuccess,
  getAllPostsFailure,
  getAllMyPostsSuccess,
  getAllMyPostsFailure,
  getAllPagesSuccess,
  getAllPagesFailure,
  getOnePageSuccess,
  getAllMyPagesSuccess,
  getAllMyPagesFailure,
  createPageSuccess,
  createPageFailure,
  deletePageSuccess,
  deletePageFailure,
  deletePostSuccess,
  deletePostFailure,
  updatePageSuccess,
  updatePageFailure,
  updatePostSuccess,
  updatePostFailure
}

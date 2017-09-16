'use strict'
const app = require('../app.js')
const template = require('../handlebars-data')
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
  console.log('signed in!')
  console.log(app.user)
  const titles = app.user.pages.title
  for (let i = 0; i < titles.length; i++) {
    $('#pages-dropdown').append(titles[i])
  }
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
const getAllPostsSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all posts by all users')
  $('#post-div').empty()
  for (let i = 0; i < data.posts.length; i++) {
    const title = data.posts[i].title
    const body = data.posts[i].body
    template.postsHandlebars(title, body)
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
    template.postsHandlebars(title, body)
  }
}

// not being called by .catch in events.js
const getAllMyPostsFailure = (error) => {
  console.log('Failed')
  $('#post-div').html('These Are Not The Posts You Are Looking For')
  console.log(error)
}

const getAllPagesSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const getAllPagesFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const getAllMyPagesSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const getAllMyPagesFailure = (error) => {
  console.log(error)
  console.log('Failed')
}

const createPageSuccess = (data) => {
  console.log(data)
  console.log('Succeded')
}

const createPageFailure = (error) => {
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
  logOutSuccess,
  getAllPostsSuccess,
  getAllPostsFailure,
  getAllMyPostsSuccess,
  getAllMyPostsFailure,
  getAllPagesSuccess,
  getAllPagesFailure,
  getAllMyPagesSuccess,
  getAllMyPagesFailure,
  createPageSuccess,
  createPageFailure
}
